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
    <div className={cn('bg-graphite text-light', className)} {...props}>
      <Content>
        <section className="px-4 text-center md:px-0">
          <CurlyBraceHeading level={6} position="center">
            Відгуки
          </CurlyBraceHeading>
          <p className="mt-4 text-center text-light">
            Залишити свій відгук на{' '}
            <a
              className="underline hover:text-accent"
              href="https://maps.app.goo.gl/zsYJV7Kf6X5sadvT8?g_st=com.google.maps.preview"
              rel="noopener noreferrer"
              target="_blank"
            >
              Google Maps
            </a>
          </p>
          <CompanySocials className="mt-2 text-center text-light" />
          <ReviewsSlider className="mt-16" data={reviews} />
        </section>
      </Content>
    </div>
  )
}

export default ReviewsSection
