import { cn } from '@/utils'
import { FC, HTMLAttributes } from 'react'

interface MenuCategoryAdditionsItemProps
  extends HTMLAttributes<HTMLLIElement> {}

const MenuCategoryAdditionsItem: FC<MenuCategoryAdditionsItemProps> = ({
  className,
  ...props
}) => (
  <li
    className={cn(
      'flex flex-col gap-1.5 font-light md:gap-1 md:text-lg',
      className
    )}
    {...props}
  >
    <p className="leading-[1.125] md:leading-5">Сир моцарела</p>
    <span className="leading-[1.2] text-accent md:leading-tight">33 грн</span>
  </li>
)

export default MenuCategoryAdditionsItem
