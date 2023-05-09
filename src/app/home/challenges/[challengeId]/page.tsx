'use client';
import React, { useState, useEffect } from 'react';
import { supabase } from '@/app/layout';
import { Button, Heading } from '@chakra-ui/react';
import Link from 'next/link';

type Params = {
  params: {
    challengeId: string,
  }
}

export default function SingleChallenge({ params: { challengeId } }: Params) {
  const [challenge, setChallenge] = useState<any>({});
  const [category, setCategory] = useState<string>('');
  
  useEffect(() => {
    async function fetchSingleChallenge() {
      const { data } = await supabase.from('challenges').select().eq('id', challengeId);
      const fetchedChallenge = data?.[0];
      setChallenge(fetchedChallenge);
      if (fetchedChallenge) {
        const res = await supabase.from('categories').select('name').eq('id', fetchedChallenge.category_id);
        setCategory(res.data?.[0]?.name ?? '');
      }
    }
    fetchSingleChallenge();
  }, [challengeId]);
  

  return (
    challenge && category
    ? <>
        <Heading>{challenge.name}</Heading>
        <p>
          Category:&nbsp;&nbsp;
          <Link href={`/home/challenges/categories/${category}`}>{category}</Link>  
        </p>
        <Button>Commit to this Challenge</Button>
        {/* "Commit" button links to commit form modal */}
      </>
    : null
  )
};
