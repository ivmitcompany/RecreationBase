import { Luxurious_Script, Manrope } from 'next/font/google'

export const manrope = Manrope({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-default',
  weight: ['200', '300', '400'],
})

export const luxurious = Luxurious_Script({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-accent',
  weight: '400',
})
