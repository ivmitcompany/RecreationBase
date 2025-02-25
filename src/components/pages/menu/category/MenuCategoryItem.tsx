'use client'

import Modal from '@/components/ui/Modal'
import useModal from '@/hooks/use-modal'
import { MenuCategoryItemType } from '@/types/Menu'
import { arrayIsNotEmpty, cn } from '@/utils'
import Image from 'next/image'
import { FC, HTMLAttributes } from 'react'

import MenuCategoryItemDetails from './MenuCategoryItemDetails'
import MenuCategoryItemIngredients from './MenuCategoryItemIngredients'

interface MenuCategoryItemProps extends HTMLAttributes<HTMLDivElement> {
  data: MenuCategoryItemType
}

const MenuCategoryItem: FC<MenuCategoryItemProps> = ({
  className,
  data,
  ...props
}) => {
  const {
    description,
    image,
    ingredients,
    name,
    price,
    serving_type,
    volume_type,
    weight_value,
  } = data
  const {
    closeModal: closeDetailsModal,
    modalIsOpened: detailsModalIsOpened,
    openModal: openDetailsModal,
  } = useModal()

  const isWeightInfoPresent = weight_value && weight_value !== '0'
  const isFullWeightInfoPresent =
    (isWeightInfoPresent && serving_type) ||
    (isWeightInfoPresent && volume_type)

  return (
    <>
      <div
        className={cn(
          (className = 'flex items-center justify-between gap-5'),
          !!image && 'hover:cursor-pointer',
          className
        )}
        onClick={!!image ? openDetailsModal : undefined}
        {...props}
      >
        <div className="font-light">
          <h3 className="text-lg leading-5">{name}</h3>
          {arrayIsNotEmpty(ingredients) && (
            <MenuCategoryItemIngredients className="mt-1" data={ingredients!} />
          )}
          <p className="mt-2.5 text-sm">{description}</p>
          <div className="mt-2.5 space-x-2.5">
            <span className="text-lg text-accent">{price} грн</span>
            {isFullWeightInfoPresent && (
              <span className="pb-0.5 text-sm">
                {weight_value}{' '}
                {serving_type
                  ? serving_type === 'mass'
                    ? 'г'
                    : 'шт'
                  : volume_type
                    ? volume_type
                    : null}
              </span>
            )}
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
