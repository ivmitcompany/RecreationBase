'use client'

import Contacts from '@/components/ui/Contacts'
import Content from '@/components/ui/Content'
import Menu from '@/components/ui/menu/Menu'
import HeaderContext from '@/store/header-context'
import { cn } from '@/utils'
import { FC, HTMLAttributes, useContext } from 'react'

interface HeaderMenuMobileProps extends HTMLAttributes<HTMLDivElement> {}

const HeaderMenuMobile: FC<HeaderMenuMobileProps> = ({
  className,
  ...props
}) => {
  const { isMenuOpened } = useContext(HeaderContext)

  return (
    <Content
      className={cn(
        'fixed left-0 top-0 flex h-full w-full flex-col justify-center bg-graphite text-light transition-transform',
        !isMenuOpened && 'translate-x-full',
        className
      )}
      {...props}
    >
      <nav>
        <Menu itemSize="lg" spacing="wide" underline />
      </nav>
      <Contacts className="absolute bottom-10 left-0 right-0 items-center" />
    </Content>
  )
}

export default HeaderMenuMobile
