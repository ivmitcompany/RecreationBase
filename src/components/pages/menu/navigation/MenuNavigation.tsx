'use client'

import { cn } from '@/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FC, HTMLAttributes } from 'react'

import MenuInfoHeading from '../MenuInfoHeading'

interface MenuNavigationProps extends HTMLAttributes<HTMLDivElement> {}

const MenuNavigation: FC<MenuNavigationProps> = ({
  children,
  className,
  ...props
}) => {
  const pathname = usePathname()
  const menuPagePathname = '/menu'

  const isMenuPage = pathname === menuPagePathname
  const isBarPage = pathname === `${menuPagePathname}/bar`

  return (
    <nav
      className={cn(
        'grid grid-cols-2 gap-y-5 md:grid-cols-1 md:gap-y-0 md:space-y-5',
        className
      )}
      {...props}
    >
      <MenuInfoHeading
        className={cn(
          'pb-1.5 text-center transition-colors hover:text-accent md:p-0 md:text-start',
          isMenuPage && 'border-b border-accent text-accent md:border-none'
        )}
        level={2}
      >
        <Link href="/menu">Кухня</Link>
      </MenuInfoHeading>
      <div className="col-span-2">{children}</div>
      <MenuInfoHeading
        className={cn(
          'col-start-2 row-start-1 pb-1.5 text-center transition-colors hover:text-accent md:col-start-1 md:row-start-3 md:p-0 md:text-start',
          isBarPage &&
            'border-b border-accent text-accent md:row-start-2 md:border-none'
        )}
        level={2}
      >
        <Link href="/menu/bar">Бар</Link>
      </MenuInfoHeading>
    </nav>
  )
}

export default MenuNavigation
