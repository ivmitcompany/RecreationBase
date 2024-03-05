import FontAccentSpan from '@/components/ui/FontAccentSpan'
import { cn } from '@/utils'
import { FC, HTMLAttributes } from 'react'

interface MenuHeadingProps extends HTMLAttributes<HTMLHeadingElement> {}

const MenuHeading: FC<MenuHeadingProps> = ({ className, ...props }) => {
  return (
    <h1
      className={cn(
        'block w-fit text-3xl font-light uppercase leading-[2.5625rem] md:text-6xl md:leading-[5.125rem]',
        className
      )}
      {...props}
    >
      <FontAccentSpan className="mr-2 md:mr-5">M</FontAccentSpan>еню
    </h1>
  )
}

export default MenuHeading
