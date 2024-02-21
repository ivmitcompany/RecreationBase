import Contacts from '@/components/ui/Contacts'
import Content from '@/components/ui/Content'
import Menu from '@/components/ui/menu/Menu'
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
      <Content className="relative z-10 flex items-center justify-between gap-10">
        <HeaderLogo />
        <nav className="hidden md:block">
          <Menu />
        </nav>
        <Contacts className="hidden md:flex" short />
        <HeaderMenuIcon className="md:hidden" />
      </Content>
      <HeaderMenuMobile className="md:hidden" />
    </HeaderContainer>
  )
}

export default Header
