import CompanySocials from '@/components/pages/menu/company/socials/CompanySocials'
import Content from '@/components/ui/Content'
import CurlyBraceHeading from '@/components/ui/CurlyBraceHeading'
import { cn, getReviews } from '@/utils'
import React, { FC, HTMLAttributes } from 'react'

import ReviewsSlider from './ReviewsSlider'

interface ReviewsSectionProps extends HTMLAttributes<HTMLDivElement> {}

const ReviewsSection: FC<ReviewsSectionProps> = async ({
  className,
  ...props
}) => {
  const reviews = await getReviews()

  return (
    <div className={cn('relative overflow-hidden bg-graphite text-light', className)} {...props}>
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          className="h-full w-full object-cover opacity-30"
          loop
          muted
          playsInline
        >
          <source
            src="https://res.cloudinary.com/db8gndp2b/video/upload/v1742506504/IMG_7942_n5muqs.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Content>
          <section className="px-4 py-20 text-center md:px-0">
            <h2 className="text-center text-4xl font-luxurious tracking-tight md:text-5xl">
              Відгуки та соціальні мережі
            </h2>
            <p className="mt-6 text-center text-lg text-light/90">
              Залишити свій відгук на{' '}
              <a
                className="text-accent underline transition-colors hover:text-accent/80"
                href="https://maps.app.goo.gl/zsYJV7Kf6X5sadvT8?g_st=com.google.maps.preview"
                rel="noopener noreferrer"
                target="_blank"
              >
                Google Maps
              </a>
            </p>
            <CompanySocials className="mt-4 text-center text-light/90" />
            <ReviewsSlider className="mt-16" data={reviews} />
          </section>
        </Content>
      </div>
    </div>
  )
}

export default ReviewsSection
