import { cn } from '@/utils'
import Link from 'next/link'
import { FC, LiHTMLAttributes } from 'react'

interface HeaderMenuItemProps extends LiHTMLAttributes<HTMLLIElement> {
  href?: string
}

const HeaderMenuItem: FC<HeaderMenuItemProps> = ({
  className,
  children,
  href = '/',
  ...props
}) => (
  <li
    className={cn(
      'group flex w-full items-end text-2xl uppercase transition-colors md:text-base md:hover:text-accent',
      className
    )}
    {...props}
  >
    <Link href={href}>{children}</Link>
    <span
      aria-hidden
      className="-mb-1.5 block h-0.5 w-full bg-light md:hidden"
    />
  </li>
)

export default HeaderMenuItem
