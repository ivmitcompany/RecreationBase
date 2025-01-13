import Review from '@/types/Review'
import { cn, transformLineBreaks } from '@/utils'
import { FC, HTMLAttributes } from 'react'

interface ReviewsSliderItemProps extends HTMLAttributes<HTMLDivElement> {
  data: Review
}

const ReviewsSliderItem: FC<ReviewsSliderItemProps> = ({
  className,
  data: { author, date, review },
  ...props
}) => {
  const transformedReview = transformLineBreaks(review)

  return (
    <div
      className={cn('flex h-full flex-col font-light', className)}
      {...props}
    >
      <h3 className="flex items-center justify-between gap-5 text-lg uppercase">
        {author}
      </h3>
      <p
        className="relative mt-[3.75rem] pb-[1.875rem] md:text-lg"
        dangerouslySetInnerHTML={{ __html: transformedReview }}
      />
      <span className="relative mt-auto block pt-2.5 text-end after:absolute after:left-0 after:right-0 after:top-0 after:h-[0.0625rem] after:w-full after:bg-light">
        {date}
      </span>
    </div>
  )
}

export default ReviewsSliderItem
