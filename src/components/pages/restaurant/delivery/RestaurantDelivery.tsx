import Content from '@/components/ui/Content'
import { cn } from '@/utils'
import Image from 'next/image'
import { FC, HTMLAttributes } from 'react'

interface RestaurantDeliveryProps extends HTMLAttributes<HTMLDivElement> {}

const RestaurantDelivery: FC<RestaurantDeliveryProps> = ({
  className,
  ...props
}) => {
  return (
    <section className={cn('bg-neutral-50 py-20', className)} {...props}>
      <Content>
        <div className="flex flex-col items-center gap-10 md:flex-row">
          <div className="relative flex-1">
            <div className="relative h-[420px] overflow-hidden rounded-xl shadow-lg">
              <video
                autoPlay
                className="h-full w-full object-cover"
                loop
                muted
                playsInline
              >
                <source
                  src="https://res.cloudinary.com/db8gndp2b/video/upload/v1742416010/IMG_8716_y2yc12.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
            <div className="absolute -bottom-6 -right-6 rounded-full bg-accent p-5 text-white shadow-lg">
              <svg
                className="h-12 w-12"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                />
              </svg>
            </div>
          </div>

          <div className="flex-1">
            <h2 className="mb-4 text-4xl font-light tracking-tight">
              Доставка страв додому
            </h2>
            <div className="mb-6 h-0.5 w-20 bg-accent"></div>

            <p className="mb-6 text-lg text-neutral-700">
              Насолоджуйтеся вишуканими стравами від шеф-кухаря Logindariy, не
              виходячи з дому. Ми доставимо ваше замовлення швидко та з
              дотриманням усіх стандартів якості.
            </p>

            <ul className="mb-8 space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-xl text-accent">✓</span>
                <span>Рокосово безкоштовна доставка від 500грн</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-xl text-accent">✓</span>
                <span>
                  Хуст, Копаня та Широке безкоштовна доставка від 1000грн
                </span>
              </li>
            </ul>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                className="flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 text-center font-medium text-white transition-colors hover:bg-accent"
                href="tel:+380686451595"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                  />
                </svg>
                Замовити по телефону
              </a>
              <a
                className="flex items-center justify-center gap-2 rounded-lg border border-accent px-6 py-3 text-center font-medium text-accent transition-colors hover:bg-accent hover:text-white"
                href="https://logindariy.choiceqr.com/online-menu"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                  />
                </svg>
                Переглянути меню
              </a>
            </div>
          </div>
        </div>
      </Content>
    </section>
  )
}

export default RestaurantDelivery
