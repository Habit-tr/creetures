"use client";
import { createClient } from "@supabase/supabase-js";
import LoginPage from ".";
import "./styles/globals.css";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl!, supabaseKey!);

// export const metadata = {
//   title: "Creetures",
//   display: "inline",
//   description: "An App to Build Good Habits",
// };

function MyApp() {
  return <LoginPage />;
}

export default MyApp;
