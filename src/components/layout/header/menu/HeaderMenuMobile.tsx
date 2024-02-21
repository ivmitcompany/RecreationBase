'use client'

import Content from '@/components/ui/Content'
import HeaderContext from '@/store/header-context'
import { cn } from '@/utils'
import { FC, HTMLAttributes, useContext } from 'react'

import HeaderContacts from '../HeaderContacts'
import HeaderMenu from './HeaderMenu'

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
        <HeaderMenu className="flex-col items-start gap-[3.75rem]" />
      </nav>
      <HeaderContacts className="absolute bottom-10 left-0 right-0" />
    </Content>
  )
}

export default HeaderMenuMobile
