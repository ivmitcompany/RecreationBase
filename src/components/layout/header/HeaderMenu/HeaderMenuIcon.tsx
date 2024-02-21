'use client'

import { Icons } from '@/components/ui/Icons'
import { cn } from '@/utils'
import { ButtonHTMLAttributes, FC } from 'react'

interface HeaderMenuIconProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const HeaderMenuIcon: FC<HeaderMenuIconProps> = ({ className, ...props }) => {
  return (
    <button className={cn('p-1.5', className)} {...props}>
      <Icons.burger />
      <Icons.cross />
    </button>
  )
}

export default HeaderMenuIcon
