'use client'

import ColorAccentSpan from '@/components/ui/ColorAccentSpan'
import { cn } from '@/utils'
import React, { FC, HTMLAttributes, useState } from 'react'

import CompanyRulesItem from './CompanyRulesItem'
import CompanyRulesToggleButton from './CompanyRulesToggleButton'

interface CompanyRulesProps extends HTMLAttributes<HTMLUListElement> {}

const CompanyRules: FC<CompanyRulesProps> = ({ className, ...props }) => {
  const [areMostItemsHidden, setAreMostItemsHidden] = useState<boolean>(true)

  const toggleItems = () => setAreMostItemsHidden(!areMostItemsHidden)

  const alwaysVisibleItems = (
    <>
      <CompanyRulesItem>
        У нашому закладі алкоголь можна вживати особами{' '}
        <ColorAccentSpan>21+</ColorAccentSpan> та кальян{' '}
        <ColorAccentSpan>18+</ColorAccentSpan>{' '}
      </CompanyRulesItem>
      <CompanyRulesItem>
        Бронь столу тримається <ColorAccentSpan>20хв</ColorAccentSpan>, якщо
        гість не попередив про те, що не прийде чи запізнюється, то бронь
        знімається автоматично
      </CompanyRulesItem>
      <CompanyRulesItem>
        Адміністрація <ColorAccentSpan>не несе</ColorAccentSpan>{' '}
        відповідальності за цінні речі, залишені без нагляду гостя
      </CompanyRulesItem>
    </>
  )

  return (
    <>
      <ul className={cn('flex flex-col gap-4', className)} {...props}>
        {areMostItemsHidden ? (
          alwaysVisibleItems
        ) : (
          <>
            {alwaysVisibleItems}
            <CompanyRulesItem>
              Адміністрація має право{' '}
              <ColorAccentSpan>відмовити</ColorAccentSpan> гостю у відвідуванні
              закладу у стані алкогольного сп’яніння, за грубе звернення до
              персоналу та гостей ресторану
            </CompanyRulesItem>
            <CompanyRulesItem>
              Продовження роботи закладу (за попередньою домовленостю) –{' '}
              <ColorAccentSpan>1000 грн / 1 година</ColorAccentSpan>
            </CompanyRulesItem>
            <CompanyRulesItem>
              Фотосесія на території –{' '}
              <ColorAccentSpan>1000 грн</ColorAccentSpan>
            </CompanyRulesItem>
            <CompanyRulesItem>
              Оренда арки для виїзної церемонії –{' '}
              <ColorAccentSpan>5000 грн</ColorAccentSpan>
            </CompanyRulesItem>
            <CompanyRulesItem>
              Трансфер / Автобус на замовлення
            </CompanyRulesItem>
            <CompanyRulesItem>
              Cork fee – відкорковування однієї пляшки алкоголю, принесеної з
              собою, коштує <ColorAccentSpan>200 грн</ColorAccentSpan>
            </CompanyRulesItem>
          </>
        )}
      </ul>
      <CompanyRulesToggleButton
        className="ml-auto"
        itemsToggled={areMostItemsHidden}
        onClick={toggleItems}
      />
    </>
  )
}

export default CompanyRules
