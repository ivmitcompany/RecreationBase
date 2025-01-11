import { Icons } from '@/components/ui/Icons'
import { cn } from '@/utils'
import React, { FC, HTMLAttributes } from 'react'

import CompanySocialsItem from './CompanySocialsItem'

interface CompanySocialsProps extends HTMLAttributes<HTMLUListElement> {}

const CompanySocials: FC<CompanySocialsProps> = ({ className, ...props }) => {
  return (
    <ul className={cn('flex justify-center space-x-4', className)} {...props}>
      <CompanySocialsItem
        className="hover:text-accent"
        href="https://www.instagram.com/logindariy_restaurant/"
        label="instagram"
      ></CompanySocialsItem>
      <CompanySocialsItem
        className="hover:text-accent"
        href="https://www.facebook.com/p/Logindariy-Restaurantt-100063863570860/"
        label="facebook"
      ></CompanySocialsItem>
      <CompanySocialsItem
        className="hover:text-accent"
        href="https://www.tiktok.com/@logindariy.restaurant?_t=ZM-8svEJLlKAUg&_r=1"
        label="tiktok"
      ></CompanySocialsItem>
    </ul>
  )
}

export default CompanySocials
