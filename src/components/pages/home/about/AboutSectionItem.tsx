'use client'

import FontAccentSpan from '@/components/ui/FontAccentSpan'
import { Icons } from '@/components/ui/Icons'
import ImagePlaceholder from '@/components/ui/ImagePlaceholder'
import ImageSlider from '@/components/ui/ImageSlider'
import Modal from '@/components/ui/Modal'
import IconButton from '@/components/ui/button/IconButton'
import useModal from '@/hooks/use-modal'
import AboutItem from '@/types/AboutItem'
import {
  arrayIsNotEmpty,
  cn,
  getArrayLength,
  getMainImage,
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
          'md:border-t-3 relative grid w-full max-w-[55.875rem] gap-[1.875rem] border-t border-light pt-2.5 even:ml-auto md:grid-cols-[2fr,3fr] md:gap-16 md:pt-5',
          className
        )}
        {...props}
      >
        {/* Опис */}
        <div className="relative flex justify-between gap-10">
          <h2 className="max-w-56 font-medium !leading-[1.2] md:max-w-72 md:text-lg">
            {description}
          </h2>
        </div>

        {/* Зображення */}
        <div className="relative aspect-[1.55/1]">
          {imagesArePresent ? (
            <>
              <Image
                alt={description}
                className="object-cover object-center md:h-auto md:w-[120%]"
                fill
                quality={80}
                sizes="(max-width: 767px) 100vw, (max-width: 894px) 50vw, 387px"
                src={getMainImage(images)}
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

      {/* Модальне вікно для зображень */}
      <Modal
        isOpen={imagesModalIsOpened}
        onClose={closeImagesModal}
        size="screen"
      >
        <ImageSlider className="h-full w-full" images={images} />
      </Modal>
    </>
  )
}

export default AboutSectionItem
