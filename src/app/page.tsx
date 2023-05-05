"use client";
import { useRouter } from "next/navigation";
import {
  createBrowserSupabaseClient,
  Session,
} from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import type { AppProps } from "next/app";
import { useState } from "react";
import { Database } from "./db_types";
import "./styles/globals.css";
import { createClient } from "@supabase/supabase-js";
import LoginPage from ".";
import { ChakraProvider } from "@chakra-ui/react";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);

function MyApp() {
  const router = useRouter();
  const [supabaseClient] = useState(() =>
    createBrowserSupabaseClient<Database>()
  );

  return (
    <SessionContextProvider supabaseClient={supabaseClient}>
      <ChakraProvider>
        <LoginPage></LoginPage>
        <button
          onClick={async () => {
            await supabaseClient.auth.signOut();
            router.push("/");
          }}
        >
          Logout
        </button>
      </ChakraProvider>
    </SessionContextProvider>
  );
}

export default MyApp;
