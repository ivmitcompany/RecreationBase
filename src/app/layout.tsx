import type { Metadata } from 'next'

import Footer from '@/components/layout/footer/Footer'
import Header from '@/components/layout/header/Header'
import Providers from '@/store/providers'
import { cn } from '@/utils'
import { ReactNode } from 'react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { luxurious, manrope } from './fonts'
import './globals.css'

export const metadata: Metadata = {
  description: 'Generated by create next app',
  title: 'Create Next App',
}

type RootLayoutProps = Readonly<{
  children: ReactNode
}>

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ua">
      <body
        className={cn(
          'relative flex min-h-screen flex-col',
          manrope.variable,
          luxurious.variable
        )}
      >
        <Providers>
          <Header />
          <main className="flex-shrink flex-grow basis-0">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
