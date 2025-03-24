'use client'

import type { Swiper as SwiperType } from 'swiper'

import Content from '@/components/ui/Content'
import { cn } from '@/utils'
import Image from 'next/image'
import { FC, HTMLAttributes, useEffect, useRef, useState } from 'react'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react'

interface GalleryProps extends HTMLAttributes<HTMLDivElement> {
  accentColor?: 'amber' | 'blue' | 'emerald' | 'purple'
  accentTitle: string
  description: string
  images: {
    alt: string
    id: number
    src: string
    type?: 'image' | 'video'
  }[]
  title: string
}

const Gallery: FC<GalleryProps> = ({
  accentColor = 'amber',
  accentTitle,
  className,
  description,
  images,
  title,
  ...props
}) => {
  const [activeSlide, setActiveSlide] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const swiperRef = useRef<SwiperType>()

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkIsMobile()
    window.addEventListener('resize', checkIsMobile)

    return () => {
      window.removeEventListener('resize', checkIsMobile)
    }
  }, [])

  const colorVariants = {
    amber: {
      bg: 'bg-accent',
      border: 'border-accent',
      gradient: 'from-amber-400 to-amber-600',
      ring: 'ring-amber-400',
      text: 'text-accent',
    },
    blue: {
      bg: 'bg-blue-500',
      border: 'border-blue-500',
      gradient: 'from-blue-400 to-blue-600',
      ring: 'ring-blue-400',
      text: 'text-blue-500',
    },
    emerald: {
      bg: 'bg-emerald-500',
      border: 'border-emerald-500',
      gradient: 'from-emerald-400 to-emerald-600',
      ring: 'ring-emerald-400',
      text: 'text-emerald-500',
    },
    purple: {
      bg: 'bg-purple-500',
      border: 'border-purple-500',
      gradient: 'from-purple-400 to-purple-600',
      ring: 'ring-purple-400',
      text: 'text-purple-500',
    },
  }

  const colors = colorVariants[accentColor]

  const gallerySettings: SwiperProps = {
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    breakpoints: {
      640: { slidesPerView: 1.5 },
      1024: { slidesPerView: 2.5 },
      1280: { slidesPerView: 3 },
    },
    centeredSlides: true,
    effect: 'slide',
    loop: true,
    modules: [Navigation, Pagination, EffectFade, Autoplay],
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    onSlideChange: (swiper) => setActiveSlide(swiper.activeIndex),
    onSwiper: (swiper) => {
      swiperRef.current = swiper
    },
    pagination: {
      clickable: true,
      dynamicBullets: true,
    },
    slidesPerView: 1,
    spaceBetween: 30,
  }

  return (
    <section
      className={cn(
        'relative overflow-hidden bg-white py-16', // Змінено фон на просто білий
        className
      )}
      {...props}
    >
      {/* Декоративні елементи - можна залишити для легкого акценту навіть при білому фоні */}
      <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br from-neutral-100 to-neutral-200 opacity-30 blur-3xl"></div>
      <div
        className={`absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-gradient-to-br ${colors.gradient} opacity-10 blur-3xl`}
      ></div>

      <Content>
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-light tracking-tight md:text-4xl lg:text-5xl">
            {title}{' '} {accentTitle}
          </h2>
          <p className="mx-auto max-w-xl text-base text-neutral-600 md:text-lg">
            {description}
          </p>
        </div>

        <div className="relative">
          <Swiper {...gallerySettings} className="py-8">
            {images.map((image, index) => (
              <SwiperSlide key={image.id}>
                <div
                  className={cn(
                    'overflow-hidden rounded-xl shadow-lg transition-all duration-500',
                    'before:absolute before:inset-0 before:z-10 before:bg-gradient-to-t before:from-black/10 before:to-transparent before:opacity-80',
                    'hover:before:opacity-0',
                    activeSlide === index
                      ? `shadow-xl ring-2 ${colors.ring} scale-[1.03]`
                      : 'scale-100'
                  )}
                  style={{
                    transformOrigin: 'center',
                    transition: 'all 0.5s cubic-bezier(0.25, 1, 0.5, 1)',
                  }}
                >
                  <div className="relative h-[300px] w-full sm:h-[350px] md:h-[400px] lg:h-[450px]">
                    {image.src.startsWith('http') ||
                    image.src.startsWith('/') ? (
                      <Image
                        alt={image.alt}
                        className="object-cover transition-transform duration-700 hover:scale-105"
                        fill
                        priority={index < 3}
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        src={image.src}
                      />
                    ) : (
                      <img
                        alt={image.alt}
                        className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                        src={image.src}
                      />
                    )}
                    <div className="absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-black/80 to-transparent p-4 opacity-100 transition-opacity duration-300 hover:opacity-100">
                      <p className="text-sm font-medium text-white md:text-base">
                        {image.alt}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="swiper-button-prev !flex !h-10 !w-10 !items-center !justify-center !rounded-full !bg-white/90 !text-neutral-800 shadow-md transition-all after:!text-lg hover:!bg-white"></div>
          <div className="swiper-button-next !flex !h-10 !w-10 !items-center !justify-center !rounded-full !bg-white/90 !text-neutral-800 shadow-md transition-all after:!text-lg hover:!bg-white"></div>
        </div>

        {/* Мініатюри - приховані на мобільних пристроях */}
        {!isMobile && (
          <div className="mt-8 flex justify-center">
            <div className="hide-scrollbar flex max-w-full gap-2 overflow-x-auto px-4 py-2 pb-4">
              {images.map((image, index) => (
                <div
                  className={cn(
                    'cursor-pointer overflow-hidden rounded-md border-2 transition-all',
                    'hover:shadow-md',
                    activeSlide === index ? colors.border : 'border-transparent'
                  )}
                  key={image.id}
                  onClick={() => {
                    swiperRef.current?.slideTo(index)
                  }}
                >
                  <div className="relative h-16 w-24">
                    <Image
                      alt={`${image.alt} thumbnail`}
                      className="object-cover"
                      fill
                      sizes="96px"
                      src={image.src}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </Content>
    </section>
  )
}

export default Gallery
