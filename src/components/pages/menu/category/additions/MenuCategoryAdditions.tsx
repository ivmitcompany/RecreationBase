import { cn } from '@/utils'
import { FC, HTMLAttributes } from 'react'

import MenuCategoryAdditionsItem from './MenuCategoryAdditionsItem'

interface MenuCategoryAdditionsProps extends HTMLAttributes<HTMLDivElement> {}

const MenuCategoryAdditions: FC<MenuCategoryAdditionsProps> = ({
  className,
  ...props
}) => (
  <div className={cn('flex gap-10', className)} {...props}>
    <h3 className="flex h-[8.375rem] w-[8.375rem] flex-shrink-0 items-center justify-center break-words rounded-full border border-accent px-[1.875rem] text-center font-light uppercase leading-5 md:text-lg md:leading-[1.2] lg:h-36 lg:w-36">
      Додатки
    </h3>
    <ul className="flex flex-wrap gap-y-5 pt-[3.75rem] *:basis-1/2 md:gap-y-7">
      <MenuCategoryAdditionsItem className="odd:pr-5" />
      <MenuCategoryAdditionsItem className="odd:pr-5" />
      <MenuCategoryAdditionsItem className="odd:pr-5" />
      <MenuCategoryAdditionsItem className="odd:pr-5" />
      <MenuCategoryAdditionsItem className="odd:pr-5" />
      <MenuCategoryAdditionsItem className="odd:pr-5" />
      <MenuCategoryAdditionsItem className="odd:pr-5" />
    </ul>
  </div>
)

export default MenuCategoryAdditions
