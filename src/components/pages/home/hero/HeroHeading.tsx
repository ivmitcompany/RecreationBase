import FontAccentSpan from '@/components/ui/FontAccentSpan'
import { cn } from '@/utils'
import { FC, HTMLAttributes } from 'react'

import HeroHeadingItem from './HeroHeadingItem'

interface HeroHeadingProps extends HTMLAttributes<HTMLHeadingElement> {}

const HeroHeading: FC<HeroHeadingProps> = ({ className }) => {
  return (
    <h1
      className={cn(
        'mx-auto flex max-w-80 flex-col flex-wrap items-baseline justify-center gap-x-10 text-3xl font-light uppercase leading-[2.5625rem] md:max-w-none md:flex-row md:text-6xl md:leading-[5.125rem]',
        className
      )}
    >
      <HeroHeadingItem className="gap-1">
        <FontAccentSpan>B</FontAccentSpan>аш
      </HeroHeadingItem>{' '}
      <HeroHeadingItem className="-mt-[1.5625rem] justify-start gap-[0.3125rem] md:-mt-[3.4375rem] md:w-fit md:justify-normal md:gap-[0.6875rem]">
        <FontAccentSpan>i</FontAccentSpan>деальний
      </HeroHeadingItem>{' '}
      <HeroHeadingItem className="-mt-[1.5625rem] items-center justify-end md:-mt-[3.4375rem] md:w-fit md:justify-normal">
        відпочино
        <FontAccentSpan className="-ml-1.5 -rotate-[8.39deg] md:-ml-[0.6875rem] md:translate-y-1.5">
          k
        </FontAccentSpan>
      </HeroHeadingItem>
    </h1>
  )
}

export default HeroHeading
