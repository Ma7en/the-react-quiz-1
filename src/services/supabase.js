import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://zvgecjscvxowfgliskcq.supabase.co";
const supabaseKey = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp2Z2VjanNjdnhvd2ZnbGlza2NxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDU0ODU2OTEsImV4cCI6MjAyMTA2MTY5MX0.SLBQKazLX0gkrngNY5jUt2TaUA28BC7A5kVrRpszw9A`;
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
