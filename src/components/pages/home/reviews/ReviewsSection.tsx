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
        <section className="px-4 md:px-0">
          <CurlyBraceHeading level={2} position="center">
            Відгуки
          </CurlyBraceHeading>
          <ReviewsSlider className="mt-16" data={reviews} />
        </section>
      </Content>
    </div>
  )
}

export default ReviewsSection
