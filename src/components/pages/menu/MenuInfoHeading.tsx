import { cn } from '@/utils'
import React, { FC, HTMLAttributes } from 'react'

interface MenuInfoHeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  level?: 1 | 2 | 3 | 4 | 5 | 6
}

const MenuInfoHeading: FC<MenuInfoHeadingProps> = ({
  children,
  className,
  level = 4,
  ...props
}) => {
  const HeadingTag: keyof JSX.IntrinsicElements = `h${level}`

  return (
    <HeadingTag
      className={cn('text-lg font-light uppercase', className)}
      {...props}
    >
      {children}
    </HeadingTag>
  )
}

export default MenuInfoHeading
