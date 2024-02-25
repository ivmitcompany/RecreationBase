'use client'

import FontAccentSpan from '@/components/ui/FontAccentSpan'
import { Icons } from '@/components/ui/Icons'
import ImagePlaceholder from '@/components/ui/ImagePlaceholder'
import ImageSlider from '@/components/ui/ImageSlider'
import Modal from '@/components/ui/Modal'
import IconButton from '@/components/ui/button/IconButton'
import { arrayIsNotEmpty, cn, getArrayLength, zeroPad } from '@/utils'
import Image from 'next/image'
import { FC, HTMLAttributes, useState } from 'react'

import { AboutItem } from './AboutSection'

interface AboutSectionItemProps extends HTMLAttributes<HTMLDivElement> {
  data: AboutItem
}

const AboutSectionItem: FC<AboutSectionItemProps> = ({
  className,
  data: { id, images, title },
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
          'grid w-full max-w-[55.875rem] gap-[1.875rem] border-t border-light pt-2.5 even:ml-auto md:grid-cols-2 md:gap-16 md:pt-5',
          className
        )}
        {...props}
      >
        <div className="relative flex justify-between gap-10">
          <h3 className="max-w-56 font-medium !leading-[1.2] md:max-w-72 md:text-xl">
            {title}
          </h3>
          <FontAccentSpan
            className="md:absolute md:bottom-0 md:right-0"
            size="sm"
          >
            {zeroPad(id)}
          </FontAccentSpan>
        </div>
        <div className="relative aspect-[1.55/1]">
          {imagesArePresent ? (
            <>
              <Image
                alt={title}
                className="object-cover object-center"
                fill
                quality={80}
                sizes="(max-width: 767px) 100vw, (max-width: 894x) 50vw, 387px"
                src={images![0].src}
              />
              {imagesCount > 1 && (
                <IconButton
                  Icon={Icons.photos}
                  className="absolute bottom-4 right-4"
                  label="Переглянути більше фото"
                  onClick={openImagesModal}
                />
              )}
            </>
          ) : (
            <ImagePlaceholder className="h-full w-full" />
          )}
        </div>
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

export default AboutSectionItem
