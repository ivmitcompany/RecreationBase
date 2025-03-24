'use client'

import { cn } from '@/utils'
import { VariantProps, cva } from 'class-variance-authority'
import { motion } from 'framer-motion'
import { FC, forwardRef } from 'react'

import MenuItem from './NavMenuItem'

const menuVariants = cva('flex flex-col md:flex-row', {
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
    itemSize: {
      default: '*:text-sm',
      lg: '*:text-xl *:md:text-lg *:font-dark',
    },
    spacing: {
      default: 'gap-5 md:gap-x-6 md:gap-y-6',
      wide: 'gap-7 md:gap-x-10 md:gap-y-10',
    },
  },
})

type NavMenuProps = VariantProps<typeof menuVariants> & {
  className?: string
  itemsUnderline?: boolean
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.1,
    },
  },
}

const item = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, transition: { stiffness: 100, type: 'spring' }, x: 0 },
}

const MotionUl = motion.ul

const NavMenu: FC<NavMenuProps> = ({
  align,
  className,
  itemSize,
  itemsUnderline = false,
  spacing,
}) => (
  <MotionUl
    animate="show"
    className={cn(menuVariants({ align, itemSize, spacing }), className)}
    initial="hidden"
    variants={container}
  >
    <motion.div variants={item}>
      <MenuItem isUnderline={itemsUnderline}>
        Головна
      </MenuItem>
    </motion.div>
    <motion.div variants={item}>
      <MenuItem
        href="/#apartments"
        isUnderline={itemsUnderline}
      >
        Апартаменти
      </MenuItem>
    </motion.div>
    <motion.div variants={item}>
      <MenuItem
        href="https://logindariy.choiceqr.com/online-menu"
        isUnderline={itemsUnderline}
      >
        Меню
      </MenuItem>
    </motion.div>
    <motion.div variants={item}>
      <MenuItem
        href="/restaurant"
        isUnderline={itemsUnderline}
      >
        Ресторан
      </MenuItem>
    </motion.div>
    <motion.div variants={item}>
      <MenuItem href="/pool" isUnderline={itemsUnderline}>
        Басейни
      </MenuItem>
    </motion.div>
    <motion.div variants={item}>
      <MenuItem
        href="https://logindariy.com.ua/"
        isUnderline={itemsUnderline}
      >
        Крафтовий магазин
      </MenuItem>
    </motion.div>
  </MotionUl>
)

export default NavMenu
