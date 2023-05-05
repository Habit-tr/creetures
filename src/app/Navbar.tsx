import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav>
      <Link href='/profile'>Profile</Link>
      <Link href='/challenges'>Challenges</Link>
      <Link href='/'>Logout</Link>
    </nav>
  )
}
