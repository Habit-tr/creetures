"use client";
import { useEffect, useState } from "react"
import { supabase } from "../../utils/supabase";

type Challenge = {
    id: string;
    name: string;
    category_id: string;
    created_at: string;
}

// in this component we are using a channel to listen to the updates that are happening in the server side
// based on the event we are listening to, we will fetch the updated data from the server and update the state

// setting the supabase for listening to events:(telling supabase to broadcast the changes on the selected tables)
   // go to supabase dashboard / database / replication
   // click on Source / 0 tables
   // enable the toggle button

// export a default function that takes a server prop
// specify the type of data that we are fetching from our supabase
// in the function, specify that our serverprops are going to be a challenge array

export default function RealtimeChallenge({serverChallenge}: {serverChallenge: Challenge[]}) {

    const [challenge, setChallenge] = useState(serverChallenge);


    useEffect(()=> {
        const channel = supabase
        .channel('realtime challenges')
        .on('postgres_changes',
        {
            event: 'UPDATE',
            schema: 'public',
            table: 'challenges',
            filter: `id=eq.${challenge.id}`
        },
            (payload) => {
                setChallenge([payload.new as Challenge])
            }).subscribe();

            return () => {
                supabase.removeChannel(channel)
            }
    }, [challenge, setChallenge])

    return <pre>{JSON.stringify(challenge, null, 2)}</pre>
}







//////////////////// OLD WAY //////////////////////

// "use client";

// import { supabase } from "../../utils/supabase";
// import { useEffect, useState } from "react";

// export const revalidate = 0;

// export default function Challenges() {
//     const [challenges, setChallenges] = useState([]);
//     const [isLoading, setIsLoading] = useState(true);

//     useEffect(()=> {
//         const getChallenges = async () => {
//             const { data: challenge } = await supabase.from("challenges").select("*");
//             setIsLoading(false);
//             setChallenges(data);
//         }

//         getChallenges();
//     }, [])

//     return isLoading ? (
//         <div>Loading Spinner!</div>
//     ) : (
//         <pre>{JSON.stringify(challenge, null, 2)}</pre>
//     )
// }
