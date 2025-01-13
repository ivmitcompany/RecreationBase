import Content from '@/components/ui/Content'
import CurlyBraceHeading from '@/components/ui/CurlyBraceHeading'
import { arrayIsNotEmpty, cn } from '@/utils'
import { getAboutItems } from '@/utils'
import { FC, HTMLAttributes } from 'react'

import AboutSectionItem from './AboutSectionItem'

interface AboutSectionProps extends HTMLAttributes<HTMLDivElement> {}

const AboutSection: FC<AboutSectionProps> = async ({ className, ...props }) => {
  const aboutItems = await getAboutItems()

  return (
    <>
      {arrayIsNotEmpty(aboutItems) && (
        <div className={cn('bg-graphite text-light', className)} {...props}>
          <Content>
            <section>
              <CurlyBraceHeading level={4}>Про нас</CurlyBraceHeading>
              <div className="mt-[3.75rem] grid gap-[3.75rem] md:mt-20 md:gap-20">
                {aboutItems.map((item, index) => (
                  <AboutSectionItem
                    data={item}
                    index={index + 1}
                    key={item.id}
                  />
                ))}
              </div>
            </section>
          </Content>
        </div>
      )}
    </>
  )
}

export default AboutSection
