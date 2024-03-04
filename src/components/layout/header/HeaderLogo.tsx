'use client'

import Logo, { LogoProps } from '@/components/ui/Logo'
import HeaderContext from '@/store/header-context'
import { cn, isHomePage } from '@/utils'
import { usePathname } from 'next/navigation'
import { FC, useContext } from 'react'

interface HeaderLogoProps extends LogoProps {}

const HeaderLogo: FC<HeaderLogoProps> = ({ ...props }) => {
  const { closeMenu, isMenuOpened } = useContext(HeaderContext)
  const pathname = usePathname()

  return (
    <Logo
      className={cn(
        isMenuOpened && !isHomePage(pathname) && 'text-light transition-colors'
      )}
      onClick={closeMenu}
      {...props}
    />
  )
}

export default HeaderLogo
