import Content from '@/components/ui/Content'
import CurlyBraceHeading from '@/components/ui/CurlyBraceHeading'
import Apartment from '@/types/Apartment'
import React, { FC, HTMLAttributes } from 'react'

import ApartmentsSectionItem from './ApartmentsSectionItem'

const apartments: Apartment[] = [
  {
    additions: [
      'Власна ванна кміната',
      'Туалет',
      'Душ',
      'Кондиціонер',
      'Холодильник',
      'Телевізор',
      'Безкоштовний wi-fi',
    ],
    id: 1,
    images: [
      {
        direction: 'horizontal',
        image: '/apartment-1.jpg',
        is_main_image: true,
      },
      {
        direction: 'vertical',
        image: '/apartment-2.jpg',
        is_main_image: false,
      },
    ],
    name: 'Двомісний номер',
    price: 1600,
  },
  {
    additions: [
      'Власна ванна кміната',
      'Туалет',
      'Душ',
      'Кондиціонер',
      'Телевізор',
      'Парковка',
      'Безкоштовний wi-fi',
      'Холодильник',
    ],
    id: 2,
    name: 'Модульний будинок',
    price: 6000,
  },
  {
    additions: [
      'Власна ванна кміната',
      'Туалет',
      'Душ',
      'Кондиціонер',
      'Телевізор',
      'Безкоштовний wi-fi',
      'Холодильник',
      'Мангальна зона',
    ],
    id: 3,
    images: [
      {
        direction: 'horizontal',
        image: '/apartment-3.jpg',
        is_main_image: true,
      },
    ],
    name: "Дерев'яний будинок",
    price: 6000,
  },
  {
    additions: [
      'Власна ванна кміната',
      'Туалет',
      'Душ',
      'Ванна',
      'Кондиціонер',
      'Телевізор',
      'Холодильник',
      'Безкоштовний wi-fi',
      'Барбекю',
    ],
    id: 4,
    images: [
      {
        direction: 'horizontal',
        image: '/apartment-4.jpg',
        is_main_image: false,
      },
      {
        direction: 'vertical',
        image: '/apartment-2.jpg',
        is_main_image: false,
      },
    ],
    name: 'VIP апартаменти',
    price: 8000,
  },
]

interface ApartmentsSectionProps extends HTMLAttributes<HTMLDivElement> {}

const ApartmentsSection: FC<ApartmentsSectionProps> = ({
  className,
  ...props
}) => {
  return (
    <div className={className} id="apartments" {...props}>
      <Content>
        <section>
          <CurlyBraceHeading level={2} position="end">
            Наші апартаменти
          </CurlyBraceHeading>
          <div className="mt-16 grid gap-[3.75rem] md:grid-cols-2 md:gap-x-28 md:gap-y-0 lg:gap-x-56">
            {apartments.map((item) => (
              <ApartmentsSectionItem data={item} key={item.id} />
            ))}
          </div>
        </section>
      </Content>
    </div>
  )
}

export default ApartmentsSection
