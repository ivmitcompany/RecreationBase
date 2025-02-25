import Content from '@/components/ui/Content'
import CurlyBraceHeading from '@/components/ui/CurlyBraceHeading'
import { arrayIsNotEmpty } from '@/utils'
import { getApartments } from '@/utils'
import React, { FC, HTMLAttributes } from 'react'

import ApartmentsSectionItem from './ApartmentsSectionItem'

interface ApartmentsSectionProps extends HTMLAttributes<HTMLDivElement> {}

const APARTMENT_ORDER = [
  'Модульний будинок',
  'Апартаменти',
  "Дерев'яний котедж",
  'Тримісний номер',
  'Двомісний номер',
]

const sortApartments = (apartments: any[]) => {
  return apartments.sort(
    (a, b) =>
      APARTMENT_ORDER.indexOf(a.title) - APARTMENT_ORDER.indexOf(b.title)
  )
}

const ApartmentsSection: FC<ApartmentsSectionProps> = async ({
  className,
  ...props
}) => {
  const apartments = await getApartments()

  const sortedApartments = sortApartments(apartments)

  return (
    <>
      {arrayIsNotEmpty(sortedApartments) && (
        <div className={className} {...props}>
          <Content>
            <section>
              <CurlyBraceHeading level={2} position="end">
                Наші апартаменти
              </CurlyBraceHeading>
              <div className="mt-16 grid gap-[3.75rem] md:grid-cols-2 md:gap-x-28 md:gap-y-0 lg:gap-x-56">
                {sortedApartments.map((item) => (
                  <ApartmentsSectionItem data={item} key={item.id} />
                ))}
              </div>
            </section>
          </Content>
        </div>
      )}
    </>
  )
}

export default ApartmentsSection
