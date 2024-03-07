import Content from '@/components/ui/Content'
import CurlyBraceHeading from '@/components/ui/CurlyBraceHeading'
import FontAccentSpan from '@/components/ui/FontAccentSpan'
import LinkButton from '@/components/ui/button/LinkButton'
import { getCompanyServices } from '@/utils'
import Image from 'next/image'
import React, { FC, HTMLAttributes } from 'react'

import ServicesSectionItem from './ServicesSectionItem'

interface ServicesSectionProps extends HTMLAttributes<HTMLDivElement> {}

const ServicesSection: FC<ServicesSectionProps> = async ({
  className,
  ...props
}) => {
  const companyServices = await getCompanyServices()

  return (
    <div className={className} {...props}>
      <Content>
        <section>
          <CurlyBraceHeading level={2}>Послуги</CurlyBraceHeading>
          <div className="mt-11 grid gap-[3.75rem] md:mt-16 md:grid-cols-2 md:gap-5 lg:grid-cols-3 xl:grid-cols-4">
            {companyServices.map((item) => (
              <ServicesSectionItem data={item} key={item.id} />
            ))}
            <div className="flex aspect-[1.8/1] flex-col gap-5 sm:aspect-[2.25/1] md:aspect-[0.79/1]">
              <p>
                на території також знаходиться ресторан, де ви можете спробувати
                страви від нашого шеф кухаря
              </p>
              <LinkButton
                buttonSize="sm"
                circleSize="sm"
                circleSpacing="tight"
                className="mt-auto self-end"
                href="/"
              >
                <FontAccentSpan className="mr-1.5 uppercase" size="xxs">
                  M
                </FontAccentSpan>
                еню
              </LinkButton>
            </div>
            <article className="flex flex-col-reverse gap-2.5 md:flex-col">
              <div className="relative aspect-[0.96/1] md:aspect-[0.79/1]">
                <Image
                  alt="Ресторан"
                  fill
                  sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, (max-width: 1279px) 33vw, 25vw"
                  src="/restaurant.jpg"
                />
              </div>
              <h3 className="text-lg uppercase md:text-base">Ресторан</h3>
            </article>
          </div>
        </section>
      </Content>
    </div>
  )
}

export default ServicesSection
