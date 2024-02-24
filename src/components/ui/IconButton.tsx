import { cn } from '@/utils'
import { ButtonHTMLAttributes, ComponentType, FC } from 'react'

import { IconProps } from './Icons'

export interface IconButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  Icon: ComponentType<IconProps>
  label: string
}

const IconButton: FC<IconButtonProps> = ({
  Icon,
  children,
  className,
  label,
  ...props
}) => (
  <button
    className={cn(
      'block bg-light p-1.5 text-accent transition-opacity hover:opacity-70',
      className
    )}
    {...props}
  >
    <Icon aria-hidden="true" size="sm" />
    <span className="sr-only">{label}</span>
  </button>
)

export default IconButton
