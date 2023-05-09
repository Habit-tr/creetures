import { supabase } from "../../utils/supabase";
import RealtimeChallenges from "./realTimeClient";

export const revalidate = 0;

export default async function Challenges() {
    const { data } = await supabase.from("challenges").select("*");
    return <RealtimeChallenges serverChallenges={data ?? []} />;
}
