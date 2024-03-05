import Image from 'next/image'
import React, { FC, HTMLAttributes } from 'react'

interface MeatDonenessItemProps extends HTMLAttributes<HTMLLIElement> {
  label: string
  src: string
}

const MeatDonenessItem: FC<MeatDonenessItemProps> = ({
  children,
  label,
  src,
  ...props
}) => (
  <li {...props}>
    <article className="flex items-center gap-3 md:gap-9">
      <div className="flex flex-col items-center gap-1">
        <div className="relative h-10 w-[6.25rem]">
          <Image alt={label} fill sizes="100px" src={src} />
        </div>
        <h5 className="whitespace-nowrap text-center text-[0.875rem] font-light uppercase leading-5">
          {label}
        </h5>
      </div>
      <p className="text-[0.875rem] font-light leading-4">{children}</p>
    </article>
  </li>
)

export default MeatDonenessItem
