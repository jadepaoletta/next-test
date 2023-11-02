import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/header'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        < Header />
        <h1 className="hover:text-slate-500"><Link href="/">Home</Link></h1>
        <h1 className="hover:text-slate-500"><Link href="/about">About</Link></h1>
        <h1 className="hover:text-slate-500"><Link href="/test-page">Test Page</Link></h1>
        {children}
      </body>
    </html>
  )
}
