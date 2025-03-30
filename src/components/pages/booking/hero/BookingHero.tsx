'use client'

import BeBookingForm from '@/components/layout/be-forms/beBookingForm'
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
        'relative z-0 min-h-[calc(100vh-80px)] overflow-hidden bg-[#122223]',
        className
      )}
      ref={sectionRef}
      {...props}
    >
      {/* Контейнер для контенту */}
      <Content className="relative z-10 flex h-full flex-col items-center justify-center py-10">
        <motion.div
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          className="w-full max-w-4xl text-center"
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            className="mt-2 text-base font-light tracking-wide text-white sm:text-lg md:text-xl"
            initial={{ opacity: 0, y: 30 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Забронюйте свій незабутній відпочинок
          </motion.h2>

          {/* Форма бронювання */}
          <motion.div
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            className="mt-8 rounded-2xl bg-white/90 p-6 shadow-xl backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <BeBookingForm />
          </motion.div>
        </motion.div>
      </Content>
    </section>
  )
}

export default BookingHero
