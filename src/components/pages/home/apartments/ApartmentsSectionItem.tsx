'use client'

import ImagePlaceholder from '@/components/ui/ImagePlaceholder'
import Modal from '@/components/ui/Modal'
import Button from '@/components/ui/button/Button'
import useModal from '@/hooks/use-modal'
import Apartment from '@/types/Apartment'
import { arrayIsNotEmpty, cn, getMainImage } from '@/utils'
import Image from 'next/image'
import { FC, HTMLAttributes } from 'react'

import ApartmentDetails from './apartment/ApartmentDetails'
import ApartmentHeading from './apartment/ApartmentHeading'

interface ApartmentsSectionItemProps extends HTMLAttributes<HTMLDivElement> {
  data: Apartment
}

const ApartmentsSectionItem: FC<ApartmentsSectionItemProps> = ({
  className,
  data,
  ...props
}) => {
  const { images, title } = data
  const {
    closeModal: closeDetailsModal,
    modalIsOpened: detailsModalIsOpened,
    openModal: openDetailsModal,
  } = useModal()
  const imagesArePresent = arrayIsNotEmpty(images)

  return (
    <>
      <article
        className={cn('group/item md:even:mt-[11.25rem]', className)}
        {...props}
      >
        <ApartmentHeading className="w-full" title={title} />
        <div className="relative mt-2.5 aspect-square">
          {imagesArePresent ? (
            <>
              <Image
                alt={title}
                className="object-cover object-center"
                fill
                quality={80}
                sizes="(max-width: 767px) 100vw, (max-width: 1279) 50vw, 488px"
                src={getMainImage(images)}
              />
            </>
          ) : (
            <ImagePlaceholder className="h-full w-full" />
          )}
        </div>
        <Button
          className="ml-auto mt-2.5 text-sm md:mt-5"
          onClick={openDetailsModal}
        >
          Детальніше
        </Button>
      </article>
      <Modal isOpen={detailsModalIsOpened} onClose={closeDetailsModal}>
        <ApartmentDetails data={data} images={images} previewImgAlt={title} />
      </Modal>
    </>
  )
}

export default ApartmentsSectionItem
