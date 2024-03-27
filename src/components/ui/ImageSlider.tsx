'use client'

import ImageInfo from '@/types/ImageInfo'
import { cn } from '@/utils'
import Image from 'next/image'
import { FC } from 'react'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react'

import { fontAccentSpanVariants } from './FontAccentSpan'
import { Icons } from './Icons'
import IconButton from './button/IconButton'

const nextSlideButtonId = 'next-slide-button'
const prevSlideButtonId = 'prev-slide-button'
const paginationId = 'pagination'

const sliderSettings: SwiperProps = {
  modules: [Navigation, Pagination],
  navigation: {
    nextEl: `#${nextSlideButtonId}`,
    prevEl: `#${prevSlideButtonId}`,
  },
  pagination: {
    el: `#${paginationId}`,
    renderCustom: function (_, current, total) {
      return current + '/' + total
    },
    type: 'custom',
  },
}

interface ImageSliderProps extends SwiperProps {
  images: ImageInfo[]
}

const ImageSlider: FC<ImageSliderProps> = ({ className, images, ...props }) => {
  return (
    <Swiper
      className={cn('relative', className)}
      {...sliderSettings}
      {...props}
    >
      {images.map((imageObj) => (
        <SwiperSlide key={imageObj.id}>
          <div className="relative flex h-full w-full flex-col items-center justify-center gap-8">
            <div
              className={cn(
                'relative h-auto w-full',
                !imageObj.direction || imageObj.direction === 'horizontal'
                  ? 'aspect-[3/2] md:max-w-[75%] lg:max-w-[60%]'
                  : 'aspect-[0.75/1] max-md:max-h-[31.5rem] max-md:max-w-[20.9375rem] md:max-w-[50%] lg:max-w-[40%] xl:max-w-[33%]'
              )}
            >
              <Image
                alt={imageObj.image}
                className="object-cover object-center"
                fill
                sizes="(max-width: 767px) 100vw, 50vw"
                src={imageObj.image}
              />
            </div>
            <div className="absolute left-0 top-1/2 flex w-full -translate-y-1/2 items-center justify-between max-md:static">
              <IconButton
                className="rotate-180 bg-transparent"
                icon={Icons.arrow}
                id={prevSlideButtonId}
                label="Стрілка вліво"
              />
              <IconButton
                className="bg-transparent"
                icon={Icons.arrow}
                id={nextSlideButtonId}
                label="Стрілка вправо"
              />
            </div>
          </div>
        </SwiperSlide>
      ))}
      <p
        className={cn(
          'absolute bottom-0 left-0 z-[100] bg-transparent text-accent',
          fontAccentSpanVariants({ size: 'xs' })
        )}
        id={paginationId}
      />
    </Swiper>
  )
}

export default ImageSlider
