'use client'

import useMediaQuery from '@/hooks/use-media-query'
import { DESKTOP_BREAKPOINT } from '@/utils'
import { FC } from 'react'

import ApartmentHeadingWrapper, {
  ApartmentHeadingWrapperProps,
} from './ApartmentHeadingWrapper'

interface ApartmentHeadingProps extends ApartmentHeadingWrapperProps {
  title: string
}

const ApartmentHeading: FC<ApartmentHeadingProps> = ({ title, ...props }) => {
  const isNotDesktop = useMediaQuery(DESKTOP_BREAKPOINT)

  if (!title) return null

  const words = title.split(' ')
  const firstWord = words[0] || ''
  const remainingWords = words.slice(1).join(' ') || ''

  return (
    <ApartmentHeadingWrapper {...props}>
      {isNotDesktop ? (
        // На мобільних: заголовок ліворуч
        <span
          className="inline-block w-full whitespace-nowrap text-left uppercase"
          role="text"
        >
          {title}
        </span>
      ) : (
        // На десктопі: розбиття на слова
        <>
          <span
            className="inline-block w-full whitespace-nowrap text-left"
            role="text"
          >
            {firstWord}
          </span>{' '}
          <span
            className="inline-block w-full whitespace-nowrap text-right"
            role="text"
          >
            {remainingWords}
          </span>
        </>
      )}
    </ApartmentHeadingWrapper>
  )
}

export default ApartmentHeading
