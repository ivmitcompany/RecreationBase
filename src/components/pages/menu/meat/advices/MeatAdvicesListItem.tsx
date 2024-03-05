import { Icons } from '@/components/ui/Icons'
import { cn } from '@/utils'
import React, { FC, HTMLAttributes } from 'react'

interface MeatAdvicesListItemProps extends HTMLAttributes<HTMLLIElement> {}

const MeatAdvicesListItem: FC<MeatAdvicesListItemProps> = ({
  children,
  className,
  ...props
}) => (
  <li
    className={cn(
      'flex items-center gap-3 text-base leading-5 md:gap-2 md:text-[0.875rem]',
      className
    )}
    {...props}
  >
    <div aria-hidden className="relative h-[0.1875rem] w-2.5 flex-shrink-0">
      <Icons.tilda.solid className="absolute left-0 top-0 h-full w-full object-cover object-center text-accent" />
    </div>
    {children}
  </li>
)

export default MeatAdvicesListItem
