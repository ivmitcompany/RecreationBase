import { Icons } from '@/components/ui/Icons'
import { linkButtonVariants } from '@/components/ui/button/LinkButton'
import { cn } from '@/utils'
import { VariantProps, cva } from 'class-variance-authority'
import { ButtonHTMLAttributes, FC } from 'react'

export const buttonVariants = cva(
  'group/button flex items-center font-light uppercase',
  {
    defaultVariants: { size: 'default' },
    variants: {
      size: {
        default: 'text-[1.375rem] leading-[1.2] md:text-[1.625rem]',
        sm: 'text-lg',
      },
    },
  }
)

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button: FC<ButtonProps> = ({ children, className, size, ...props }) => (
  <button className={cn(buttonVariants({ size }), className)} {...props}>
    {children}
    <span
      className={cn(
        'ml-5 group-hover/button:bg-accent group-hover/button:text-light md:ml-[1.875rem]',
        linkButtonVariants({ size: 'sm' })
      )}
    >
      <Icons.arrow />
      <span className="sr-only">Стрілка вліво</span>
    </span>
  </button>
)

export default Button
