import { cn } from '@/utils'
import { FC, HTMLAttributes } from 'react'

interface ContentProps extends HTMLAttributes<HTMLDivElement> {}

const Content: FC<ContentProps> = ({ children, className, ...props }) => (
  <div className={cn('mx-auto max-w-7xl px-5 md:px-10', className)} {...props}>
    {children}
  </div>
)

export default Content
