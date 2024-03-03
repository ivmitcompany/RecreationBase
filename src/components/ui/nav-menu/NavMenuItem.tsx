'use client'

import HeaderContext from '@/store/header-context'
import { cn } from '@/utils'
import Link from 'next/link'
import { FC, LiHTMLAttributes, useContext } from 'react'

interface NavMenuItemProps extends LiHTMLAttributes<HTMLLIElement> {
  href?: string
  isUnderline?: boolean
}

const NavMenuItem: FC<NavMenuItemProps> = ({
  children,
  className,
  href = '/',
  isUnderline,
  ...props
}) => {
  const { closeMenu } = useContext(HeaderContext)

  return (
    <li
      className={cn(
        'uppercase transition-colors md:hover:text-accent',
        isUnderline && 'flex w-full items-end md:w-fit',
        className
      )}
      onClick={closeMenu}
      {...props}
    >
      <Link href={href}>{children}</Link>
      {isUnderline && (
        <span
          aria-hidden
          className="-mb-1.5 block h-0.5 w-full bg-light md:hidden"
        />
      )}
    </li>
  )
}

export default NavMenuItem
