import Content from '@/components/ui/Content'
import CurlyBraceHeading from '@/components/ui/CurlyBraceHeading'
import { buttonCircleVariants } from '@/components/ui/button/Button'
import { cn, getCompanyServices } from '@/utils'
import Image from 'next/image'
import React, { FC, HTMLAttributes } from 'react'

import ServicesSectionItem from './ServicesSectionItem'

interface ServicesSectionProps extends HTMLAttributes<HTMLDivElement> {}

const ServicesSection: FC<ServicesSectionProps> = async ({
  className,
  ...props
}) => {
  const companyServices = await getCompanyServices()

  return (
    <div
      className={cn('mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8', className)}
      {...props}
    >
      <Content>
        <section>
          <CurlyBraceHeading
            className="text-center text-4xl font-extrabold text-gray-800"
            level={2}
          >
            Послуги
          </CurlyBraceHeading>
          <div className="mt-12 grid gap-8 sm:gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {companyServices.map((item) => (
              <ServicesSectionItem data={item} key={item.id} />
            ))}
            <div className="flex flex-col gap-6 rounded-lg border border-gray-300 bg-white p-6 shadow-sm transition-transform duration-300 hover:scale-105 hover:shadow-lg">
              <p className="text-gray-600">
                На території є ресторан, де наш шеф-кухар запропонує страви
                різних кухонь світу, що подарують незабутні гастрономічні
                враження.
              </p>
              <a
                className={buttonCircleVariants({
                  circleColor: 'accent',
                  circleSize: 'md',
                  circleSpacing: 'default',
                })}
                href="https://logindariy.choiceqr.com/online-menu"
                rel="noopener noreferrer"
                target="_blank"
              >
                Меню
              </a>
            </div>
            <article className="flex flex-col gap-4 transition-transform duration-300 hover:scale-105">
              <div className="relative h-64 overflow-hidden rounded-lg shadow-md md:h-72 lg:h-80">
                <Image
                  alt="Ресторан"
                  className="transition-transform duration-300 hover:scale-110"
                  layout="fill"
                  objectFit="cover"
                  sizes="(max-width: 1024px) 50vw, 33vw"
                  src="/restaurant.jpg"
                />
              </div>
              <h3 className="text-center text-lg font-semibold uppercase text-gray-800 md:text-left">
                Ресторан
              </h3>
            </article>
            <div className="flex flex-col gap-6 rounded-lg border border-gray-300 bg-white p-6 shadow-sm transition-transform duration-300 hover:scale-105 hover:shadow-lg">
              <h3 className="text-center text-xl font-bold uppercase text-gray-800 md:text-left">
                Унікальний крафтовий магазин
              </h3>
              <p className="text-gray-600">
                В нашому магазині ви знайдете ексклюзивні вироби ручної роботи
                та унікальні подарунки.
              </p>
              <a
                className={buttonCircleVariants({
                  circleColor: 'accent',
                  circleSize: 'md',
                  circleSpacing: 'default',
                })}
                href="https://logindariy.com.ua/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Дізнатися більше
              </a>
            </div>
            <article className="flex flex-col gap-4 transition-transform duration-300 hover:scale-105">
              <div className="relative h-64 overflow-hidden rounded-lg shadow-md md:h-72 lg:h-80">
                <Image
                  alt="Крафтовий магазин"
                  className="transition-transform duration-300 hover:scale-110"
                  layout="fill"
                  objectFit="cover"
                  sizes="(max-width: 1024px) 50vw, 33vw"
                  src="/craft-shop.jpg"
                />
              </div>
              <h3 className="text-center text-lg font-semibold uppercase text-gray-800 md:text-left">
                Крафтовий магазин
              </h3>
            </article>
          </div>
        </section>
      </Content>
    </div>
  )
}

export default ServicesSection
