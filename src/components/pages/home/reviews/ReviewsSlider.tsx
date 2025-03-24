'use client'

import Review from '@/types/Review'
import { FC, useState } from 'react'
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
  effect: 'fade',
  fadeEffect: {
    crossFade: true
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
  slidesPerView: 1
}

interface ReviewsSliderProps extends SwiperProps {
  data: Review[]
}

const ReviewsSlider: FC<ReviewsSliderProps> = ({
  className,
  data,
  ...props
}) => {
  const [showReviews, setShowReviews] = useState(false)

  return (
    <div className={className}>
      {!showReviews ? (
        <div className="text-center">
          <button
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-accent/10 px-8 py-3 text-base font-medium text-light transition-all duration-300 hover:bg-accent/20"
            onClick={() => setShowReviews(true)}
          >
            <span className="relative z-10">Побачити відгуки</span>
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-accent/0 via-accent/10 to-accent/0 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
          </button>
        </div>
      ) : (
        <div className="relative">
          <div className="absolute -inset-4 -z-10 rounded-2xl bg-accent/5 blur-2xl" />
          <Swiper {...reviewsSliderSettings} {...props}>
            {data.map((review) => (
              <SwiperSlide className="h-auto" key={review.id}>
                <ReviewsSliderItem data={review} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div
            className="mt-12 flex justify-center gap-3 md:mt-16 md:gap-4"
            id={bulletsId}
          />
          <div className="mt-8 text-center">
            <button
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-accent/10 px-8 py-3 text-base font-medium text-light transition-all duration-300 hover:bg-accent/20"
              onClick={() => setShowReviews(false)}
            >
              <span className="relative z-10">Сховати відгуки</span>
              <div className="absolute inset-0 -z-10 bg-gradient-to-r from-accent/0 via-accent/10 to-accent/0 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default ReviewsSlider
