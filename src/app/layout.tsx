import './styles/globals.css'
import { Inter } from 'next/font/google'
import { cn } from '../../lib/utils'



const inter = Inter({
  weight: ['100', '200', '300', '400'],
  subsets: ['latin'] })

export const metadata = {
  title: 'Creetures',
  display: 'inline',
  description: 'An App to Build Good Habits',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
    lang="en"
    className={cn('bg-white text-slate-900 antialiased', inter.className)}>

    <body className='min-h-screen bg-slate-50 dark:bg-slate-900 antialiased'>
        {children}
      </body>

    </html>
  )
}
