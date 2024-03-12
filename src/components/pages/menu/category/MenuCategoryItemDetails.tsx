import ImagePlaceholder from '@/components/ui/ImagePlaceholder'
import { KitchenCategoryItem } from '@/types/KitchenCategory'
import { arrayIsNotEmpty, cn } from '@/utils'
import Image from 'next/image'
import { FC, HTMLAttributes } from 'react'

import MenuCategoryItemIngredients from './MenuCategoryItemIngredients'

interface MenuCategoryItemDetailsProps extends HTMLAttributes<HTMLDivElement> {
  data: KitchenCategoryItem
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
        {arrayIsNotEmpty(ingredients) && (
          <MenuCategoryItemIngredients className="mt-1" data={ingredients!} />
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
