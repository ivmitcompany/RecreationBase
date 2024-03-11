'use client'

import Modal from '@/components/ui/Modal'
import useModal from '@/hooks/use-modal'
import { Meal } from '@/types/KitchenCategory'
import { cn } from '@/utils'
import Image from 'next/image'
import { FC, HTMLAttributes } from 'react'

import MenuCategoryItemDetails from './MenuCategoryItemDetails'

interface MenuCategoryItemProps extends HTMLAttributes<HTMLDivElement> {
  data: Meal
}

const MenuCategoryItem: FC<MenuCategoryItemProps> = ({
  className,
  data,
  ...props
}) => {
  const { image, ingredients, name, price, serving_type, weight_value } = data
  const {
    closeModal: closeDetailsModal,
    modalIsOpened: detailsModalIsOpened,
    openModal: openDetailsModal,
  } = useModal()

  return (
    <>
      <div
        className={cn(
          (className =
            'flex items-center justify-between gap-5 hover:cursor-pointer'),
          className
        )}
        onClick={openDetailsModal}
        {...props}
      >
        <div className="font-light">
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
          <div className="mt-2.5 space-x-2.5">
            <span className="text-lg text-accent">{price} грн</span>
            <span className="pb-0.5 text-sm">
              {weight_value} {serving_type === 'mass' ? 'г' : 'шт'}
            </span>
          </div>
        </div>
        {image && (
          <div className="relative aspect-square h-full max-h-[6.5625rem] w-full max-w-[6.5625rem] flex-shrink-0 md:max-h-20 md:max-w-20">
            <Image
              alt="Сирники зі сметаною та джемом"
              className="object-cover object-center"
              fill
              sizes="(max-width: 767px) 105px, 80px"
              src={image}
            />
          </div>
        )}
      </div>
      <Modal
        isOpen={detailsModalIsOpened}
        onClose={closeDetailsModal}
        size="card"
      >
        <MenuCategoryItemDetails data={data} />
      </Modal>
    </>
  )
}

export default MenuCategoryItem
