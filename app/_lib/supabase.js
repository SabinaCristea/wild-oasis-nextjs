import { createClient } from "@supabase/supabase-js";

// export const supabase = createClient(
//   "https://usioiuiauydnbpfwfawx.supabase.co",
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVzaW9pdWlhdXlkbmJwZndmYXd4Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcwNjAxMzE3OSwiZXhwIjoyMDIxNTg5MTc5fQ.lndbWU9rmZjE5k27PJfE6g3q_tNfFhKst9AtJRRqJ8c"
// );
export const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);
