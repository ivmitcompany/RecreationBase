import { cn } from '@/utils'
import { FC, HTMLAttributes } from 'react'

interface HeroHeadingItemProps extends HTMLAttributes<HTMLSpanElement> {}

const HeroHeadingItem: FC<HeroHeadingItemProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <span
      className={cn(
        'inline-flex w-full items-baseline justify-center whitespace-nowrap',
        className
      )}
      role="text"
      {...props}
    >
      {children}
    </span>
  )
}

export default HeroHeadingItem
