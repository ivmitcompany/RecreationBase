import { cn } from '@/utils'
import { FC, HTMLAttributes } from 'react'

import { Icons } from './Icons'

interface ImagePlaceholderProps extends HTMLAttributes<HTMLDivElement> {}

const ImagePlaceholder: FC<ImagePlaceholderProps> = ({
  className,
  ...props
}) => (
  <div
    className={cn(
      'flex items-center justify-center border border-graphite bg-[#d3d2d2] text-dark',
      className
    )}
    {...props}
  >
    <Icons.mountain aria-hidden />
    <span className="sr-only">Зображення відсутнє</span>
  </div>
)

export default ImagePlaceholder
