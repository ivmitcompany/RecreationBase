// TODO: Update socials hrefs

import { Icons } from '@/components/ui/Icons'
import { cn } from '@/utils'
import React, { FC, HTMLAttributes } from 'react'

import CompanySocialsItem from './CompanySocialsItem'

interface CompanySocialsProps extends HTMLAttributes<HTMLUListElement> {}

const CompanySocials: FC<CompanySocialsProps> = ({ className, ...props }) => {
  return (
    <ul className={cn('flex flex-col gap-4', className)} {...props}>
      <CompanySocialsItem
        href="tel:380678279007"
        icon={Icons.phone}
        label="телефон"
      >
        +38 067 827 90 07
      </CompanySocialsItem>
      <CompanySocialsItem
        href="tel:380686451595"
        icon={Icons.order}
        label="доставка"
      >
        +38 068 645 15 95
      </CompanySocialsItem>
      <CompanySocialsItem
        href="https://www.instagram.com/logindariy_restaurant/"
        icon={Icons.instagram}
        label="instagram"
      >
        @logindariy_restaurant
      </CompanySocialsItem>
      <CompanySocialsItem
        href="https://www.facebook.com/p/Logindariy-Restaurant-100042957592191/"
        icon={Icons.facebook}
        label="facebook"
      >
        Logindariy Restaurant
      </CompanySocialsItem>
    </ul>
  )
}

export default CompanySocials
