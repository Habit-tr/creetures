'use client'
import React from 'react';
import { supabase } from '../layout';
import { Heading } from '@chakra-ui/react';

export default async function AllChallenges() {
  // const [challenges, setChallenges] = useState<
  //   | {
  //       [x: string]: any;
  //     }[]
  //   | null
  // >(null);
  // const fetchAllChallenges: () => Promise<void> = async () => {
  //   let { data: challenges, error } = await supabase
  //     .from("challenges")
  //     .select("*");
  //   setChallenges(challenges);
  // };

  // useEffect = () => {
  //   fetchAllChallenges();
  // };
  const { data } = await supabase.from('challenges').select();

  return (
    <div>
      <Heading>All Challenges</Heading>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      {/* {challenges &&
        challenges.map((challenge) => {
          <Text>challenge.name</Text>;
        })} */}
    </div>
  );
}
