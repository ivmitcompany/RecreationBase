import Content from '@/components/ui/Content'
import { cn } from '@/utils'
import { FC, HTMLAttributes } from 'react'

interface PoolRestaurantProps extends HTMLAttributes<HTMLDivElement> {}

const PoolRestaurant: FC<PoolRestaurantProps> = ({ className, ...props }) => {
  return (
    <section className={cn('', className)} {...props}>
      <Content>
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-bold md:text-4xl">
              Ресторан та лаунж-тераса біля басейну
            </h2>
            <p className="mt-4 text-gray-600">
              💦 Місце, де поєднується сонце, вода та розслаблення
            </p>

            <div className="mt-6 space-y-3">
              <div className="flex items-start space-x-4">
                <p>✔</p>
                <p>
                  Приватна зона для гостей, які хочуть насолодитися коктейлями
                  та закусками біля води.
                </p>
              </div>
              <div className="flex items-start space-x-4">
                <p>✔</p>
                <p>Бар із авторськими напоями та легкими закусками.</p>
              </div>
              <div className="flex items-start space-x-4">
                <p>✔</p>
                <p>Зручні шезлонги та балдахіни для максимального комфорту.</p>
              </div>
            </div>
            <div className="mt-5">
              <p>
                🎶 Фішка: У вечірній час тут грає жива музика або DJ-сети, що
                додає особливої атмосфери.
              </p>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="overflow-hidden shadow-xl">
              <img
                alt="Ресторан біля басейну"
                className="h-[73vh] w-full object-cover"
                src="/pool13.JPG"
              />
            </div>
          </div>
        </div>
      </Content>
    </section>
  )
}

export default PoolRestaurant
