import { cn } from '@/utils'
import Link from 'next/link'
import { FC, HTMLAttributes } from 'react'

interface MenuNavigationListItemProps extends HTMLAttributes<HTMLLIElement> {
  href: string
}

const MenuNavigationListItem: FC<MenuNavigationListItemProps> = ({
  children,
  className,
  href,
  ...props
}) => (
  <li
    className={cn(
      'whitespace-nowrap border border-accent px-5 py-2.5 transition-colors hover:text-accent md:border-none md:p-0',

      className
    )}
    {...props}
  >
    <Link href={href}>{children}</Link>
  </li>
)

export default MenuNavigationListItem
