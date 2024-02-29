import { Icons } from '@/components/ui/Icons'
import { cn } from '@/utils'
import { FC, HTMLAttributes } from 'react'

interface ReviewsSliderBulletProps extends HTMLAttributes<HTMLSpanElement> {
  index: number
}

const ReviewsSliderBullet: FC<ReviewsSliderBulletProps> = ({
  className,
  index,
  ...props
}) => (
  <span
    className={cn(
      'relative h-[0.3125rem] w-4 cursor-pointer font-accent md:h-2.5 md:w-8',
      className
    )}
    {...props}
  >
    <Icons.tilda className="absolute left-0 top-0 h-full w-full transition-colors" />
    <span className="sr-only">{index} розділ слайдеру</span>
  </span>
)

export default ReviewsSliderBullet
