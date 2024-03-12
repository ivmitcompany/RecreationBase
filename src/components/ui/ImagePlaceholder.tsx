import { cn } from '@/utils'
import { FC, HTMLAttributes } from 'react'

import { Icons } from './Icons'

interface ImagePlaceholderProps extends HTMLAttributes<HTMLDivElement> {
  border?: boolean
}

const ImagePlaceholder: FC<ImagePlaceholderProps> = ({
  border = true,
  className,
  ...props
}) => (
  <div
    className={cn(
      'flex items-center justify-center bg-[#d3d2d2] text-dark',
      border && 'border border-graphite',
      className
    )}
    {...props}
  >
    <Icons.mountain aria-hidden />
    <span className="sr-only">Зображення відсутнє</span>
  </div>
)

export default ImagePlaceholder
