import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = process.env.SUPABASE_URL || 'Please add SUPABASE_URL to your .env file';
const SUPABASE_PUBLIC_API_KEY = process.env.SUPABASE_PUBLIC_API_KEY || 'Please add SUPABASE_URL to your .env file';

const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLIC_API_KEY);

export default supabase;
