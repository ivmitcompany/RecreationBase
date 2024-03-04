import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs))

export const zeroPadSingleDigit = (num: number) => {
  const isSingleDigit = num < 10
  const isNotZero = num !== 0

  if (isSingleDigit && isNotZero) return `0${num}`

  return num.toString()
}

export const disablePageScroll = () => document.body.classList.add('no-scroll')

export const enablePageScroll = () =>
  document.body.classList.remove('no-scroll')

export const isHomePage = (pathname: string) => pathname === '/'
