import { cn } from '@/utils'
import { VariantProps, cva } from 'class-variance-authority'
import { FC, HTMLAttributes } from 'react'

import MenuItem from './NavMenuItem'

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

interface NavMenuProps
  extends HTMLAttributes<HTMLUListElement>,
    VariantProps<typeof menuVariants> {
  itemsUnderline?: boolean
}

const NavMenu: FC<NavMenuProps> = ({
  align,
  className,
  itemSize,
  itemsUnderline = false,
  spacing,
  ...props
}) => (
  <ul
    className={cn(menuVariants({ align, itemSize, spacing }), className)}
    {...props}
  >
    <MenuItem isUnderline={itemsUnderline}>Головна</MenuItem>
    <MenuItem href="/#apartments" isUnderline={itemsUnderline}>
      Апартаменти
    </MenuItem>
    <MenuItem
      href="https://logindariy.choiceqr.com/online-menu"
      isUnderline={itemsUnderline}
    >
      Меню
    </MenuItem>
    <MenuItem href="https://logindariy.com.ua/" isUnderline={itemsUnderline}>
      Крафтовий магазин
    </MenuItem>
  </ul>
)

export default NavMenu
