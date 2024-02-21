import { cn } from '@/utils'
import { FC, HTMLAttributes } from 'react'
import HeaderMenuItem from './HeaderMenuItem'

interface HeaderMenuProps extends HTMLAttributes<HTMLUListElement> {}

const HeaderMenu: FC<HeaderMenuProps> = ({ className, ...props }) => (
  <ul className={cn('flex items-center', className)} {...props}>
    <HeaderMenuItem>Головна</HeaderMenuItem>
    <HeaderMenuItem>Апартаменти</HeaderMenuItem>
    <HeaderMenuItem>Меню</HeaderMenuItem>
  </ul>
)

export default HeaderMenu
