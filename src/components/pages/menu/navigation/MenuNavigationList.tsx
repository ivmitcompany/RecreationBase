import MenuNavPathname from '@/types/MenuNavPathname'
import { cn } from '@/utils'
import { getNavigationCategories } from '@/utils/api/menu'
import { FC, HTMLAttributes } from 'react'

import MenuNavigationListItem from './MenuNavigationListItem'

interface MenuNavigationListProps extends HTMLAttributes<HTMLOListElement> {
  pathname: MenuNavPathname
}

const MenuNavigationList: FC<MenuNavigationListProps> = async ({
  className,
  pathname,
  ...props
}) => {
  const categories = await getNavigationCategories(pathname)

  return (
    <ol
      className={cn(
        'flex gap-2.5 overflow-x-auto pb-2.5 text-lg font-light leading-6 md:flex-col md:gap-4 md:overflow-hidden md:pb-0 md:pl-[1.875rem] md:text-sm',
        className
      )}
      {...props}
    >
      {categories.map((category) => (
        <MenuNavigationListItem
          href={`${pathname}#${category.slug}`}
          key={category.id}
        >
          {category.name}
        </MenuNavigationListItem>
      ))}
    </ol>
  )
}

export default MenuNavigationList
