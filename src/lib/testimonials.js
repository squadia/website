import { supabase } from './supabaseClient';
import { THANK_YOU_WEBHOOK_URL, NEW_TESTIMONIAL_SMS_WEBHOOK_URL } from './testimonialsConfig';

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

  // Alerte SMS à l'équipe, même sans email (le témoignage est déjà enregistré : un échec ici est sans effet)
  fetch(NEW_TESTIMONIAL_SMS_WEBHOOK_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ firstName, role, company }),
    keepalive: true,
  }).catch(() => {});

  if (email) {
    // keepalive : la page redirige juste après, sans ça le navigateur annule la requête.
    fetch(THANK_YOU_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ firstName, email }),
      keepalive: true,
    }).catch(() => {});
  }

  return path;
}

export async function fetchApprovedTestimonials(page) {
  const { data, error } = await supabase
    .from('testimonial_videos')
    .select('id, storage_path, label, cuts')
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
