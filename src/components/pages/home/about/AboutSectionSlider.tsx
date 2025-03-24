'use client'

import { Icons } from '@/components/ui/Icons'
import AboutItem from '@/types/AboutItem'
import { cn, getArrayLength } from '@/utils'
import { AnimatePresence, motion } from 'framer-motion'
import { FC, useRef, useState } from 'react'

import AboutSectionSliderItem from './AboutSectionSliderItem'

interface AboutSectionSliderProps {
  items: AboutItem[]
}

const AboutSectionSlider: FC<AboutSectionSliderProps> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const sliderRef = useRef<HTMLDivElement>(null)
  const totalItems = getArrayLength(items)

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalItems - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === totalItems - 1 ? 0 : prev + 1))
  }

  const handleDotClick = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <div className="relative px-3 md:px-6 lg:px-8">
      {/* Arrows for navigation positioned on sides */}
      <motion.button
        animate={{ opacity: 1, x: 0 }}
        aria-label="Previous slide"
        className="absolute -left-2 md:-left-3 lg:-left-4 top-1/2 z-10 -translate-y-1/2 transform cursor-pointer rounded-full bg-black/20 p-2.5 md:p-3 lg:p-4 text-white/90 backdrop-blur-md transition-all duration-300 hover:bg-black/40 hover:text-white focus:outline-none"
        initial={{ opacity: 0, x: -20 }}
        onClick={handlePrev}
        transition={{ delay: 0.2 }}
        whileHover={{ scale: 1.1, x: -4 }}
        whileTap={{ scale: 0.95 }}
      >
        <Icons.arrowLeft className="h-3.5 w-3.5 md:h-4 md:w-4 lg:h-5 lg:w-5" size="lg" />
      </motion.button>

      <motion.button
        animate={{ opacity: 1, x: 0 }}
        aria-label="Next slide"
        className="absolute -right-2 md:-right-3 lg:-right-4 top-1/2 z-10 -translate-y-1/2 transform cursor-pointer rounded-full bg-black/20 p-2.5 md:p-3 lg:p-4 text-white/90 backdrop-blur-md transition-all duration-300 hover:bg-black/40 hover:text-white focus:outline-none"
        initial={{ opacity: 0, x: 20 }}
        onClick={handleNext}
        transition={{ delay: 0.2 }}
        whileHover={{ scale: 1.1, x: 4 }}
        whileTap={{ scale: 0.95 }}
      >
        <Icons.arrowRight className="h-3.5 w-3.5 md:h-4 md:w-4 lg:h-5 lg:w-5" size="lg" />
      </motion.button>

      {/* Slider */}
      <div 
        className="relative overflow-hidden rounded-2xl md:rounded-3xl shadow-2xl ring-1 ring-white/10" 
        ref={sliderRef}
      >
        <motion.div
          animate={{ x: `-${currentIndex * 100}%` }}
          className="flex"
          transition={{ 
            damping: 20, 
            duration: 0.8,
            ease: [0.4, 0.0, 0.2, 1],
            stiffness: 100,
            type: "spring"
          }}
        >
          {items.map((item, index) => (
            <AboutSectionSliderItem
              className="w-full flex-shrink-0"
              data={item}
              index={index + 1}
              key={item.id}
            />
          ))}
        </motion.div>
      </div>

      {/* Pagination dots */}
      <motion.div 
        animate={{ opacity: 1, y: 0 }}
        className="mt-4 md:mt-6 lg:mt-8 flex items-center justify-center"
        initial={{ opacity: 0, y: 20 }}
        transition={{ delay: 0.4 }}
      >
        <div className="flex items-center gap-1.5 md:gap-2 lg:gap-3">
          {items.map((_, index) => (
            <motion.button
              aria-label={`Перейти до слайду ${index + 1}`}
              className={cn(
                'h-1.5 md:h-2 rounded-full transition-all duration-500',
                index === currentIndex
                  ? 'w-6 md:w-8 lg:w-10 bg-gradient-to-r from-light/80 via-light to-light/80 shadow-lg shadow-light/20'
                  : 'w-1.5 md:w-2 bg-light/20 hover:bg-light/40'
              )}
              key={index}
              onClick={() => handleDotClick(index)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default AboutSectionSlider
