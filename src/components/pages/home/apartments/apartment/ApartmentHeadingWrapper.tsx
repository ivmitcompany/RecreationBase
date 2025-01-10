import { cn } from '@/utils'
import { VariantProps, cva } from 'class-variance-authority'
import { FC, HTMLAttributes } from 'react'

const apartmentHeadingWrapperVariants = cva(
  'max-w-[20.9375rem] text-[1.5rem] font-light uppercase leading-[1.35] xl:text-[2.75rem]',
  {
    defaultVariants: { position: 'default' },
    variants: {
      position: {
        center: 'text-center mx-auto',
        default: 'group-even/item:ml-auto',
      },
      textPosition: {
        default: 'group-even/item:text-end',
      },
    },
  }
)

export interface ApartmentHeadingWrapperProps
  extends HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof apartmentHeadingWrapperVariants> {}

const ApartmentHeadingWrapper: FC<ApartmentHeadingWrapperProps> = ({
  children,
  className,
  position,
  textPosition,
  ...props
}) => (
  <h6
    className={cn(
      apartmentHeadingWrapperVariants({ position, textPosition }),
      className
    )}
    {...props}
  >
    {children}
  </h6>
)

export default ApartmentHeadingWrapper
