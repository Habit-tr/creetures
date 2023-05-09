'use client';
import React, { useState, useEffect } from 'react';
import { supabase } from '@/app/layout';
import { Heading } from '@chakra-ui/react';
import Link from 'next/link';

type Params = {
  params: {
    categoryName: string,
  }
}

export default function SingleCategory({ params: { categoryName } }: Params) {
  const [categoryChallenges, setCategoryChallenges] = useState<any[]>([]);

  useEffect(() => {
    async function fetchChallengesByCategory() {
      const res = await supabase.from('categories').select('id').eq('name', categoryName);
      const categoryId = res.data?.[0]?.id;
      const { data } = await supabase.from('challenges').select().eq('category_id', categoryId);
      setCategoryChallenges(data || []);
    }
    fetchChallengesByCategory();
  }, [categoryName]);

  return (
    <>
      <Heading as='h1'>{categoryName} challenges</Heading>
      {categoryChallenges && categoryChallenges.length
      ? categoryChallenges.map(challenge => (
        <Link href={`/home/challenges/${challenge.id}`} key={challenge.id}>
          <Heading as='h2' size='md'>{challenge.name}</Heading>
        </Link>
      ))
      : null}
    </>
  )
};
