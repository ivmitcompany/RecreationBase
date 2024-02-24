import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs))

export const zeroPad = (num: number) => (num < 10 ? `0${num}` : num.toString())
