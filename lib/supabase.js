import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL || "https://azldojirqkksrsdqtbxy.supabase.co";
const supabaseKey = process.env.SUPABASE_ANON_KEY || " eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF6bGRvamlycWtrc3JzZHF0Ynh5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU0MjAyNTUsImV4cCI6MjA0MDk5NjI1NX0.K8r1dgk4zHuRt8v3LkJOCq60ql0AB5lZX2DYm0iF7OU "; 

export default createClient(supabaseUrl, supabaseKey);