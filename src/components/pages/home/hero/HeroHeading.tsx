import { cn } from '@/utils'
import { FC, HTMLAttributes } from 'react'

import HeroHeadingItem from './HeroHeadingItem'

interface HeroHeadingProps extends HTMLAttributes<HTMLHeadingElement> {}

const HeroHeading: FC<HeroHeadingProps> = ({ className, ...props }) => {
  return (
    <h1
      className={cn(
        'mx-auto flex max-w-screen-lg flex-col items-center text-center text-5xl uppercase leading-snug tracking-wide text-white',
        'md:flex-row md:gap-x-6 md:text-7xl md:leading-normal',
        className
      )}
      {...props}
    >
      <HeroHeadingItem>Ваш</HeroHeadingItem>
      <HeroHeadingItem>ідеальний</HeroHeadingItem>
      <HeroHeadingItem>відпочинок</HeroHeadingItem>
    </h1>
  )
}

export default HeroHeading
