'use client'

import { createContext } from 'react'

type HeaderContextType = {
  closeMenu: () => void
  isMenuOpened: boolean
  openMenu: () => void
}

const HeaderContext = createContext<HeaderContextType>({
  closeMenu: () => {},
  isMenuOpened: false,
  openMenu: () => {},
})

export default HeaderContext
