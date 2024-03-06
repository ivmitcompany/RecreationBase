import CurlyBraceHeading from '@/components/ui/CurlyBraceHeading'
import { cn } from '@/utils'
import { FC, HTMLAttributes } from 'react'

import MenuCategoryItem from './MenuCategoryItem'
import MenuCategoryAdditions from './additions/MenuCategoryAdditions'

interface MenuCategoryProps extends HTMLAttributes<HTMLDivElement> {}

const MenuCategory: FC<MenuCategoryProps> = ({ className, ...props }) => (
  <section className={cn('relative space-y-10', className)} {...props}>
    <CurlyBraceHeading level={2} position="center" size="sm">
      Сніданки
    </CurlyBraceHeading>
    <p className="absolute right-0 top-[1.875rem] !mt-0 text-xs font-light md:text-sm">
      до 12:00
    </p>
    <div className="flex flex-col gap-5">
      <MenuCategoryItem />
      <MenuCategoryItem />
      <MenuCategoryItem />
      <MenuCategoryItem />
    </div>
    <MenuCategoryAdditions />
  </section>
)

export default MenuCategory
