'use client'

import Logo, { LogoProps } from '@/components/ui/Logo'
import HeaderContext from '@/store/header-context'
import { FC, useContext } from 'react'

const HeaderLogo: FC<LogoProps> = ({ ...props }) => {
  const { closeMenu } = useContext(HeaderContext)

  return <Logo onClick={closeMenu} {...props} />
}

export default HeaderLogo
