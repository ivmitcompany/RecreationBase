import { cn } from '@/utils'
import { FC, HTMLAttributes } from 'react'

export interface ContactsProps extends HTMLAttributes<HTMLDivElement> {
  short?: boolean
}

const Contacts: FC<ContactsProps> = ({
  className,
  short = false,
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
      +380678279007
    </a>
    <p className={cn(short && 'sr-only')}>с.Рокосово, вул.Виноградна 14</p>
  </address>
)

export default Contacts
