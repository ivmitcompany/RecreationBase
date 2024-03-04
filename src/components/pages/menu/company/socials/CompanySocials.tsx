// TODO: Update socials hrefs

import { Icons } from '@/components/ui/Icons'
import { cn } from '@/utils'
import React, { FC, HTMLAttributes } from 'react'

import MenuInfoSocialsItem from './MenuInfoSocialsItem'

interface CompanySocialsProps extends HTMLAttributes<HTMLUListElement> {}
const CompanySocials: FC<CompanySocialsProps> = ({ className, ...props }) => {
  return (
    <ul className={cn('flex flex-col gap-4', className)} {...props}>
      <MenuInfoSocialsItem
        href="tel:380678279007"
        icon={Icons.phone}
        label="телефон"
      >
        +38 067 827 90 07
      </MenuInfoSocialsItem>
      <MenuInfoSocialsItem
        href="tel:380686451595"
        icon={Icons.order}
        label="доставка"
      >
        +38 068 645 15 95
      </MenuInfoSocialsItem>
      <MenuInfoSocialsItem href="" icon={Icons.instagram} label="instagram">
        @logindariy_restaurant
      </MenuInfoSocialsItem>
      <MenuInfoSocialsItem href="" icon={Icons.facebook} label="facebook">
        Logindariy Restaurant
      </MenuInfoSocialsItem>
    </ul>
  )
}

export default CompanySocials
