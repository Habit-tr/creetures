'use client'
// import React from 'react'
import { supabase } from '../../../layout'
import { Heading } from '@chakra-ui/react'

export default async function Categories() {
  const { data } = await supabase.from('categories').select();
  
  return (
    <>
      <Heading>Categories</Heading>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  )
}
