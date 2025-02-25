import { Icons } from '@/components/ui/Icons'
import { cn } from '@/utils'
import { VariantProps, cva } from 'class-variance-authority'
import { ButtonHTMLAttributes, FC } from 'react'

export const buttonVariants = cva(
  'group/button flex items-center font-light uppercase',
  {
    defaultVariants: { buttonSize: 'default' },
    variants: {
      buttonSize: {
        default: 'text-[1.375rem] leading-[1.2] md:text-[1.625rem]',
        sm: 'text-lg',
      },
    },
  }
)

export const buttonCircleVariants = cva(
  'flex items-center justify-center text-center break-words border transition-colors leading-[1.2] rounded-full font-medium uppercase shadow-lg',
  {
    compoundVariants: [
      {
        circleColor: 'accent',
        class: 'md:hover:shadow-lg',
        shadow: 'medium',
      },
      {
        circleColor: 'dark',
        class: 'md:hover:shadow-md',
        shadow: 'subtle',
      },
    ],
    defaultVariants: {
      circleColor: 'default',
      circleSize: 'default',
      circleSpacing: 'default',
    },
    variants: {
      borderStyle: {
        dashed: 'border-dashed',
        dotted: 'border-dotted',
        none: 'border-none',
        solid: 'border-solid',
      },
      circleColor: {
        accent: 'text-light bg-accent border-accent md:hover:bg-dark',
        dark: 'text-light bg-dark border-dark md:hover:bg-accent',
        default:
          'text-dark bg-white border-accent md:hover:text-light md:hover:bg-accent',
        light: 'text-light bg-transparent border-light md:hover:bg-accent',
      },
      circleSize: {
        default: 'h-32 w-32 md:w-44 md:h-44 px-4 md:px-8 text-base',
        md: 'w-[8.5rem] h-[8.5rem] md:w-36 md:h-36 px-[1.875rem] text-base',
        sm: 'w-20 h-20 px-5 text-sm',
        xs: 'w-10 h-10 px-2.5 text-xs',
      },
      circleSpacing: {
        default: 'ml-5 md:ml-[1.875rem]',
        loose: 'ml-8',
        none: 'ml-0',
        tight: 'ml-2.5',
      },
      shadow: {
        large: 'shadow-lg',
        medium: 'shadow-md',
        none: 'shadow-none',
        subtle: 'shadow-sm',
      },
    },
  }
)

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants>,
    VariantProps<typeof buttonCircleVariants> {}

const Button: FC<ButtonProps> = ({
  buttonSize,
  children,
  circleColor = 'default',
  circleSize = 'sm',
  circleSpacing,
  className,
  ...props
}) => (
  <button className={cn(buttonVariants({ buttonSize }), className)} {...props}>
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
  </button>
)

export default Button
