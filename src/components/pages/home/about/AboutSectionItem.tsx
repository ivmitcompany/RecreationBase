'use client'

import FontAccentSpan from '@/components/ui/FontAccentSpan'
import { Icons } from '@/components/ui/Icons'
import ImagePlaceholder from '@/components/ui/ImagePlaceholder'
import ImageSlider from '@/components/ui/ImageSlider'
import Modal from '@/components/ui/Modal'
import IconButton from '@/components/ui/button/IconButton'
import useModal from '@/hooks/use-modal'
import { AboutItem } from '@/types/AboutItem'
import {
  arrayIsNotEmpty,
  cn,
  findObjectWithField,
  getArrayLength,
  zeroPadSingleDigit,
} from '@/utils'
import Image from 'next/image'
import { FC, HTMLAttributes } from 'react'

interface AboutSectionItemProps extends HTMLAttributes<HTMLDivElement> {
  data: AboutItem
  index: number
}

const AboutSectionItem: FC<AboutSectionItemProps> = ({
  className,
  data: { description, images },
  index,
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
          'grid w-full max-w-[55.875rem] gap-[1.875rem] border-t border-light pt-2.5 even:ml-auto md:grid-cols-2 md:gap-16 md:pt-5',
          className
        )}
        {...props}
      >
        <div className="relative flex justify-between gap-10">
          <h3 className="max-w-56 font-medium !leading-[1.2] md:max-w-72 md:text-xl">
            {description}
          </h3>
          <FontAccentSpan
            className="md:absolute md:bottom-0 md:right-0"
            size="sm"
          >
            {zeroPadSingleDigit(index)}
          </FontAccentSpan>
        </div>
        <div className="relative aspect-[1.55/1]">
          {imagesArePresent ? (
            <>
              <Image
                alt={description}
                className="object-cover object-center"
                fill
                quality={80}
                sizes="(max-width: 767px) 100vw, (max-width: 894x) 50vw, 387px"
                src={
                  findObjectWithField(images!, 'is_main_image')?.image ||
                  images![0].image
                }
              />
              {imagesCount > 1 && (
                <IconButton
                  className="absolute bottom-4 right-4"
                  icon={Icons.photos}
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

export default AboutSectionItem
