import { IconProps } from '@/components/ui/Icons'
import { cn } from '@/utils'
import React, { ComponentType, FC, HTMLAttributes } from 'react'

interface CompanySocialsItemProps extends HTMLAttributes<HTMLLIElement> {
  href: string
  label: string
}

const CompanySocialsItem: FC<CompanySocialsItemProps> = ({
  children,
  className,
  href,
  label,
  ...props
}) => (
  <li className={cn('w-fit font-light', className)} {...props}>
    <a className="group flex items-center gap-3" href={href} target="_blank">
      <div className="flex flex-col gap-1">
        <span className="text-xs" role="text">
          {label}
        </span>
        <span
          className="text-[0.875rem] leading-5 transition-colors group-hover:text-accent"
          role="text"
        >
          {children}
        </span>
      </div>
    </a>
  </li>
)

export default CompanySocialsItem
