import ImagePlaceholder from '@/components/ui/ImagePlaceholder'
import { Meal } from '@/types/KitchenCategory'
import { cn } from '@/utils'
import Image from 'next/image'
import { FC, HTMLAttributes } from 'react'

interface MenuCategoryItemDetailsProps extends HTMLAttributes<HTMLDivElement> {
  data: Meal
}

const MenuCategoryItemDetails: FC<MenuCategoryItemDetailsProps> = ({
  className,
  data: { image, ingredients, name, price, serving_type, weight_value },
  ...props
}) => {
  return (
    <div
      className={cn('flex h-full flex-col font-light', className)}
      {...props}
    >
      <div className="relative aspect-square md:aspect-[1.51/1]">
        {image ? (
          <Image
            alt="Сирники"
            className="object-cover object-center"
            fill
            sizes="(max-width: 767px) 100vw, 390px"
            src={image}
          />
        ) : (
          <ImagePlaceholder border={false} className="h-full w-full" />
        )}
      </div>
      <div className="flex flex-grow flex-col px-5 py-10">
        <h3 className="text-lg leading-5">{name}</h3>
        {ingredients && (
          <ul className="mt-1 flex flex-wrap gap-1 text-sm leading-4">
            {ingredients.map((ingredient, index) => (
              <li
                className={cn(
                  "after:content-[',']",
                  index === 0 && "before:content-['(']",
                  index === ingredients.length - 1 && "after:content-[')']"
                )}
                key={ingredient.id}
              >
                {ingredient.name}
              </li>
            ))}
          </ul>
        )}
        <div className="mt-auto space-x-2.5 pt-2.5">
          <span className="text-lg text-accent">{price} грн</span>
          <span className="pb-0.5 text-sm">
            {weight_value} {serving_type === 'mass' ? 'г' : 'шт'}
          </span>
        </div>
      </div>
    </div>
  )
}

export default MenuCategoryItemDetails
