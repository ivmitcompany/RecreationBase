import { Inter, Luxurious_Script, Open_Sans, Roboto } from 'next/font/google'

export const inter = Inter({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['200', '300', '400', '500'],
})

export const roboto = Roboto({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-roboto',
  weight: ['300', '500', '700'],
})

export const openSans = Open_Sans({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-open-sans',
  weight: ['300', '400', '600'],
})

export const luxurious = Luxurious_Script({
   display: 'swap',
   subsets: ['latin'],
   variable: '--font-luxurious',
   weight: '400',
})
