import { cn } from '@/utils'
import Image from 'next/image'
import { FC, HTMLAttributes } from 'react'

interface MenuCategoryItemDetailsProps extends HTMLAttributes<HTMLDivElement> {}

const MenuCategoryItemDetails: FC<MenuCategoryItemDetailsProps> = ({
  className,
  ...props
}) => {
  return (
    <div
      className={cn('flex h-full flex-col font-light', className)}
      {...props}
    >
      <div className="relative aspect-square md:aspect-[1.51/1]">
        <Image
          alt="Сирники"
          className="object-cover object-center"
          fill
          sizes="(max-width: 767px) 100vw, 390px"
          src="/meal-big.jpg"
        />
      </div>
      <div className="flex flex-grow flex-col px-5 py-10">
        <h3 className="text-lg leading-5">Асорті зі свіжих овочей</h3>
        <ul className="mt-1 flex flex-wrap gap-1">
          <li className="before:content-['('] after:content-[',']">огірок</li>
          <li className="after:content-[',']">помідор</li>
          <li className="after:content-[',']">перець болгарський</li>
          <li className="after:content-[')']">цибуля кримська</li>
        </ul>
        <div className="mt-auto space-x-2.5 pt-2.5">
          <span className="text-lg text-accent">95 грн</span>
          <span className="pb-0.5 text-sm">250г</span>
        </div>
      </div>
    </div>
  )
}

export default MenuCategoryItemDetails
