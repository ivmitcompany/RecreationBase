import FontAccentSpan from '@/components/ui/FontAccentSpan'
import { cn } from '@/utils'
import { VariantProps, cva } from 'class-variance-authority'
import { FC, HTMLAttributes } from 'react'

export const curlyBraceHeadingVariants = cva(
  'flex items-baseline font-light uppercase',
  {
    defaultVariants: { position: 'start', size: 'default' },
    variants: {
      position: {
        center: 'justify-center',
        end: 'justify-end',
        start: 'justify-start',
      },
      size: {
        default: 'text-2xl md:text-[2.875rem] md:leading-[3.9375rem]',
        sm: 'text-[1.375rem] leading-[1.35] md:text-2xl',
      },
    },
  }
)

const curlyBraceHeadingTextVariants = cva('', {
  defaultVariants: { size: 'default' },
  variants: {
    size: {
      default: '-translate-y-1 md:translate-y-0',
      sm: '-translate-y-0.5 md:-translate-y-1',
    },
  },
})

interface CurlyBraceHeadingProps
  extends HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof curlyBraceHeadingVariants>,
    VariantProps<typeof curlyBraceHeadingTextVariants> {
  level: 1 | 2 | 3 | 4 | 5 | 6
}

const CurlyBraceHeading: FC<CurlyBraceHeadingProps> = ({
  children,
  className,
  level,
  position,
  size: headingSize,
  ...props
}) => {
  const headingSizeIsDefault = !headingSize || headingSize === 'default'
  const HeadingTag: keyof JSX.IntrinsicElements = `h${level}`

  return (
    <HeadingTag
      className={cn(
        curlyBraceHeadingVariants({ position, size: headingSize }),
        className
      )}
      {...props}
    >
      <FontAccentSpan
        className="mr-5 text-accent md:mr-[2.1875rem]"
        size={headingSizeIsDefault ? 'md' : 'xs'}
      >
        &#123;
      </FontAccentSpan>{' '}
      <span
        className={curlyBraceHeadingTextVariants({ size: headingSize })}
        role="text"
      >
        {children}
      </span>{' '}
      <FontAccentSpan
        className="ml-2.5 text-accent md:ml-5"
        size={headingSizeIsDefault ? 'md' : 'xs'}
      >
        &#125;
      </FontAccentSpan>
    </HeadingTag>
  )
}

export default CurlyBraceHeading
