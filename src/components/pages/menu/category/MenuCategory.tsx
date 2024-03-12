import CurlyBraceHeading from '@/components/ui/CurlyBraceHeading'
import MenuCategoryType from '@/types/KitchenCategory'
import { arrayIsNotEmpty, cn } from '@/utils'
import { FC, HTMLAttributes } from 'react'

import MenuCategoryItems from './MenuCategoryItems'
import MenuSubcategory from './MenuSubcategory'
import MenuCategoryAdditions from './additions/MenuCategoryAdditions'

interface MenuCategoryProps extends HTMLAttributes<HTMLDivElement> {
  data: MenuCategoryType
  includeModal?: boolean
}

const MenuCategory: FC<MenuCategoryProps> = ({
  className,
  data: { additions, items, name, note, subcategories },
  includeModal = true,
  ...props
}) => (
  <section className={cn('relative space-y-10', className)} {...props}>
    <CurlyBraceHeading level={2} position="center" size="sm">
      {name}
    </CurlyBraceHeading>
    {note && (
      <p className="absolute right-0 top-[1.875rem] !mt-0 text-xs font-light md:text-sm">
        {note}
      </p>
    )}
    {arrayIsNotEmpty(subcategories) &&
      subcategories!.map((subcategory) => (
        <MenuSubcategory
          data={subcategory}
          includeModal={includeModal}
          key={subcategory.id}
        />
      ))}
    {arrayIsNotEmpty(items) && (
      <MenuCategoryItems data={items!} includeModal={includeModal} />
    )}
    {arrayIsNotEmpty(additions) && <MenuCategoryAdditions data={additions!} />}
  </section>
)

export default MenuCategory
