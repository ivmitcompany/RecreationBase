import Content from '@/components/ui/Content'
import Logo from '@/components/ui/Logo'
import { cn } from '@/utils'
import { FC, HTMLAttributes } from 'react'
import HeaderContacts from './HeaderContacts'
import HeaderMenu from './HeaderMenu/HeaderMenu'
import HeaderMenuMobile from './HeaderMenu/HeaderMenuMobile'
import HeaderMenuIcon from './HeaderMenu/HeaderMenuIcon'

interface HeaderProps extends HTMLAttributes<HTMLDivElement> {}

const Header: FC<HeaderProps> = ({ className, ...props }) => {
  return (
    <header
      className={cn(
        'fixed left-0 right-0 top-0 bg-transparent pt-10',
        className
      )}
      {...props}
    >
      <Content className="relative z-10 flex items-center justify-between gap-10">
        <Logo />
        <nav className="hidden md:block">
          <HeaderMenu className="gap-10" />
        </nav>
        <HeaderContacts className="hidden md:flex" />
        <HeaderMenuIcon className="md:hidden" />
      </Content>
      <HeaderMenuMobile className="translate-x-full md:hidden" />
    </header>
  )
}

export default Header
