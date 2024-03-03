'use client'

import useMediaQuery from '@/hooks/use-media-query'
import HeaderContext from '@/store/header-context'
import { MOBILE_BREAKPOINT, disablePageScroll, enablePageScroll } from '@/utils'
import { FC, ReactNode, useEffect, useState } from 'react'

type HeaderProviderProps = {
  children: ReactNode
}

const HeaderProvider: FC<HeaderProviderProps> = ({ children }) => {
  const isMobile = useMediaQuery(MOBILE_BREAKPOINT)
  const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false)

  const openMenu = () => {
    disablePageScroll()
    setIsMenuOpened(true)
  }

  const closeMenu = () => {
    enablePageScroll()
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
