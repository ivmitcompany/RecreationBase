import { Manrope, Luxurious_Script } from 'next/font/google'

export const manrope = Manrope({
  weight: ['200', '300', '400'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-default',
})

export const luxurious = Luxurious_Script({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-accent',
})
