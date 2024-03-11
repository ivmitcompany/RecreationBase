import CurlyBraceHeading from '@/components/ui/CurlyBraceHeading'
import KitchenCategory from '@/types/KitchenCategory'
import { cn } from '@/utils'
import { FC, HTMLAttributes } from 'react'

import MenuCategoryItem from './MenuCategoryItem'
import MenuCategoryAdditions from './additions/MenuCategoryAdditions'

interface MenuCategoryProps extends HTMLAttributes<HTMLDivElement> {
  data: KitchenCategory
}

const MenuCategory: FC<MenuCategoryProps> = ({
  className,
  data: { additions, meals, name },
  ...props
}) => (
  <section className={cn('relative space-y-10', className)} {...props}>
    <CurlyBraceHeading level={2} position="center" size="sm">
      {name}
    </CurlyBraceHeading>
    <p className="absolute right-0 top-[1.875rem] !mt-0 text-xs font-light md:text-sm">
      до 12:00
    </p>
    {meals && (
      <div className="flex flex-col gap-5">
        {meals.map((meal) => (
          <MenuCategoryItem data={meal} key={meal.id} />
        ))}
      </div>
    )}
    {additions && <MenuCategoryAdditions data={additions} />}
  </section>
)

export default MenuCategory
