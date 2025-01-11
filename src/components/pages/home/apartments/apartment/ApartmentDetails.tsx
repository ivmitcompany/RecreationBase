import DetailsModal, { DetailsModalProps } from '@/components/ui/DetailsModal'
import FontAccentSpan from '@/components/ui/FontAccentSpan'
import Apartment from '@/types/Apartment'
import { arrayIsNotEmpty, transformLineBreaks } from '@/utils'
import { FC } from 'react'

const getPeopleString = (peopleNumber: number) => {
  if (peopleNumber === 1) return 'на 1 особу'
  if (peopleNumber > 1 && peopleNumber < 5) return `на ${peopleNumber} особи`
  return `на ${peopleNumber} осіб`
}

interface ApartmentDetailsProps extends DetailsModalProps {
  data: Apartment
}

const ApartmentDetails: FC<ApartmentDetailsProps> = ({
  className,
  data: { additions, description, people_numbers, price, title },
  ...props
}) => {
  const transformedDescription = transformLineBreaks(description)

  return (
    <DetailsModal className={className} {...props}>
      <div className="flex h-full flex-col">
        <h3 className="text-[1.2rem] font-light uppercase leading-[1.35]">
          {title}
        </h3>
        <p className="flex items-baseline gap-3 md:mt-10 md:items-center">
          <h1 className="text-lg leading-[0.5]">{price} грн за добу</h1>
        </p>
        <div className="mt-[3.75rem] space-y-10 md:mt-10">
          {arrayIsNotEmpty(additions) && (
            <div className="space-y-5">
              <h4 className="md:text-sm">
                <span className="text-lg uppercase md:text-sm" role="text">
                  Зручності в номері
                </span>{' '}
                ({getPeopleString(people_numbers)})
              </h4>
              <ul className="flex flex-wrap gap-2.5">
                {additions!.map((addition) => (
                  <li
                    className="w-fit rounded-3xl border border-accent px-4 py-1 lowercase"
                    key={addition.name}
                  >
                    {addition.name}
                  </li>
                ))}
              </ul>
            </div>
          )}
          <p>{transformedDescription}</p>
        </div>
        <a
          className="mt-[3.75rem] block pt-5 text-end text-lg uppercase transition-colors hover:text-accent md:mt-auto"
          href="tel:380678279007"
        >
          бронювання +380678279007 +380678379007
        </a>
      </div>
    </DetailsModal>
  )
}

export default ApartmentDetails
