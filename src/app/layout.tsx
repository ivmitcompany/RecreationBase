import type { Metadata } from 'next'
import './globals.css'
import { manrope, luxurious } from './fonts'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

type RootLayoutProps = Readonly<{
  children: React.ReactNode
}>

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ua">
      <body className={`${manrope.variable} ${luxurious.variable}`}>
        <header></header>
        <main>{children}</main>
        <footer></footer>
      </body>
    </html>
  )
}
