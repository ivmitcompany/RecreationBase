'use client'

import Content from '@/components/ui/Content'
import { cn } from '@/utils'
import { motion } from 'framer-motion'
import { FC, HTMLAttributes, useEffect, useRef, useState } from 'react'

interface PoolHeroProps extends HTMLAttributes<HTMLDivElement> {}

const PoolHero: FC<PoolHeroProps> = ({ className, ...props }) => {
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
      <Content className="z-60 relative mt-80 flex h-full flex-col items-center justify-center sm:justify-end md:mt-20">
        <motion.div
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          className="text-center text-light"
          initial={{ opacity: 0, y: 30 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <h1 className="font-serif text-2xl font-light tracking-wide sm:text-5xl md:text-6xl lg:text-7xl">
            Оазис відпочинку
          </h1>

          <div className="mx-auto mt-4 h-px w-16 bg-light/50" />

          <motion.p
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            className="mx-auto mt-5 max-w-xl font-light leading-relaxed md:mt-8 md:text-xl lg:text-2xl"
            initial={{ opacity: 0, y: 20 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            В самому серці Logindariy на вас чекає ідеальне місце для релаксу –
            два розкішні басейни, створені для вашого комфорту.
          </motion.p>
        </motion.div>
      </Content>
    </section>
  )
}

export default PoolHero
