import React, { FC, HTMLAttributes } from 'react'

import MenuInfoHeading from '../MenuInfoHeading'
import MeatAdvicesList from './advices/MeatAdvicesList'
import MeatDonenessList from './doneness/MeatDonenessList'

interface MeatInfoProps extends HTMLAttributes<HTMLDivElement> {}

const MeatInfo: FC<MeatInfoProps> = (props) => (
  <article {...props}>
    <MenuInfoHeading className="text-center">
      Рекомендується ступінь просмажування
    </MenuInfoHeading>
    <MeatAdvicesList className="mt-5" />
    <MeatDonenessList className="mt-[1.875rem] md:mt-[2.625rem]" />
  </article>
)

export default MeatInfo
