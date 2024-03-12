import { MenuSubcategoryType } from '@/types/KitchenCategory'
import { arrayIsNotEmpty, cn } from '@/utils'
import { FC, HTMLAttributes } from 'react'

import MenuCategoryItems from './MenuCategoryItems'

interface MenuSubcategoryProps extends HTMLAttributes<HTMLDivElement> {
  data: MenuSubcategoryType
  includeModal: boolean
}

const MenuSubcategory: FC<MenuSubcategoryProps> = ({
  className,
  data: { items, name },
  includeModal,
  ...props
}) => (
  <div className={cn('space-y-[1.875rem] md:space-y-5', className)} {...props}>
    <h3 className="text-end text-lg font-light uppercase">{name}</h3>
    {arrayIsNotEmpty(items) && (
      <MenuCategoryItems data={items!} includeModal={includeModal} />
    )}
  </div>
)

export default MenuSubcategory
