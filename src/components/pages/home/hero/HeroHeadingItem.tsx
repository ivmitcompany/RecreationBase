import { cn } from '@/utils'
import { FC, HTMLAttributes } from 'react'

interface HeroHeadingItemProps extends HTMLAttributes<HTMLSpanElement> {}

const HeroHeadingItem: FC<HeroHeadingItemProps> = ({ children, className }) => {
  return (
    <span
      className={cn(
        'inline-flex w-full items-baseline justify-center whitespace-nowrap',
        className
      )}
      role="text"
    >
      {children}
    </span>
  )
}

export default HeroHeadingItem
