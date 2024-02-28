import DetailsModal, { DetailsModalProps } from '@/components/ui/DetailsModal'
import FontAccentSpan from '@/components/ui/FontAccentSpan'
import { arrayIsNotEmpty } from '@/utils'
import { FC } from 'react'

import { Apartment } from './ApartmentsSection'

interface ApartmentDetailsProps extends DetailsModalProps {
  data: Apartment
}

const ApartmentDetails: FC<ApartmentDetailsProps> = ({
  className,
  data: { additions, name, price },
  ...props
}) => {
  const additionsArePresent = arrayIsNotEmpty(additions)

  return (
    <DetailsModal className={className} {...props}>
      <div className="flex flex-col">
        <h3 className="text-[1.875rem] font-light uppercase leading-[1.35]">
          {name}
        </h3>
        <p className="flex items-baseline gap-3 md:items-center">
          <FontAccentSpan className="leading-[0.5] text-accent" size="xs">
            {price}
          </FontAccentSpan>
          грн за годину
        </p>
        <div className="mt-[3.75rem] space-y-5 md:mt-16">
          {additionsArePresent && (
            <div className="space-y-10">
              <h4 className="md:text-lg">
                <span className="text-lg uppercase md:text-xl" role="text">
                  Зручності в номері
                </span>{' '}
                (на 2 особи)
              </h4>
              <ul className="flex flex-wrap gap-2.5">
                {additions!.map((addition, index) => (
                  <li
                    className="w-fit rounded-3xl border border-accent px-4 py-1 lowercase"
                    key={index + 1}
                  >
                    {addition}
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div className="space-y-[0.3125rem] md:space-y-2.5">
            <p>
              у вартість входять сніданки та можливість користуватись катком
              взиму й басейном влітку
            </p>
            <p>на території комплексу також є парковка</p>
          </div>
        </div>
        <a
          className="mt-[3.75rem] block pt-5 text-end text-lg uppercase transition-colors hover:text-accent md:mt-auto"
          href="tel:380678279007"
        >
          бронювання <span className="text-accent">&#91;</span>+380678279007
          <span className="text-accent">&#93;</span>
        </a>
      </div>
    </DetailsModal>
  )
}

export default ApartmentDetails
