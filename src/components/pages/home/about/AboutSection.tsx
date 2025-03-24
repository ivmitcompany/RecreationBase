import Content from '@/components/ui/Content'
import CurlyBraceHeading from '@/components/ui/CurlyBraceHeading'
import { arrayIsNotEmpty, cn } from '@/utils'
import { getAboutItems } from '@/utils'
import { FC, HTMLAttributes } from 'react'

import AboutSectionSlider from './AboutSectionSlider'
import AnimatedAboutContent from './AnimatedAboutContent'

interface AboutSectionProps extends HTMLAttributes<HTMLDivElement> {}

const AboutSection: FC<AboutSectionProps> = async ({ className, ...props }) => {
  const aboutItems = await getAboutItems()

  return (
    <>
      {arrayIsNotEmpty(aboutItems) && (
        <AnimatedAboutContent className={className} {...props}>
          <Content className="max-w-[90vw] 2xl:max-w-7xl">
            <section className="flex max-h-screen flex-col justify-center py-6">
              <div className="mb-6 text-center md:mb-8 lg:mb-12">
                <CurlyBraceHeading
                  className="font-serif text-2xl font-medium tracking-wider md:text-3xl lg:text-4xl xl:text-5xl"
                  level={4}
                >
                  Про нас
                </CurlyBraceHeading>
              </div>

              <div className="mx-auto w-full">
                <AboutSectionSlider items={aboutItems} />
              </div>
            </section>
          </Content>
        </AnimatedAboutContent>
      )}
    </>
  )
}

export default AboutSection
