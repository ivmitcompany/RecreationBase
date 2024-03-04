import { Icons } from '@/components/ui/Icons'
import { cn } from '@/utils'
import React, { FC, HTMLAttributes } from 'react'

interface CompanyRulesItemProps extends HTMLAttributes<HTMLLIElement> {}

const CompanyRulesItem: FC<CompanyRulesItemProps> = ({
  children,
  className,
  ...props
}) => (
  <li className={cn('flex gap-4', className)} {...props}>
    <Icons.tilda.outline aria-hidden className="mt-1.5 text-accent" />
    <p className="text-[0.875rem] font-light leading-5">{children}</p>
  </li>
)

export default CompanyRulesItem
