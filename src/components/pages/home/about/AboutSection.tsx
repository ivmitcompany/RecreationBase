import Content from '@/components/ui/Content'
import CurlyBraceHeading from '@/components/ui/CurlyBraceHeading'
import { ImageInfo } from '@/types/ImageInfo'
import { cn } from '@/utils'
import { FC, HTMLAttributes } from 'react'

import AboutSectionItem from './AboutSectionItem'

export type AboutItem = {
  id: number
  images?: ImageInfo[]
  title: string
}

const aboutItems: AboutItem[] = [
  {
    id: 9,
    images: [
      { direction: 'horizontal', src: '/about-img.jpg' },
      { direction: 'vertical', src: '/hero-img.jpg' },
    ],
    title: 'неймовірна природа, озеленена територія',
  },
  {
    id: 10,
    title: 'святкування банкетів та виїзних церемоній',
  },
  {
    id: 11,
    images: [{ direction: 'vertical', src: '/hero-img.jpg' }],
    title: 'святкування банкетів та виїзних церемоній',
  },
]

interface AboutSectionProps extends HTMLAttributes<HTMLDivElement> {}

const AboutSection: FC<AboutSectionProps> = ({ className, ...props }) => {
  return (
    <div className={cn('bg-graphite text-light', className)} {...props}>
      <Content>
        <section>
          <CurlyBraceHeading level={2}>Про нас</CurlyBraceHeading>
          <div className="mt-[3.75rem] grid gap-[3.75rem] md:mt-20 md:gap-20">
            {aboutItems.map((item) => (
              <AboutSectionItem data={item} key={item.id} />
            ))}
          </div>
        </section>
      </Content>
    </div>
  )
}

export default AboutSection
