import { cn } from '@/utils'
import { VariantProps, cva } from 'class-variance-authority'
import { FC, HTMLAttributes } from 'react'

export const headingVariants = cva('font-light uppercase', {
  defaultVariants: { position: 'start', size: 'default' },
  variants: {
    position: {
      center: 'text-center',
      end: 'text-right',
      start: 'text-left',
    },
    size: {
      default: 'text-2xl md:text-[2.875rem] md:leading-[3.9375rem]',
      sm: 'text-[1.375rem] leading-[1.35] md:text-2xl',
    },
  },
})

interface SimpleHeadingProps
  extends HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
  level: 1 | 2 | 3 | 4 | 5 | 6
}

const CurlyBraceHeading: FC<SimpleHeadingProps> = ({
  children,
  className,
  level,
  position,
  size,
  ...props
}) => {
  const HeadingTag: keyof JSX.IntrinsicElements = `h${level}`

  return (
    <HeadingTag
      className={cn(headingVariants({ position, size }), className)}
      {...props}
    >
      {children}
    </HeadingTag>
  )
}

export default CurlyBraceHeading
