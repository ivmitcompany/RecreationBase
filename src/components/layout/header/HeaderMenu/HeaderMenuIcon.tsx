'use client'

import { Icons } from '@/components/ui/Icons'
import HeaderContext from '@/store/header-context'
import { cn } from '@/utils'
import { ButtonHTMLAttributes, FC, useContext } from 'react'

interface HeaderMenuIconProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const HeaderMenuIcon: FC<HeaderMenuIconProps> = ({ className, ...props }) => {
  const { openMenu, closeMenu, isMenuOpened } = useContext(HeaderContext)

  return (
    <button
      className={cn('p-1.5', className)}
      onClick={isMenuOpened ? closeMenu : openMenu}
      {...props}
    >
      {isMenuOpened ? <Icons.cross /> : <Icons.burger />}
    </button>
  )
}

export default HeaderMenuIcon
