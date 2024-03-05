import { cn } from '@/utils'
import React, { FC, HTMLAttributes } from 'react'

import MeatDonenessItem from './MeatDonenessListItem'

interface MeatDonenessListProps extends HTMLAttributes<HTMLUListElement> {}

const MeatDonenessList: FC<MeatDonenessListProps> = ({
  className,
  ...props
}) => (
  <ul
    className={cn(
      'flex flex-col gap-5 px-2.5 md:gap-[1.375rem] md:px-0',
      className
    )}
    {...props}
  >
    <MeatDonenessItem label="Medium" src="/meat/medium.png">
      мʼясо вже не кровить, а при натисканні на нього витікає рожевий сік,
      температура 60-65°С.
    </MeatDonenessItem>
    <MeatDonenessItem label="Medium Well" src="/meat/medium-well.png">
      мʼясо на розрізі більш сіро коричневе, при натисканні прозорий сік,
      всередині такого просмаженрго стейка температура становить 65-69° С.
    </MeatDonenessItem>
    <MeatDonenessItem label="Well Done" src="/meat/well-done.png">
      мясо повного просмажування, на розрізі-коричневе, температура всередині
      71-100°С, висушене мʼясо.
    </MeatDonenessItem>
  </ul>
)

export default MeatDonenessList
