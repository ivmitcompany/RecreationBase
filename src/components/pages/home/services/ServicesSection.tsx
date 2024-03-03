import Content from '@/components/ui/Content'
import CurlyBraceHeading from '@/components/ui/CurlyBraceHeading'
import FontAccentSpan from '@/components/ui/FontAccentSpan'
import LinkButton from '@/components/ui/button/LinkButton'
import { ImageInfo } from '@/types/ImageInfo'
import Image from 'next/image'
import React, { FC, HTMLAttributes } from 'react'

import ServicesSectionItem from './ServicesSectionItem'

export type Service = {
  description?: string
  excess_time_price: number
  id: number
  images?: ImageInfo[]
  min_order_time: number
  note?: string
  price: number
  title: string
}

const SERVICES: Service[] = [
  {
    description:
      'в сауні знаходиться кімната відпочинку, рушники та халати також надаються',
    excess_time_price: 1000,
    id: 1,
    images: [
      { direction: 'horizontal', src: '/apartment-2.jpg' },
      { direction: 'horizontal', src: '/apartment-3.jpg' },
    ],
    min_order_time: 3,
    price: 1300,
    title: 'Сауна, соляна кімната та хамам',
  },
  {
    description: 'в чан додаються ефірні масла та збір трав',
    excess_time_price: 1000,
    id: 2,
    images: [{ direction: 'horizontal', src: '/apartment-1.jpg' }],
    min_order_time: 3,
    note: 'чан готується індивідуально для кожної компанії гостей, тому замовлення має бути зроблено завчасно',
    price: 1300,
    title: 'Чан',
  },
]

interface ServicesSectionProps extends HTMLAttributes<HTMLDivElement> {}

const ServicesSection: FC<ServicesSectionProps> = ({ className, ...props }) => {
  return (
    <div className={className} {...props}>
      <Content>
        <section>
          <CurlyBraceHeading level={2}>Послуги</CurlyBraceHeading>
          <div className="mt-11 grid gap-[3.75rem] md:mt-16 md:grid-cols-2 md:gap-5 lg:grid-cols-3 xl:grid-cols-4">
            {SERVICES.map((item) => (
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
                <Image alt="Ресторан" fill src="/restaurant.jpg" />
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
