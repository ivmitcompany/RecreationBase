import Content from '@/components/ui/Content'
import { cn } from '@/utils'
import { FC, HTMLAttributes } from 'react'

interface PoolFeaturesProps extends HTMLAttributes<HTMLDivElement> {}

const PoolFeatures: FC<PoolFeaturesProps> = ({ className, ...props }) => {
  return (
    <div className={className} {...props}>
      <section className="flex items-center bg-white md:h-[100vh]">
        <Content className="text-center">
          <h2 className="text-4xl font-bold leading-tight">
            Два басейни, два світи відпочинку
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-500">
            Розкіш і комфорт в кожному моменті. Відпочивайте по-справжньому в
            наших басейних, що створені для вас.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-16 sm:grid-cols-2">
            {/* Перша картка */}
            <div className="group relative overflow-hidden shadow-lg">
              <img
                alt="Основний басейн"
                className="h-[63vh] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                src="/pool5.jpg"
              />
            </div>

            {/* Друга картка */}
            <div className="group relative overflow-hidden shadow-lg">
              <img
                alt="Басейн для релаксу"
                className="h-[63vh] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                src="/pool12.JPG"
              />
            </div>
          </div>

          <div className="mt-8">
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Насолоджуйтеся кожною хвилиною відпочинку в Logindariy. Наші басейни
              – це гармонія стилю та зручності.
            </p>
          </div>
        </Content>
      </section>

      <section className="flex items-center bg-gray-50 py-20">
        <Content className="text-center">
          <h2 className="text-4xl font-bold leading-tight">
            Концерти біля басейну
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-500">
            Насолоджуйтесь живими виступами та музикою в атмосфері відпочинку
          </p>

          <div className="mt-12">
            <div className="group relative overflow-hidden rounded-lg shadow-lg">
              <video
                autoPlay
                className="h-[600px] w-full object-cover"
                loop
                muted
                playsInline
                poster="https://res.cloudinary.com/db8gndp2b/image/upload/v1735750533/media/images/about_app/pool_1_guqemq_g1crpq.webp"
              >
                <source src="https://res.cloudinary.com/db8gndp2b/video/upload/v1742416821/IMG_7942_gfp10r.mp4" type="video/mp4" />
                Ваш браузер не підтримує відео тег.
              </video>
            </div>
          </div>

          <div className="mt-8">
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Регулярні концерти та музичні вечори створюють особливу атмосферу
              відпочинку. Насолоджуйтесь музикою та відпочинком одночасно.
            </p>
          </div>
        </Content>
      </section>
    </div>
  )
}

export default PoolFeatures
