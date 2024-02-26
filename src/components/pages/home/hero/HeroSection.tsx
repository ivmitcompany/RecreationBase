import Content from '@/components/ui/Content'
import LinkButton from '@/components/ui/button/LinkButton'
import { cn } from '@/utils'
import Image from 'next/image'
import { FC, HTMLAttributes } from 'react'

import HeroHeading from './HeroHeading'

interface HeroSectionProps extends HTMLAttributes<HTMLDivElement> {}

const HeroSection: FC<HeroSectionProps> = ({ className, ...props }) => {
  return (
    <div className={cn('bg-graphite text-light', className)} {...props}>
      <Content className="pt-10">
        <section>
          <HeroHeading />
          <article className="mx-auto max-w-[20.9375rem] md:max-w-[31.25rem]">
            <div className="relative mx-auto aspect-[0.84/1] max-h-[25rem] md:aspect-square md:max-h-none">
              <Image
                alt="База відпочинку Logindariy"
                className="mx-auto object-cover object-center"
                fill
                priority
                sizes="(max-width: 767px) 335px, 500px"
                src="/hero-img.jpg"
              />
              <LinkButton
                className="absolute bottom-3 right-[0.3125rem] md:bottom-[16%] md:right-0 md:translate-x-1/2"
                color="light"
                href="/"
              >
                Детальніше
              </LinkButton>
            </div>
            <p className="mt-5 text-center md:text-xl">
              сімейна база відпочинку, розташована посеред мальовничих гір
              Закарпаття
            </p>
          </article>
        </section>
      </Content>
    </div>
  )
}

export default HeroSection
