import ImageInfo from '@/types/ImageInfo'
import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

import { arrayIsNotEmpty, findObjectWithField } from '.'

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs))

export const disablePageScroll = () => document.body.classList.add('no-scroll')

export const enablePageScroll = () =>
  document.body.classList.remove('no-scroll')

export const getMainImage = (images: ImageInfo[]) =>
  findObjectWithField(images, 'is_main_image', true)?.image || images[0].image

export const isHomePage = (pathname: string) => pathname === '/'

export const transformLineBreaks = (text: string) => {
  return text.replace(/\r\n/g, '<br />')
}

export const zeroPadSingleDigit = (num: number) => {
  const isSingleDigit = num < 10

  if (isSingleDigit) return `0${num}`

  return num.toString()
}
