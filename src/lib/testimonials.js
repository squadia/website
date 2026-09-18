import { supabase } from './supabaseClient';

const BUCKET = 'testimonial-videos';
const SIGNED_URL_TTL_SECONDS = 3600;

export async function uploadTestimonial(blob, durationSeconds, contact = {}) {
  const extension = blob.type.includes('mp4') ? 'mp4' : 'webm';
  const path = `${crypto.randomUUID()}.${extension}`;

  const { error: uploadError } = await supabase.storage.from(BUCKET).upload(path, blob, {
    contentType: blob.type || 'video/webm',
  });
  if (uploadError) throw uploadError;

  const { firstName, email, role, company } = contact;
  const label = [firstName, [role, company].filter(Boolean).join(', ')]
    .filter(Boolean)
    .join(' · ') || null;

  const { error: insertError } = await supabase.from('testimonial_videos').insert({
    storage_path: path,
    duration_seconds: durationSeconds ?? null,
    first_name: firstName || null,
    email: email || null,
    role: role || null,
    company: company || null,
    label,
  });
  if (insertError) throw insertError;

  return path;
}

export async function fetchApprovedTestimonials(page) {
  const { data, error } = await supabase
    .from('testimonial_videos')
    .select('id, storage_path, label')
    .eq('status', 'approved')
    .eq('assigned_page', page);

  if (error || !data || data.length === 0) return [];

  const withUrls = await Promise.all(
    data.map(async (row) => {
      const { data: signed } = await supabase.storage
        .from(BUCKET)
        .createSignedUrl(row.storage_path, SIGNED_URL_TTL_SECONDS);
      return { ...row, url: signed?.signedUrl ?? null };
    })
  );

  return withUrls.filter((row) => row.url);
}
