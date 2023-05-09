"use client";
import { createClient } from "@supabase/supabase-js";
import LoginPage from ".";
import "./styles/globals.css";
import { useUser } from "@supabase/auth-helpers-react";
import { useRouter } from "next/navigation";
import supabase from "../../../../lib/supabaseClient";

// export const metadata = {
//   title: "Creetures",
//   display: "inline",
//   description: "An App to Build Good Habits",
// };

function MyApp() {
  const user = useUser();
  const router = useRouter();

  // supabase.auth.onAuthStateChange((event, session) => {
  //   router.push("/home");
  // });

  return user ? <Dashboard /> : <LoginPage />;
}

export default MyApp;
