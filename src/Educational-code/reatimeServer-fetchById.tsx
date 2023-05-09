import { supabase } from "../../utils/supabase";
// import { PageNotFoundError } from "next/dist/shared/lib/utils";
import { notFound } from 'next/navigation'

/////// this file is a dynamic page that fetches data from supabase ////////

// updating the incoming data every 0 seconds
export const revalidate = 0;

// Because we have set the revalidate to 0, we won't need the static data fetching below //

// optimizing the page load by staticly rendering the data
// export async function genericStaticParams() {
//     const { data: challenges } = await supabase.from("challenges").select("id");
//     return challenges ?? []
// }


// fetching the single challenge by id
export default async function SingleChallenge({ params: { id}} : { params: { id: string}}) {
    const { data : challenge} = await supabase
    .from("challenges")
    .select("*")
    .match({ id: id })
    .single()

    if(!challenge) {
        notFound()
    }

    return <pre>{JSON.stringify(challenge, null, 2)}</pre>
}

// if we were to show the updated challenge:
   // return <RealtimeChallenge serverChallenge={challenge}>
