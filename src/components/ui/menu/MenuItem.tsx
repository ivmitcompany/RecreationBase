import { cn } from '@/utils'
import Link from 'next/link'
import { FC, LiHTMLAttributes } from 'react'

interface MenuItemProps extends LiHTMLAttributes<HTMLLIElement> {
  href?: string
  underline?: boolean
}

const MenuItem: FC<MenuItemProps> = ({
  children,
  className,
  href = '/',
  underline,
  ...props
}) => (
  <li
    className={cn(
      'uppercase transition-colors md:hover:text-accent',
      underline && 'flex w-full items-end md:w-fit',
      className
    )}
    {...props}
  >
    <Link href={href}>{children}</Link>
    {underline && (
      <span
        aria-hidden
        className="-mb-1.5 block h-0.5 w-full bg-light md:hidden"
      />
    )}
  </li>
)

export default MenuItem
