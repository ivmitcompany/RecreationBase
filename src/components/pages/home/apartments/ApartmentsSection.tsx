import Content from '@/components/ui/Content'
import CurlyBraceHeading from '@/components/ui/CurlyBraceHeading'
import { arrayIsNotEmpty } from '@/utils'
import { getApartments } from '@/utils'
import React, { FC, HTMLAttributes } from 'react'

import ApartmentsSectionItem from './ApartmentsSectionItem'

interface ApartmentsSectionProps extends HTMLAttributes<HTMLDivElement> {}

const ApartmentsSection: FC<ApartmentsSectionProps> = async ({
  className,
  ...props
}) => {
  const apartments = await getApartments()

  return (
    <>
      {arrayIsNotEmpty(apartments) && (
        <div className={className} {...props}>
          <Content>
            <section>
              <CurlyBraceHeading level={2} position="end">
                Наші апартаменти
              </CurlyBraceHeading>
              <div className="mt-16 grid gap-[3.75rem] md:grid-cols-2 md:gap-x-28 md:gap-y-0 lg:gap-x-56">
                {apartments.map((item) => (
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
