'use client'

import { Icons } from '@/components/ui/Icons'
import ImagePlaceholder from '@/components/ui/ImagePlaceholder'
import ImageSlider from '@/components/ui/ImageSlider'
import Modal from '@/components/ui/Modal'
import IconButton from '@/components/ui/button/IconButton'
import useModal from '@/hooks/use-modal'
import AboutItem from '@/types/AboutItem'
import { arrayIsNotEmpty, cn, getArrayLength, getMainImage } from '@/utils'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { FC, HTMLAttributes } from 'react'

interface AboutSectionSliderItemProps extends HTMLAttributes<HTMLDivElement> {
  data: AboutItem
  index: number
}

const AboutSectionSliderItem: FC<AboutSectionSliderItemProps> = ({
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
          'relative h-[45vh] md:h-[50vh] lg:h-[60vh] xl:h-[65vh] w-full overflow-hidden rounded-2xl md:rounded-3xl',
          className
        )}
        {...props}
      >
        {/* Зображення */}
        <div className="relative h-full w-full">
          {imagesArePresent ? (
            <>
              <Image
                alt={description}
                className="h-full w-full object-cover object-center transition-transform duration-[2.5s] hover:scale-110"
                fill
                priority
                quality={95}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 85vw"
                src={getMainImage(images)}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent">
                <motion.div 
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute bottom-0 w-full p-4 md:p-6 lg:p-8"
                  initial={{ opacity: 0, y: 20 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 md:gap-4">
                    <motion.h2 
                      animate={{ opacity: 1, x: 0 }}
                      className="max-w-2xl font-medium leading-relaxed text-white/90 text-base md:text-lg lg:text-xl xl:text-2xl"
                      initial={{ opacity: 0, x: -20 }}
                      transition={{ delay: 0.5, duration: 0.5 }}
                    >
                      {description}
                    </motion.h2>
                    {imagesCount > 1 && (
                      <motion.div 
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-center shrink-0"
                        initial={{ opacity: 0, x: 20 }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                      >
                        <IconButton
                          className="bg-white/10 backdrop-blur-md transition-all duration-300 hover:bg-white/20 hover:scale-105"
                          icon={Icons.photos}
                          label="Переглянути більше фото"
                          onClick={openImagesModal}
                        />
                        <span className="ml-3 text-sm font-medium text-white/80 whitespace-nowrap">
                          більше фото
                        </span>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              </div>
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

export default AboutSectionSliderItem
