'use client'

import useModal from '@/hooks/use-modal'
import ImageInfo from '@/types/ImageInfo'
import { arrayIsNotEmpty, cn, getArrayLength, getMainImage } from '@/utils'
import Image from 'next/image'
import { FC, HTMLAttributes } from 'react'

import { Icons } from './Icons'
import ImagePlaceholder from './ImagePlaceholder'
import ImageSlider from './ImageSlider'
import Modal from './Modal'
import IconButton from './button/IconButton'

export interface DetailsModalProps extends HTMLAttributes<HTMLDivElement> {
  images?: ImageInfo[]
  previewImgAlt: string
}

const DetailsModal: FC<DetailsModalProps> = ({
  children,
  className,
  images,
  previewImgAlt,
  ...props
}) => {
  const {
    closeModal: closeImagesModal,
    modalIsOpened: imagesModalIsOpened,
    openModal: openImagesModal,
  } = useModal()
  const imagesArePresent = arrayIsNotEmpty(images)
  const imagesCount = getArrayLength(images)

  return (
    <>
      <article
        className={cn(
          'flex w-full flex-col gap-10 md:h-full md:flex-row md:gap-5',
          className
        )}
        {...props}
      >
        <div className="relative aspect-square w-full md:aspect-[0.68/1] md:basis-0 lg:aspect-[0.9/1] xl:aspect-[1.02/1]">
          {imagesArePresent ? (
            <>
              <Image
                alt={previewImgAlt}
                className="object-cover object-center"
                fill
                quality={80}
                sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 100vw"
                src={getMainImage(images!)}
              />
              {imagesCount > 1 && (
                <div className="absolute bottom-5 right-5 flex items-center gap-2 rounded-lg bg-white bg-opacity-70 p-2 shadow-lg md:left-5 md:right-auto">
                  <span className="font-medium text-black">Інші фото</span>
                  <IconButton
                    className="rounded-full bg-transparent p-1 transition hover:bg-gray-200"
                    icon={Icons.photos}
                    label="Переглянути більше фото"
                    onClick={openImagesModal}
                  />
                </div>
              )}
            </>
          ) : (
            <ImagePlaceholder className="h-full w-full" />
          )}
        </div>
        <div className="w-full md:overflow-y-auto">{children}</div>
      </article>
      <Modal
        isOpen={imagesModalIsOpened}
        onClose={closeImagesModal}
        size="screen"
      >
        <ImageSlider className="h-full w-full" images={images!} />
      </Modal>
    </>
  )
}

export default DetailsModal
