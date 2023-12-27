import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SupabaseProvider from './providers/supabase'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Nexcent',
  description: 'The soul of the future',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body className={ inter.className}>
        <SupabaseProvider>

        <Navbar />
        {children}
        <Footer />
        </SupabaseProvider>

        </body>
    </html>
  )
}
