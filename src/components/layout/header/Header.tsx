import Contacts from '@/components/ui/Contacts'
import Content from '@/components/ui/Content'
import NavMenu from '@/components/ui/nav-menu/NavMenu'
import { cn } from '@/utils'
import { FC } from 'react'

import HeaderContainer, {
  HeaderContainerProps as HeaderProps,
} from './HeaderContainer'
import HeaderLogo from './HeaderLogo'
import HeaderMenuIcon from './menu/HeaderMenuIcon'
import HeaderMenuMobile from './menu/HeaderMenuMobile'

const Header: FC<HeaderProps> = ({ className, ...props }) => {
  return (
    <HeaderContainer
      className={cn(
        'absolute left-0 right-0 top-0 bg-transparent pt-10',
        className
      )}
      {...props}
    >
      <Content className="relative z-50 flex items-center justify-between gap-10">
        <HeaderLogo />
        <nav className="hidden md:block">
          <NavMenu />
        </nav>
        <Contacts areShort className="hidden md:flex" />
        <HeaderMenuIcon className="md:hidden" />
      </Content>
      <HeaderMenuMobile className="z-10 md:hidden" />
    </HeaderContainer>
  )
}

export default Header
