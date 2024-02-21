import { cn } from '@/utils'
import { FC, HTMLAttributes } from 'react'

interface HeaderContactsProps extends HTMLAttributes<HTMLDivElement> {}

const HeaderContacts: FC<HeaderContactsProps> = ({ className, ...props }) => (
  <address
    className={cn(
      'flex flex-col items-center justify-center gap-2.5 text-lg not-italic md:text-base',
      className
    )}
    {...props}
  >
    <a className="transition-colors hover:text-accent" href="tel:380678279007">
      +380678279007
    </a>
    <p className="md:sr-only">с.Рокосово, вул.Виноградна 14</p>
  </address>
)

export default HeaderContacts
