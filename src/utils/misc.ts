import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs))

export const disablePageScroll = () => document.body.classList.add('no-scroll')

export const enablePageScroll = () =>
  document.body.classList.remove('no-scroll')

export function findObjectWithField<T>(array: T[], field: keyof T) {
  return array.find((object) => object[field])
}

export const isHomePage = (pathname: string) => pathname === '/'

export const zeroPadSingleDigit = (num: number) => {
  const isSingleDigit = num < 10

  if (isSingleDigit) return `0${num}`

  return num.toString()
}
