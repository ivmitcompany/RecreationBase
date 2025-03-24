'use client'

import Contacts from '@/components/ui/Contacts'
import NavMenu from '@/components/ui/nav-menu/NavMenu'
import HeaderContext from '@/store/header-context'
import { cn } from '@/utils'
import { AnimatePresence, HTMLMotionProps, motion } from 'framer-motion'
import { FC, HTMLAttributes, useContext, useEffect, useState } from 'react'

interface HeaderMenuMobileProps extends Omit<HTMLMotionProps<'div'>, 'ref'> {}

const HeaderMenuMobile: FC<HeaderMenuMobileProps> = ({
  className,
  ...props
}) => {
  const { isMenuOpened } = useContext(HeaderContext)
  const [rendered, setRendered] = useState(false)

  useEffect(() => {
    if (isMenuOpened) setRendered(true)
    const timer = setTimeout(() => {
      if (!isMenuOpened) setRendered(false)
    }, 500)
    return () => clearTimeout(timer)
  }, [isMenuOpened])

  return (
    <AnimatePresence>
      {rendered && (
        <motion.div
          animate={{ opacity: isMenuOpened ? 1 : 0 }}
          className={cn(
            'fixed inset-0 z-50 bg-black/60 backdrop-blur-sm',
            !isMenuOpened && 'pointer-events-none',
            className
          )}
          exit={{ opacity: 0 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            animate={{ x: isMenuOpened ? 0 : '100%' }}
            className={cn(
              'fixed right-0 top-0 flex h-full w-[85%] max-w-md flex-col justify-center overflow-hidden bg-white/95 text-dark shadow-2xl backdrop-blur-md',
              className
            )}
            exit={{ x: '100%' }}
            initial={{ x: '100%' }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            {...props}
          >
            <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-transparent via-accent to-transparent opacity-50" />
            <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-accent/5" />
            <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-accent/5" />

            <nav className="relative z-10 px-8">
              <NavMenu itemSize="lg" itemsUnderline spacing="wide" />
            </nav>

            <Contacts className="absolute bottom-14 left-0 right-0 z-10 items-center px-8" />
            <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-transparent via-accent to-transparent opacity-50" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default HeaderMenuMobile
