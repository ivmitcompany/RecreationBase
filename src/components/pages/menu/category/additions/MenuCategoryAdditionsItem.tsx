import { Addition } from '@/types/Menu'
import { cn } from '@/utils'
import { FC, HTMLAttributes } from 'react'

interface MenuCategoryAdditionsItemProps extends HTMLAttributes<HTMLLIElement> {
  data: Addition
}

const MenuCategoryAdditionsItem: FC<MenuCategoryAdditionsItemProps> = ({
  className,
  data: { name, price },
  ...props
}) => (
  <li
    className={cn(
      'flex flex-col gap-1.5 font-light md:gap-1 md:text-lg',
      className
    )}
    {...props}
  >
    <p className="leading-[1.125] md:leading-5">{name}</p>
    <span className="leading-[1.2] text-accent md:leading-tight">
      {price} грн
    </span>
  </li>
)

export default MenuCategoryAdditionsItem
