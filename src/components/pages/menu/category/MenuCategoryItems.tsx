import { MenuCategoryItemType } from '@/types/KitchenCategory'
import { cn } from '@/utils'
import { FC, HTMLAttributes } from 'react'

import MenuCategoryItem from './MenuCategoryItem'

interface MenuCategoryItemsProps extends HTMLAttributes<HTMLDivElement> {
  data: MenuCategoryItemType[]
}

const MenuCategoryItems: FC<MenuCategoryItemsProps> = ({
  className,
  data,
  ...props
}) => (
  <div className={cn('flex flex-col gap-[1.875rem]', className)} {...props}>
    {data.map((item) => (
      <MenuCategoryItem data={item} key={item.id} />
    ))}
  </div>
)

export default MenuCategoryItems
