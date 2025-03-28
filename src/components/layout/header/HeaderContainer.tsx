'use client'

import { cn, isBookingPage, isHomePage, isPoolsPage, isRestaurantPage } from '@/utils'
import { usePathname } from 'next/navigation'
import { FC, HTMLAttributes } from 'react'

export interface HeaderContainerProps extends HTMLAttributes<HTMLDivElement> {}

const HeaderContainer: FC<HeaderContainerProps> = ({
  children,
  className,
  ...props
}) => {
  const pathname = usePathname()

  return (
    <header
      className={cn(
        (isHomePage(pathname) ||
          isRestaurantPage(pathname) ||
          isPoolsPage(pathname) ||
          isBookingPage(pathname)) &&
          'text-light',
        className
      )}
      {...props}
    >
      {children}
    </header>
  )
}

export default HeaderContainer
