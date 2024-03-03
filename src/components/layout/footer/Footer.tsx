import Contacts from '@/components/ui/Contacts'
import Content from '@/components/ui/Content'
import Logo from '@/components/ui/Logo'
import NavMenu from '@/components/ui/nav-menu/NavMenu'
import { cn } from '@/utils'
import { FC, HTMLAttributes } from 'react'

interface FooterProps extends HTMLAttributes<HTMLDivElement> {}

const Footer: FC<FooterProps> = ({ className, ...props }) => {
  return (
    <footer
      className={cn(
        'bg-dark py-[3.75rem] text-light md:py-[5.3125rem]',
        className
      )}
      {...props}
    >
      <Content className="flex flex-col items-center justify-between gap-10 md:flex-row">
        <Logo className="md:basis-1/4" />
        <NavMenu align="center" />
        <Contacts className="text-center md:basis-1/4 md:text-right" />
      </Content>
    </footer>
  )
}

export default Footer
