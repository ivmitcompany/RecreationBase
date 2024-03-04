import ColorAccentSpan from '@/components/ui/ColorAccentSpan'
import { cn } from '@/utils'
import { ButtonHTMLAttributes, FC } from 'react'

interface CompanyRulesToggleButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  itemsToggled: boolean
}

const CompanyRulesToggleButton: FC<CompanyRulesToggleButtonProps> = ({
  className,
  itemsToggled,
  ...props
}) => (
  <button className={cn('block text-xs font-light', className)} {...props}>
    <ColorAccentSpan>
      {itemsToggled ? 'Показати більше...' : 'Приховати'}
    </ColorAccentSpan>
  </button>
)

export default CompanyRulesToggleButton
