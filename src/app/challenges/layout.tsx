import Link from 'next/link'
import React from 'react'

export default function ChallengesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <nav>
        <Link href='/challenges/browse'>Browse</Link>
        <Link href='/challenges/categories'>Categories</Link>
        <Link href='/challenges/challenge'>Challenge</Link>
        <Link href='/challenges/create'>Create</Link>
        <Link href='/challenges/edit'>Edit</Link>
      </nav>
      <main>
        {children}
      </main>
    </>
  )
}
