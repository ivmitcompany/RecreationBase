import { cn } from '@/utils'
import React, { FC, HTMLAttributes } from 'react'

import MeatAdvicesListItem from './MeatAdvicesListItem'

interface MeatAdvicesListProps extends HTMLAttributes<HTMLUListElement> {}

const MeatAdvicesList: FC<MeatAdvicesListProps> = ({ className, ...props }) => (
  <ul className={cn('flex flex-col gap-4 md:gap-2.5', className)} {...props}>
    <MeatAdvicesListItem>
      для стейків Нью-Йорк, Філе-Міньйон, Торнедос і Шатобріан - MEDIUM RARE
    </MeatAdvicesListItem>
    <MeatAdvicesListItem>
      для стейка Рібай – MEDIUM RARE або MEDIUM
    </MeatAdvicesListItem>
    <MeatAdvicesListItem>
      для Портерхаус і Ті-Боун – MEDIUM або MEDIUM WELL
    </MeatAdvicesListItem>
  </ul>
)

export default MeatAdvicesList
