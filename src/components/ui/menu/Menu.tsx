import { cn } from '@/utils'
import { VariantProps, cva } from 'class-variance-authority'
import { FC, HTMLAttributes } from 'react'

import MenuItem from './MenuItem'

const menuVariants = cva('flex flex-col flex-wrap md:flex-row', {
  defaultVariants: {
    align: 'default',
    itemSize: 'default',
    spacing: 'default',
  },
  variants: {
    align: {
      center: 'items-center justify-center',
      default: 'items-start md:items-center justify-center md:justify-start',
    },
    itemSize: { default: '*:text-base', lg: '*:text-2xl *:md:text-base' },
    spacing: {
      default: 'gap-4 md:gap-x-10 md:gap-y-5',
      wide: 'gap-[3.75rem] md:gap-x-10 md:gap-y-5',
    },
  },
})

interface MenuProps
  extends HTMLAttributes<HTMLUListElement>,
    VariantProps<typeof menuVariants> {
  underline?: boolean
}

const Menu: FC<MenuProps> = ({
  align,
  className,
  itemSize,
  spacing,
  underline,
  ...props
}) => (
  <ul
    className={cn(menuVariants({ align, itemSize, spacing }), className)}
    {...props}
  >
    <MenuItem underline={underline}>Головна</MenuItem>
    <MenuItem underline={underline}>Апартаменти</MenuItem>
    <MenuItem underline={underline}>Меню</MenuItem>
  </ul>
)

export default Menu
