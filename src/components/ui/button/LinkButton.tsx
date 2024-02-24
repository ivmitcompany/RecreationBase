import { cn } from '@/utils'
import { VariantProps, cva } from 'class-variance-authority'
import Link, { LinkProps } from 'next/link'
import { FC, HTMLAttributes } from 'react'

export const linkButtonVariants = cva(
  'flex items-center justify-center text-center break-words border border-accent transition-colors leading-[1.2] rounded-full font-light uppercase',
  {
    defaultVariants: { color: 'default', size: 'default' },
    variants: {
      color: {
        default: 'text-dark md:hover:text-light md:hover:bg-accent',
        light: 'text-light md:hover:bg-accent',
      },
      size: {
        default: 'h-32 w-32 md:w-44 md:h-44 px-4 md:px-8 md:text-lg',
        md: 'w-[8.5rem] h-[8.5rem] md:w-36 md:h-36 px-[1.875rem md:text-lg',
        sm: 'w-20 h-20 px-5',
      },
    },
  }
)

type ButtonProps = LinkProps &
  HTMLAttributes<HTMLAnchorElement> &
  VariantProps<typeof linkButtonVariants>

const LinkButton: FC<ButtonProps> = ({
  children,
  className,
  color,
  size,
  ...props
}) => (
  <Link
    className={cn(linkButtonVariants({ color, size }), className)}
    {...props}
  >
    {children}
  </Link>
)

export default LinkButton
