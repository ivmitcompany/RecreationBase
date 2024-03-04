import { cn } from '@/utils'
import { FC, HTMLAttributes } from 'react'

interface ColorAccentSpanProps extends HTMLAttributes<HTMLSpanElement> {}

const ColorAccentSpan: FC<ColorAccentSpanProps> = ({
  children,
  className,
  ...props
}) => (
  <span className={cn('text-accent', className)} role="text" {...props}>
    {children}
  </span>
)

export default ColorAccentSpan
