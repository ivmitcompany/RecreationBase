import { cn } from '@/utils'
import React, { FC, HTMLAttributes } from 'react'

interface MenuInfoHeadingProps extends HTMLAttributes<HTMLHeadingElement> {}

const MenuInfoHeading: FC<MenuInfoHeadingProps> = ({
  children,
  className,
  ...props
}) => (
  <h4 className={cn('text-lg font-light uppercase', className)} {...props}>
    {children}
  </h4>
)

export default MenuInfoHeading
