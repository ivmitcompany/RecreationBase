'use client'

import { Icons } from '@/components/ui/Icons'
import HeaderContext from '@/store/header-context'
import { cn } from '@/utils'
import { ButtonHTMLAttributes, FC, useContext } from 'react'

interface HeaderMenuIconProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const HeaderMenuIcon: FC<HeaderMenuIconProps> = ({ className, ...props }) => {
  const { closeMenu, isMenuOpened, openMenu } = useContext(HeaderContext)

  return (
    <button
      className={cn('p-1.5', className)}
      onClick={isMenuOpened ? closeMenu : openMenu}
      {...props}
    >
      {isMenuOpened ? (
        <Icons.cross aria-hidden className={cn(isMenuOpened && 'text-light')} />
      ) : (
        <Icons.burger aria-hidden />
      )}
      <span className="sr-only">
        {isMenuOpened ? 'Закрити меню' : 'Відкрити меню'}
      </span>
    </button>
  )
}

export default HeaderMenuIcon
