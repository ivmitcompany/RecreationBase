import { FC, HTMLAttributes } from 'react'
import HeaderMenu from './HeaderMenu'
import HeaderContacts from '../HeaderContacts'
import { cn } from '@/utils'
import Content from '@/components/ui/Content'

interface HeaderMenuMobileProps extends HTMLAttributes<HTMLDivElement> {}

const HeaderMenuMobile: FC<HeaderMenuMobileProps> = ({
  className,
  ...props
}) => (
  <Content
    className={cn(
      'fixed left-0 top-0 flex h-full w-full flex-col justify-center bg-graphite text-light',
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

export default HeaderMenuMobile
