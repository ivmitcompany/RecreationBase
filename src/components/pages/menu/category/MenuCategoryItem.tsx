'use client'

import Modal from '@/components/ui/Modal'
import useModal from '@/hooks/use-modal'
import { cn } from '@/utils'
import Image from 'next/image'
import { FC, HTMLAttributes } from 'react'

import MenuCategoryItemDetails from './MenuCategoryItemDetails'

interface MenuCategoryItemProps extends HTMLAttributes<HTMLDivElement> {}

const MenuCategoryItem: FC<MenuCategoryItemProps> = ({
  className,
  ...props
}) => {
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
          <h3 className="text-lg leading-5">Асорті зі свіжих овочей</h3>
          <ul className="mt-1 flex flex-wrap gap-1 text-sm leading-4">
            <li className="before:content-['('] after:content-[',']">огірок</li>
            <li className="after:content-[',']">помідор</li>
            <li className="after:content-[',']">перець болгарський</li>
            <li className="after:content-[')']">цибуля кримська</li>
          </ul>
          <div className="mt-2.5 space-x-2.5">
            <span className="text-lg text-accent">95 грн</span>
            <span className="pb-0.5 text-sm">250г</span>
          </div>
        </div>
        <div className="relative aspect-square h-full max-h-[6.5625rem] w-full max-w-[6.5625rem] flex-shrink-0 md:max-h-20 md:max-w-20">
          <Image
            alt="Сирники зі сметаною та джемом"
            className="object-cover object-center"
            fill
            sizes="(max-width: 767px) 105px, 80px"
            src="/meal.jpg"
          />
        </div>
      </div>
      <Modal
        isOpen={detailsModalIsOpened}
        onClose={closeDetailsModal}
        size="card"
      >
        <MenuCategoryItemDetails />
      </Modal>
    </>
  )
}

export default MenuCategoryItem
