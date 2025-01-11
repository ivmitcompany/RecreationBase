import CompanySocials from '@/components/pages/menu/company/socials/CompanySocials'
import { cn } from '@/utils'
import React, { FC, HTMLAttributes } from 'react'

export interface ContactsProps extends HTMLAttributes<HTMLDivElement> {
  areShort?: boolean
}

const Contacts: FC<ContactsProps> = ({
  areShort = false,
  className,
  ...props
}) => (
  <address
    className={cn(
      'flex flex-col justify-center gap-2.5 not-italic md:gap-1.5',
      className
    )}
    {...props}
  >
    <a
      className="transition-colors md:hover:text-accent"
      href="tel:380678279007"
    >
      +380678279007 +380678379007
    </a>
    <p className={cn(areShort && 'sr-only')}>с.Рокосово, вул.Виноградна 14</p>
    <a
      className="underline hover:text-accent"
      href="https://maps.app.goo.gl/zsYJV7Kf6X5sadvT8?g_st=com.google.maps.preview"
      rel="noopener noreferrer"
      target="_blank"
    >
      Переглянути на Google Maps
    </a>
  </address>
)

export default Contacts
