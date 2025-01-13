import Content from '@/components/ui/Content'
import { buttonCircleVariants } from '@/components/ui/button/Button'
import { cn } from '@/utils'
import Link from 'next/link'
import { FC, HTMLAttributes } from 'react'

import HeroHeading from './HeroHeading'

interface HeroSectionProps extends HTMLAttributes<HTMLDivElement> {}

const HeroSection: FC<HeroSectionProps> = ({ className, ...props }) => {
  return (
    <div
      className={cn('relative h-screen bg-graphite text-light', className)}
      {...props}
    >
      <div
        style={{
          height: '100%',
          left: 0,
          overflow: 'hidden',
          position: 'absolute',
          top: 0,
          width: '100%',
        }}
      >
        <iframe
          allow="autoplay; fullscreen; picture-in-picture"
          frameBorder="0"
          src="https://player.vimeo.com/video/1045461131?autoplay=1&loop=1&muted=1&background=1"
          style={{
            height: '100%',
            left: 0,
            objectFit: 'cover',
            position: 'absolute',
            top: 0,
            width: '100%',
          }}
          title="hero-video"
        ></iframe>
      </div>

      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 text-center">
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