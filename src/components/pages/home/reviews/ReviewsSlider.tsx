'use client'

import Review from '@/types/Review'
import { FC } from 'react'
import * as ReactDOMServer from 'react-dom/server'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react'

import ReviewsSliderBullet from './ReviewsSliderBullet'
import ReviewsSliderItem from './ReviewsSliderItem'

const bulletsId = 'bullets'

const reviewsSliderSettings: SwiperProps = {
  breakpoints: {
    768: { slidesPerView: 2, spaceBetween: 48 },
    1024: { slidesPerView: 3, spaceBetween: 48 },
    1280: { slidesPerView: 3, spaceBetween: 96 },
  },
  modules: [Pagination],
  pagination: {
    bulletActiveClass: 'text-light',
    bulletClass: 'text-accent',
    clickable: true,
    el: `#${bulletsId}`,
    renderBullet: function (index, className) {
      return ReactDOMServer.renderToStaticMarkup(
        <ReviewsSliderBullet className={className} index={index} />
      )
    },
  },
  slidesPerView: 1,
}

interface ReviewsSliderProps extends SwiperProps {
  data: Review[]
}

const ReviewsSlider: FC<ReviewsSliderProps> = ({
  className,
  data,
  ...props
}) => {
  return (
    <>
      <Swiper className={className} {...reviewsSliderSettings} {...props}>
        {data.map((review) => (
          <SwiperSlide className="h-auto" key={review.id}>
            <ReviewsSliderItem data={review} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div
        className="mt-[3.75rem] flex justify-center gap-2.5 md:mt-[4.375rem] md:gap-4"
        id={bulletsId}
      />
    </>
  )
}

export default ReviewsSlider
