import Content from '@/components/ui/Content'
import { FC } from 'react'
import HeaderContacts from './HeaderContacts'
import HeaderMenu from './HeaderMenu/HeaderMenu'
import HeaderMenuMobile from './HeaderMenu/HeaderMenuMobile'
import HeaderMenuIcon from './HeaderMenu/HeaderMenuIcon'
import { cn } from '@/utils'
import HeaderLogo from './HeaderLogo'
import HeaderContainer, {
  HeaderContainerProps as HeaderProps,
} from './HeaderContainer'

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
          <HeaderMenu className="gap-10" />
        </nav>
        <HeaderContacts className="hidden md:flex" />
        <HeaderMenuIcon className="md:hidden" />
      </Content>
      <HeaderMenuMobile className="md:hidden" />
    </HeaderContainer>
  )
}

export default Header
