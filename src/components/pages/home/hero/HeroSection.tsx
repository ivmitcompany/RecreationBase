'use client'

import Content from '@/components/ui/Content'
import { buttonCircleVariants } from '@/components/ui/button/Button'
import { cn } from '@/utils'
import Link from 'next/link'
import { FC, HTMLAttributes, useEffect, useRef } from 'react'

import HeroHeading from './HeroHeading'

interface HeroSectionProps extends HTMLAttributes<HTMLDivElement> {}

const HeroSection: FC<HeroSectionProps> = ({ className, ...props }) => {
  const videoRef = useRef<HTMLDivElement>(null)
  const videoId = '1045461131'

  useEffect(() => {
    // Функція для повного розтягування відео на всіх пристроях
    const handleResize = () => {
      if (videoRef.current) {
        const container = videoRef.current
        const containerWidth = container.offsetWidth
        const containerHeight = container.offsetHeight
        const iframe = container.querySelector('iframe')

        if (iframe) {
          // Розраховуємо розміри так, щоб відео завжди заповнювало весь контейнер
          const aspectRatio = 16 / 9 // Стандартне співвідношення для відео
          let width = containerWidth
          let height = containerWidth / aspectRatio

          // Якщо висота недостатня для заповнення контейнера, збільшуємо ширину
          if (height < containerHeight) {
            height = containerHeight
            width = containerHeight * aspectRatio
          }

          // Застосовуємо розраховані розміри і позиціонування
          iframe.style.width = `${width}px`
          iframe.style.height = `${height}px`
          iframe.style.left = `${(containerWidth - width) / 2}px`
          iframe.style.top = `${(containerHeight - height) / 2}px`
        }
      }
    }

    // Викликаємо функцію при завантаженні та при зміні розміру вікна
    handleResize()
    window.addEventListener('resize', handleResize)

    // Прибираємо слухач подій при розмонтуванні компонента
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div
      className={cn(
        'relative h-screen w-full overflow-hidden bg-graphite text-light',
        className
      )}
      {...props}
    >
      <div
        className="absolute inset-0 h-full w-full overflow-hidden"
        ref={videoRef}
      >
        <iframe
          allow="autoplay; fullscreen; picture-in-picture"
          frameBorder="0"
          id="hero-video-iframe"
          loading="lazy"
          src={`https://player.vimeo.com/video/${videoId}?autoplay=1&loop=1&muted=1&background=1&quality=auto&dnt=1`}
          style={{
            height: '100%',
            minHeight: '100vh',
            minWidth: '100vw',
            objectFit: 'cover',
            position: 'absolute',
            width: '100%',
          }}
          title="hero-video"
        ></iframe>
      </div>

      <div className="z-60 absolute inset-0 flex flex-col items-center justify-center text-center">
        <Content>
          <HeroHeading />
          <p className="mx-auto mt-5 max-w-[40rem] text-lg md:text-xl lg:text-2xl">
            Сімейний готельно-ресторанний комплекс, розташований посеред
            мальовничих гір Закарпаття
          </p>
          <Link
            className={cn(
              'mt-10',
              buttonCircleVariants({ circleColor: 'light' })
            )}
            href="/#about"
          >
            Детальніше
          </Link>
        </Content>
      </div>
    </div>
  )
}

export default HeroSection
