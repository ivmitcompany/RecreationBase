import { cn } from '@/utils'
import { VariantProps, cva } from 'class-variance-authority'
import { FC, HTMLAttributes } from 'react'

const fontAccentSpanVariants = cva('inline-block font-accent', {
  defaultVariants: { size: 'default' },
  variants: {
    size: {
      default: 'text-6xl leading-[1.2] md:text-[7.5rem]',
      md: 'text-6xl leading-[1.2] md:text-[5.75rem]',
      sm: 'text-6xl leading-[0.5] md:text-[5.625rem]',
    },
  },
})

interface FontAccentSpanProps
  extends HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof fontAccentSpanVariants> {}

const FontAccentSpan: FC<FontAccentSpanProps> = ({
  children,
  className,
  size,
  ...props
}) => (
  <span
    className={cn(fontAccentSpanVariants({ size }), className)}
    role="text"
    {...props}
  >
    {children}
  </span>
)

export default FontAccentSpan
