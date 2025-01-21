import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_KEY;

// Initialisering af Supabase Klient
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export default supabase;
