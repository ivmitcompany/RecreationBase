import { cn } from '@/utils'
import { VariantProps, cva } from 'class-variance-authority'
import { FC, HTMLAttributes } from 'react'

const apartmentHeadingWrapperVariants = cva(
  'max-w-[20.9375rem] text-[2.5rem] font-light uppercase leading-[1.35] xl:max-w-none xl:text-[3.75rem]',
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
  <h3
    className={cn(
      apartmentHeadingWrapperVariants({ position, textPosition }),
      className
    )}
    {...props}
  >
    {children}
  </h3>
)

export default ApartmentHeadingWrapper
