import { Icons } from '@/components/ui/Icons'
import { cn } from '@/utils'
import Image from 'next/image'
import { FC, HTMLAttributes } from 'react'

interface RestaurantHeroProps extends HTMLAttributes<HTMLDivElement> {}

const RestaurantHero: FC<RestaurantHeroProps> = ({ className, ...props }) => {
  return (
    <section
      className={cn(
        'z-70 relative h-screen  w-full overflow-hidden',
        className
      )}
      {...props}
    >
      {/* Background video with parallax effect */}
      <div className="absolute inset-0 h-[110%] w-full">
        <video
          autoPlay
          className="h-full w-full object-cover"
          loop
          muted
          playsInline
        >
          <source
            src="https://res.cloudinary.com/db8gndp2b/video/upload/v1742418835/IMG_1996_adebbz.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-transparent" />
      </div>

      {/* Hero content */}
      <div className="relative flex h-full w-full flex-col items-center justify-center px-6 text-center text-white">
        <h1 className="mb-2 font-serif text-6xl font-light tracking-wide md:text-7xl lg:text-8xl">
          <span className="block">
            <Icons.logo className="mx-auto h-16 w-48 md:h-20 md:w-60 lg:h-24 lg:w-72" />
          </span>
        </h1>
        <p className="mb-10 max-w-xl text-lg font-light tracking-wide md:text-xl">
          Вишукана кухня та незабутня атмосфера
        </p>

        <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
          <a
            className="group relative overflow-hidden rounded-full border border-accent bg-accent px-8 py-3 text-sm font-medium text-white transition-all hover:bg-transparent"
            href="https://logindariy.choiceqr.com/online-menu"
          >
            <span className="z-70 relative">ПЕРЕГЛЯНУТИ МЕНЮ</span>
          </a>
          <a
            className="group relative overflow-hidden rounded-full border border-white px-8 py-3 text-sm font-medium text-white transition-all hover:bg-white/10"
            href="tel:+380678279007"
          >
            <span className="z-70 relative">ЗАБРОНЮВАТИ СТІЛ</span>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="h-8 w-8 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
          />
        </svg>
      </div>

      {/* Restaurant info badges */}
      <div className="absolute bottom-12 right-12 hidden space-x-6 md:flex">
        <div className="flex flex-col items-center text-white">
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
            />
          </svg>
          <span className="mt-1 text-xs">11:00 - 23:00</span>
        </div>
      </div>
    </section>
  )
}

export default RestaurantHero
