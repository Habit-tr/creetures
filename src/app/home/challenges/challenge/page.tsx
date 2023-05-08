'use client'
import React from 'react'
import { Button, Heading } from '@chakra-ui/react'

export default function SingleChallenge() {
  return (
    <div>
      <Heading>Single Challenge</Heading>
      <Button>Commit to this Challenge</Button>
      {/* "Commit" button links to commit form modal */}
    </div>
  )
}
