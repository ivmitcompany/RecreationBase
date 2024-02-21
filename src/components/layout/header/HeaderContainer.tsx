'use client'

import { cn } from '@/utils'
import { usePathname } from 'next/navigation'
import { FC, HTMLAttributes } from 'react'

export interface HeaderContainerProps extends HTMLAttributes<HTMLDivElement> {}

const HeaderContainer: FC<HeaderContainerProps> = ({
  children,
  className,
  ...props
}) => {
  const pathname = usePathname()
  const isHomePage = pathname === '/'

  return (
    <header className={cn(isHomePage && 'text-light', className)} {...props}>
      {children}
    </header>
  )
}

export default HeaderContainer
