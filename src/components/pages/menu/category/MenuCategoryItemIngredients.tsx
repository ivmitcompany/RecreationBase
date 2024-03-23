import { Ingredient } from '@/types/Menu'
import { cn } from '@/utils'
import { FC, HTMLAttributes } from 'react'

interface MenuCategoryItemIngredientsProps
  extends HTMLAttributes<HTMLUListElement> {
  data: Ingredient[]
}

const MenuCategoryItemIngredients: FC<MenuCategoryItemIngredientsProps> = ({
  className,
  data,
  ...props
}) => (
  <ul
    className={cn('flex flex-wrap gap-1 text-sm leading-4', className)}
    {...props}
  >
    {data.map((ingredient, index) => (
      <li
        className={cn(
          "lowercase after:content-[',']",
          index === 0 && "before:content-['(']",
          index === data.length - 1 && "after:content-[')']"
        )}
        key={ingredient.id}
      >
        {ingredient.name}
      </li>
    ))}
  </ul>
)

export default MenuCategoryItemIngredients
