'use client'

import Content from '@/components/ui/Content'
import { cn } from '@/utils'
import { motion } from 'framer-motion'
import { FC, HTMLAttributes, useEffect, useRef, useState } from 'react'

interface BookingHeroProps extends HTMLAttributes<HTMLDivElement> {}

const BookingHero: FC<BookingHeroProps> = ({ className, ...props }) => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            entry.target.classList.add('animate-fade-up')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    if (section) {
      observer.observe(section)
    }

    return () => {
      if (section) {
        observer.unobserve(section)
      }
    }
  }, [])

  return (
    <section
      className={cn(
        'relative min-h-screen overflow-hidden bg-cover bg-center bg-no-repeat',
        className
      )}
      ref={sectionRef}
      {...props}
    >
      {/* Модернізоване фонове зображення з паралакс ефектом */}
      <div
        className="absolute inset-0 h-full w-full bg-cover bg-center bg-no-repeat transition-transform duration-1000 ease-out will-change-transform"
        style={{
          backgroundImage:
            'url(https://res.cloudinary.com/db8gndp2b/image/upload/v1735937763/media/images/about_app/16_gsiop0.webp)',
          transform: isVisible ? 'scale(1.05)' : 'scale(1)',
          transition: 'transform 6s ease-out',
        }}
      />

      {/* Зображення для малих екранів */}
      <div
        className="absolute inset-0 h-full w-full bg-cover bg-center bg-no-repeat transition-transform duration-1000 ease-out will-change-transform sm:hidden"
        style={{
          backgroundImage:
            'url(https://res.cloudinary.com/db8gndp2b/image/upload/v1735750844/media/images/about_app/pool_5_trjevv_hyhgdp.webp)',
          transform: isVisible ? 'scale(1.05)' : 'scale(1)',
          transition: 'transform 6s ease-out',
        }}
      />

      {/* Тонкий градієнт для кращої читабельності */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/50" />

      {/* Контейнер для контенту */}
      <Content className="z-60 relative mt-40 flex h-full flex-col items-center justify-center sm:justify-end">
        <motion.div
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          className="text-center text-light"
          initial={{ opacity: 0, y: 30 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <h1 className="font-serif text-2xl font-light tracking-wide sm:text-5xl md:text-6xl lg:text-7xl">
            Бронювання
          </h1>
        </motion.div>
      </Content>
    </section>
  )
}

export default BookingHero
