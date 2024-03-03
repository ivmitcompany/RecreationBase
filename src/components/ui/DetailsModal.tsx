'use client'

import { arrayIsNotEmpty, cn, getArrayLength } from '@/utils'
import Image from 'next/image'
import { FC, HTMLAttributes, useState } from 'react'

import { ImageItem } from '../pages/home/about/AboutSection'
import { Icons } from './Icons'
import ImagePlaceholder from './ImagePlaceholder'
import ImageSlider from './ImageSlider'
import Modal from './Modal'
import IconButton from './button/IconButton'

export interface DetailsModalProps extends HTMLAttributes<HTMLDivElement> {
  images?: ImageItem[]
  previewImgAlt: string
}

const DetailsModal: FC<DetailsModalProps> = ({
  children,
  className,
  images,
  previewImgAlt,
  ...props
}) => {
  const [imagesModalIsOpen, setImagesModalIsOpen] = useState<boolean>(false)
  const imagesArePresent = arrayIsNotEmpty(images)
  const imagesCount = getArrayLength(images)

  const openImagesModal = () => {
    setImagesModalIsOpen(true)
  }

  const closeImagesModal = () => {
    setImagesModalIsOpen(false)
  }

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
                src={images![0].src}
              />
              {imagesCount > 1 && (
                <IconButton
                  Icon={Icons.photos}
                  className="absolute bottom-5 right-5 md:left-5 md:right-auto"
                  label="Переглянути більше фото"
                  onClick={openImagesModal}
                />
              )}
            </>
          ) : (
            <ImagePlaceholder className="h-full w-full" />
          )}
        </div>
        <div className="md:overflow-y-auto">{children}</div>
      </article>
      {imagesArePresent && imagesCount > 1 && (
        <Modal
          isOpen={imagesModalIsOpen}
          onClose={closeImagesModal}
          size="screen"
        >
          <ImageSlider className="h-full w-full" images={images!} />
        </Modal>
      )}
    </>
  )
}

export default DetailsModal
