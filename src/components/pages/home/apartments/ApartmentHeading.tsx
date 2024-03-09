'use client'

import FontAccentSpan from '@/components/ui/FontAccentSpan'
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

  return (
    <>
      {title.toLocaleLowerCase() === 'двомісний номер' ? (
        <ApartmentHeadingWrapper {...props}>
          <span role="text">Двомісний</span>{' '}
          <span
            className="-mt-2.5 inline-block w-full whitespace-nowrap text-right"
            role="text"
          >
            <FontAccentSpan
              className="mr-[0.5625rem] text-accent xl:mr-4"
              size={isNotDesktop ? 'xs' : 'md'}
            >
              H
            </FontAccentSpan>
            омер
          </span>
        </ApartmentHeadingWrapper>
      ) : title.toLocaleLowerCase() === 'модульний будинок' ? (
        <ApartmentHeadingWrapper {...props}>
          <span
            className="-mb-2.5 inline-block w-full whitespace-nowrap"
            role="text"
          >
            мод
            <FontAccentSpan
              className="ml-2.5 mr-1 text-accent xl:ml-4 xl:mr-2"
              size={isNotDesktop ? 'xs' : 'md'}
            >
              y
            </FontAccentSpan>
            льний
          </span>{' '}
          <span className="inline-block w-full text-right" role="text">
            будинок
          </span>
        </ApartmentHeadingWrapper>
      ) : title.toLocaleLowerCase() === "дерев'яний будинок" ? (
        <ApartmentHeadingWrapper {...props}>
          <span role="text">Дерев&apos;яний</span>{' '}
          <span
            className="-mt-2.5 inline-block w-full whitespace-nowrap text-right"
            role="text"
          >
            буд
            <FontAccentSpan
              className="mr-[0.5625rem] text-accent xl:mr-3.5"
              size={isNotDesktop ? 'xs' : 'md'}
            >
              u
            </FontAccentSpan>
            нок
          </span>
        </ApartmentHeadingWrapper>
      ) : title.toLocaleLowerCase() === 'vip апартаменти' ? (
        <ApartmentHeadingWrapper position="center" {...props}>
          <span role="text">VIP</span>{' '}
          <span
            className="-mt-2.5 inline-block w-full whitespace-nowrap"
            role="text"
          >
            ап
            <FontAccentSpan
              className="-xl:ml-4 -ml-2 mr-4 text-accent xl:mr-5"
              size={isNotDesktop ? 'xs' : 'md'}
            >
              a
            </FontAccentSpan>
            ртаменти
          </span>
        </ApartmentHeadingWrapper>
      ) : (
        <ApartmentHeadingWrapper
          className="first-letter:text-accent"
          textPosition="default"
        >
          {title}
        </ApartmentHeadingWrapper>
      )}
    </>
  )
}

export default ApartmentHeading
