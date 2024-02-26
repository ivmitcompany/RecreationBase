import FontAccentSpan from '@/components/ui/FontAccentSpan'
import { Icons } from '@/components/ui/Icons'
import { linkButtonVariants } from '@/components/ui/button/LinkButton'
import { cn } from '@/utils'
import { ButtonHTMLAttributes, FC } from 'react'

interface ApartmentDetailsButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {}

const ApartmentDetailsButton: FC<ApartmentDetailsButtonProps> = ({
  className,
  ...props
}) => (
  <button
    className={cn(
      'group/button flex items-center text-[1.375rem] font-light uppercase leading-[1.2] md:text-[1.625rem]',
      className
    )}
    {...props}
  >
    Детальніш
    <FontAccentSpan className="ml-[0.0625rem] uppercase" size="xs">
      e
    </FontAccentSpan>
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

export default ApartmentDetailsButton
