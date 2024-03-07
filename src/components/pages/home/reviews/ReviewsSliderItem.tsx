import Review from '@/types/Review'
import { cn } from '@/utils'
import { FC, HTMLAttributes } from 'react'

interface ReviewsSliderItemProps extends HTMLAttributes<HTMLDivElement> {
  data: Review
}

const ReviewsSliderItem: FC<ReviewsSliderItemProps> = ({
  className,
  data: { author, date, review },
  ...props
}) => {
  return (
    <div
      className={cn('flex h-full flex-col font-light', className)}
      {...props}
    >
      <h3 className="flex items-center justify-between gap-5 text-lg uppercase">
        <span>&#91;</span>
        {author}
        <span>&#93;</span>
      </h3>
      <p className="relative mt-[3.75rem] pb-[1.875rem] md:text-lg">{review}</p>
      <span className="relative mt-auto block pt-2.5 text-end after:absolute after:left-0 after:right-0 after:top-0 after:h-[0.0625rem] after:w-full after:bg-light">
        {date}
      </span>
    </div>
  )
}

export default ReviewsSliderItem
