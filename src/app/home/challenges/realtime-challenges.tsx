'use client';
import supabase from '../../../../utils/supabase';
import { useEffect, useState } from 'react';
import { Heading } from '@chakra-ui/react';
import Link from 'next/link';

type Challenge = {
  id: string;
  created_at: string;
  category_id: string;
  name: string;
  created_by: string;
};

export default function RealtimeChallenges({serverChallenges}: { serverChallenges: Challenge[] }) {
  const [challenges, setChallenges] = useState(serverChallenges);

  useEffect(() => {
    const channel = supabase.channel('realtime challenges').on('postgres_changes', {
      event: 'INSERT',
      schema: 'public',
      table: 'challenges',
    },
    (payload) => {
      setChallenges([...challenges, payload.new as Challenge]);
    }).subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [challenges, setChallenges]);
  
  return (
    <>
      <Heading as='h1'>All Challenges</Heading>
      {challenges && challenges.length
      ? challenges.map(challenge => (
        <Link href={`/home/challenges/${challenge.id}`} key={challenge.id}>
          <Heading as='h2' size='md'>{challenge.name}</Heading>
        </Link>
      ))
      : null}
    </>
  );
};
