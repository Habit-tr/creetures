// PREVIOUS CODE
// 'use client';
// import React, { useState, useEffect } from 'react';
// import { supabase } from '../layout';
// import { Heading } from '@chakra-ui/react';
// import Link from 'next/link';

// export default function AllChallenges() {
//   const [challenges, setChallenges] = useState<any[]>([]);

//   useEffect(() => {
//     async function fetchChallenges() {
//       const { data } = await supabase.from('challenges').select();
//       setChallenges(data || []);
//     }
//     fetchChallenges();
//   }, []);

//   return (
//     <>
//       <Heading as='h1'>All Challenges</Heading>
//       {challenges && challenges.length
//       ? challenges.map(challenge => (
//         <Link href={`/home/challenges/${challenge.id}`} key={challenge.id}>
//           <Heading as='h2' size='md'>{challenge.name}</Heading>
//         </Link>
//       ))
//       : null}
//     </>
//   );
// }

import supabase from '../../../../utils/supabase';
import RealtimeChallenges from './realtime-challenges';

export const revalidate = 0;
  
export default async function Challenges() {
  const { data } = await supabase.from('challenges').select();
  return <RealtimeChallenges serverChallenges={data ?? []} />
};
