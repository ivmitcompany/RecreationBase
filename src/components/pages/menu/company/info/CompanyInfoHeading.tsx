import { cn } from '@/utils'
import React, { FC, HTMLAttributes } from 'react'

interface CompanyInfoHeadingProps extends HTMLAttributes<HTMLHeadingElement> {}

const CompanyInfoHeading: FC<CompanyInfoHeadingProps> = ({
  children,
  className,
  ...props
}) => (
  <h4 className={cn('text-lg font-light uppercase', className)} {...props}>
    {children}
  </h4>
)

export default CompanyInfoHeading
