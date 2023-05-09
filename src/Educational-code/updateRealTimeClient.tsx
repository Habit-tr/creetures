"use client";
import { useEffect, useState } from "react"
import { supabase } from "../../utils/supabase";




export default function RealtimeChallenges({serverChallenges}: {serverChallenges: Challenge[]}) {

    const [challenges, setChallenges] = useState(serverChallenges);


    useEffect(()=> {
        const channel = supabase
        .channel('realtime challenges')
        .on('postgres_changes',
        {
            event: 'INSERT',
            schema: 'public',
            table: 'challenges'
        },
            (payload) => {
                setChallenges([...challenges, payload.new as Challenge])
            }).subscribe();

            return () => {
                supabase.removeChannel(channel)
            }
    }, [challenges, setChallenges])

    return <pre>{JSON.stringify(challenges, null, 2)}</pre>
}
