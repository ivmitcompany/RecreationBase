import { Icons } from '@/components/ui/Icons'
import { cn } from '@/utils'
import React, { FC, HTMLAttributes } from 'react'

import CompanySocialsItem from './CompanySocialsItem'

interface CompanySocialsProps extends HTMLAttributes<HTMLUListElement> {}

const CompanySocials: FC<CompanySocialsProps> = ({ className, ...props }) => {
  return (
    <ul
      className={cn(
        'flex justify-center space-x-6 md:space-x-8',
        'transform transition-all duration-300 hover:scale-105',
        className
      )}
      {...props}
    >
      <CompanySocialsItem
        className="group relative transition-all duration-300 hover:text-accent"
        href="https://www.instagram.com/logindariy_restaurant/"
        label="instagram"
      >
        <span className="absolute -inset-2 rounded-full bg-accent/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </CompanySocialsItem>
      <CompanySocialsItem
        className="group relative transition-all duration-300 hover:text-accent"
        href="https://www.facebook.com/p/Logindariy-Restaurantt-100063863570860/"
        label="facebook"
      >
        <span className="absolute -inset-2 rounded-full bg-accent/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </CompanySocialsItem>
      <CompanySocialsItem
        className="group relative transition-all duration-300 hover:text-accent"
        href="https://www.tiktok.com/@logindariy?_t=ZN-8utnpvZZesg&_r=1"
        label="tiktok"
      >
        <span className="absolute -inset-2 rounded-full bg-accent/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </CompanySocialsItem>
    </ul>
  )
}

export default CompanySocials
