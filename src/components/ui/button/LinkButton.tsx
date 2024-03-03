import { cn } from '@/utils'
import { VariantProps } from 'class-variance-authority'
import Link, { LinkProps } from 'next/link'
import { FC, HTMLAttributes } from 'react'

import { Icons } from '../Icons'
import { buttonCircleVariants, buttonVariants } from './Button'

type ButtonProps = LinkProps &
  HTMLAttributes<HTMLAnchorElement> &
  VariantProps<typeof buttonVariants> &
  VariantProps<typeof buttonCircleVariants>

const LinkButton: FC<ButtonProps> = ({
  buttonSize,
  children,
  circleColor,
  circleSize,
  circleSpacing,
  className,
  ...props
}) => (
  <Link className={cn(buttonVariants({ buttonSize }), className)} {...props}>
    {children}
    <span
      className={cn(
        'group-hover/button:bg-accent group-hover/button:text-light ',

        buttonCircleVariants({ circleColor, circleSize, circleSpacing })
      )}
    >
      <Icons.arrow aria-hidden />
      <span className="sr-only">Стрілка вліво</span>
    </span>
  </Link>
)

export default LinkButton
