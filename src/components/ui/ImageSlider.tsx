'use client'

import { cn } from '@/utils'
import Image from 'next/image'
import { FC } from 'react'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react'

import { ImageItem } from '../pages/home/about/AboutSection'
import { fontAccentSpanVariants } from './FontAccentSpan'
import { Icons } from './Icons'
import IconButton from './button/IconButton'

interface ImageSliderProps extends SwiperProps {
  images: ImageItem[]
}

const ImageSlider: FC<ImageSliderProps> = ({ className, images, ...props }) => {
  return (
    <Swiper
      className={cn('relative', className)}
      modules={[Navigation, Pagination]}
      navigation={{
        nextEl: '#next-slide-button',
        prevEl: '#prev-slide-button',
      }}
      pagination={{
        el: '#pagination',
        renderCustom: function (_, current, total) {
          return current + '/' + total
        },
        type: 'custom',
      }}
      {...props}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index + 1}>
          <div className="relative flex h-full w-full flex-col items-center justify-center gap-8">
            <div
              className={cn(
                'relative h-auto w-full',
                image.direction === 'horizontal'
                  ? 'aspect-[3/2] md:max-h-[26.25rem] md:max-w-[39.375rem]'
                  : 'aspect-[0.67/1] max-h-[31.5rem] max-w-[20.9375rem] md:max-h-[40rem] md:max-w-[26.625rem]'
              )}
            >
              <Image
                alt="Зображення"
                className="object-cover object-center"
                fill
                src={image.src}
              />
            </div>
            <div className="flex w-full items-center justify-between md:px-[5.125rem] lg:absolute lg:left-0 lg:top-1/2 lg:-translate-y-1/2 lg:px-0 xl:px-[5.125rem]">
              <IconButton
                Icon={Icons.arrow}
                className="rotate-180"
                id="prev-slide-button"
                label="Стрілка вліво"
              />
              <IconButton
                Icon={Icons.arrow}
                id="next-slide-button"
                label="Стрілка вправо"
              />
            </div>
          </div>
        </SwiperSlide>
      ))}
      <p
        className={cn(
          'absolute bottom-0 left-0 z-[100] bg-light text-accent',
          fontAccentSpanVariants({ size: 'xs' })
        )}
        id="pagination"
      />
    </Swiper>
  )
}

export default ImageSlider
