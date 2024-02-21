'use client'

import useMediaQuery from '@/hooks/use-media-query'
import HeaderContext from '@/store/header-context'
import { MOBILE_BREAKPOINT } from '@/utils'
import { FC, ReactNode, useEffect, useState } from 'react'

type HeaderProviderProps = {
  children: ReactNode
}

const HeaderProvider: FC<HeaderProviderProps> = ({ children }) => {
  const isMobile = useMediaQuery(MOBILE_BREAKPOINT)
  const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false)

  const openMenu = () => {
    document.body.classList.add('no-scroll')
    setIsMenuOpened(true)
  }

  const closeMenu = () => {
    document.body.classList.remove('no-scroll')
    setIsMenuOpened(false)
  }

  useEffect(() => {
    if (!isMobile) {
      closeMenu()
    }
  }, [isMobile])

  return (
    <HeaderContext.Provider value={{ closeMenu, isMenuOpened, openMenu }}>
      {children}
    </HeaderContext.Provider>
  )
}

export default HeaderProvider
