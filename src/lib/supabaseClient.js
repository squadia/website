import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://veofbxujodjoqeynzsbj.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_RQgmP6xwr4BWJBL4dzMblQ_3qXM1rHl';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: { persistSession: false },
});
