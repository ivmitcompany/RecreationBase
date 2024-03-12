'use client'

import Modal from '@/components/ui/Modal'
import useModal from '@/hooks/use-modal'
import { MenuCategoryItemType } from '@/types/KitchenCategory'
import { arrayIsNotEmpty, cn } from '@/utils'
import Image from 'next/image'
import { FC, HTMLAttributes } from 'react'

import MenuCategoryItemDetails from './MenuCategoryItemDetails'
import MenuCategoryItemIngredients from './MenuCategoryItemIngredients'

interface MenuCategoryItemProps extends HTMLAttributes<HTMLDivElement> {
  data: MenuCategoryItemType
  includeModal: boolean
}

const MenuCategoryItem: FC<MenuCategoryItemProps> = ({
  className,
  data,
  includeModal,
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
          (className = 'flex items-center justify-between gap-5'),
          includeModal && 'hover:cursor-pointer',
          className
        )}
        onClick={includeModal ? openDetailsModal : undefined}
        {...props}
      >
        <div className="font-light">
          <h3 className="text-lg leading-5">{name}</h3>
          {arrayIsNotEmpty(ingredients) && (
            <MenuCategoryItemIngredients className="mt-1" data={ingredients!} />
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
