import Link from 'next/link'
import React from 'react'

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <nav>
        <Link href='/profile/rewards'>Rewards</Link>
        <Link href='/profile/settings'>Settings</Link>
      </nav>
      <main>
        {children}
      </main>
    </>
  )
}
