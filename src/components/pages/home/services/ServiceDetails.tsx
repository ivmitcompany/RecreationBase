import DetailsModal, { DetailsModalProps } from '@/components/ui/DetailsModal'
import FontAccentSpan from '@/components/ui/FontAccentSpan'
import CompanyService from '@/types/CompanyService'
import { FC } from 'react'

interface ServiceDetailsProps extends DetailsModalProps {
  data: CompanyService
}

const ServiceDetails: FC<ServiceDetailsProps> = ({
  className,
  data: { description, min_order_time, note, order_excess_price, price, title },
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
        <div className="mt-[3.75rem] space-y-2.5 md:mt-16">
          <p>
            мінімальне замовлення –{' '}
            <span className="text-accent" role="text">
              {min_order_time || 3}
            </span>{' '}
            години
          </p>
          <p>
            за четверту та наступні години оплата становить{' '}
            <span className="text-accent" role="text">
              {order_excess_price || 1000}
            </span>{' '}
            грн/год
          </p>
          {note && <p>{note}</p>}
          <p>{description}</p>
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

export default ServiceDetails
