'use client'

import { cn } from '@/utils'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FC, HTMLAttributes, PropsWithChildren, useEffect, useRef } from 'react'

interface AnimatedAboutContentProps extends PropsWithChildren<HTMLAttributes<HTMLDivElement>> {}

const AnimatedAboutContent: FC<AnimatedAboutContentProps> = ({ 
  children, 
  className,
  ...props 
}) => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    
    const ctx = gsap.context(() => {
      // Анімація для всієї секції
      gsap.fromTo(
        sectionRef.current,
        { 
          opacity: 0,
          y: 20 
        },
        {
          duration: 0.6,
          opacity: 1,
          scrollTrigger: {
            start: 'top bottom-=100',
            trigger: sectionRef.current,
          },
          y: 0
        }
      )

      // Анімація для заголовка
      gsap.fromTo(
        'h4',
        { 
          opacity: 0,
          scale: 0.9
        },
        {
          delay: 0.2,
          duration: 0.5,
          opacity: 1,
          scale: 1,
          scrollTrigger: {
            start: 'top bottom-=50',
            trigger: headingRef.current,
          }
        }
      )

      // Анімація для контенту
      gsap.fromTo(
        contentRef.current,
        { 
          opacity: 0
        },
        {
          delay: 0.4,
          duration: 0.6,
          opacity: 1,
          scrollTrigger: {
            start: 'top bottom-=50',
            trigger: contentRef.current,
          }
        }
      )
    })

    return () => ctx.revert()
  }, [])

  return (
    <div
      className={cn(
        'bg-gradient-to-b from-graphite to-graphite/95 py-16 text-light backdrop-blur-sm',
        className
      )}
      ref={sectionRef}
      {...props}
    >
      <div ref={headingRef}>
        {children}
      </div>
    </div>
  )
}

export default AnimatedAboutContent 