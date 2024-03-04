import MenuInfoHeading from '@/components/pages/menu/company/info/MenuInfoHeading'
import MenuInfoSocials from '@/components/pages/menu/company/socials/MenuInfoSocials'
import { cn } from '@/utils'
import React, { FC, HTMLAttributes } from 'react'

interface MenuInfoProps extends HTMLAttributes<HTMLDivElement> {}
const MenuInfo: FC<MenuInfoProps> = ({ className, ...props }) => {
  return (
    <div className={cn('space-y-10', className)} {...props}>
      <div className="space-y-5">
        <MenuInfoHeading>Інформація про заклад</MenuInfoHeading>
        <MenuInfoSocials className="pl-[1.125rem]" />
      </div>
    </div>
  )
}

export default MenuInfo
