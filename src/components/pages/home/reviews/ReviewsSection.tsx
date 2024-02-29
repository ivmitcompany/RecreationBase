import Content from '@/components/ui/Content'
import SectionHeading from '@/components/ui/SectionHeading'
import { cn } from '@/utils'
import React, { FC, HTMLAttributes } from 'react'

import ReviewsSlider from './ReviewsSlider'

export type Review = {
  author: string
  date: string
  id: number
  text: string
}

const REVIEWS: Review[] = [
  {
    author: 'Никита Овчаров',
    date: '03.02.2022',
    id: 1,
    text: "Рекомендуємо! Вчора їздили на чани, отримали величезне задоволення! Найкраще місце на Закарпатті, обслуговування на відмінно! Офіціант Валік кращий!	Приїдемо ще обов'язково! Дякую за чудовий вечір !",
  },
  {
    author: 'dariac chai',
    date: '14.07.2023',
    id: 2,
    text: 'Хороший вибір як для проведення великого заходу, так і для вечері вдвох, фотосесії або відпочинку на цілий день. Комплекс, розташований на горі з чудовим краєвидом. Велика доглянута територія, басейн, сауна, чани, тераси, ресторан. Хотілося б побувати скрізь, але поки що встигли тільки повечеряти в ресторані)',
  },
  {
    author: 'Олег Довчанин',
    date: '07.01.2024',
    id: 3,
    text: 'Дуже красиве місце, затишна атмосфера яку доповнює красивий каток та горячі напої, які нам порекомендували офіціанти. Також дуже смачна кухня, одним словом неймовірно нам все дуже сподобалось)',
  },
  {
    author: 'Никита Овчаров',
    date: '03.02.2022',
    id: 4,
    text: "Рекомендуємо! Вчора їздили на чани, отримали величезне задоволення! Найкраще місце на Закарпатті, обслуговування на відмінно! Офіціант Валік кращий!	Приїдемо ще обов'язково! Дякую за чудовий вечір !",
  },
  {
    author: 'Олег Довчанин',
    date: '07.01.2024',
    id: 5,
    text: 'Дуже красиве місце, затишна атмосфера яку доповнює красивий каток та горячі напої, які нам порекомендували офіціанти. Також дуже смачна кухня, одним словом неймовірно нам все дуже сподобалось)',
  },
]

interface ReviewsSectionProps extends HTMLAttributes<HTMLDivElement> {}

const ReviewsSection: FC<ReviewsSectionProps> = ({ className, ...props }) => {
  return (
    <div className={cn('bg-graphite text-light', className)} {...props}>
      <Content>
        <section className="px-4 md:px-0">
          <SectionHeading level={2} position="center">
            Відгуки
          </SectionHeading>
          <ReviewsSlider className="mt-16" data={REVIEWS} />
        </section>
      </Content>
    </div>
  )
}

export default ReviewsSection
