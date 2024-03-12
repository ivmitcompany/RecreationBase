import DetailsModal, { DetailsModalProps } from '@/components/ui/DetailsModal'
import FontAccentSpan from '@/components/ui/FontAccentSpan'
import Apartment from '@/types/Apartment'
import { arrayIsNotEmpty } from '@/utils'
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
  return (
    <DetailsModal className={className} {...props}>
      <div className="flex h-full flex-col">
        <h3 className="text-[1.875rem] font-light uppercase leading-[1.35]">
          {title}
        </h3>
        <p className="flex items-baseline gap-3 md:items-center">
          <FontAccentSpan className="leading-[0.5] text-accent" size="xs">
            {price}
          </FontAccentSpan>
          грн за годину
        </p>
        <div className="mt-[3.75rem] space-y-5 md:mt-16">
          {arrayIsNotEmpty(additions) && (
            <div className="space-y-10">
              <h4 className="md:text-lg">
                <span className="text-lg uppercase md:text-xl" role="text">
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
          <div className="space-y-[0.3125rem] md:space-y-2.5">
            <p>{description}</p>
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
