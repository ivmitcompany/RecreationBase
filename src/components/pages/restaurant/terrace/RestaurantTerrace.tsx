import Content from '@/components/ui/Content'
import { Icons } from '@/components/ui/Icons'
import { cn } from '@/utils'
import Image from 'next/image'
import { FC, HTMLAttributes } from 'react'

interface RestaurantTerraceProps extends HTMLAttributes<HTMLDivElement> {}

const terraceFeatures = [
  {
    features: [
      'Велика відкрита зона з комфортними лаунж-зонами',
      'Вигляд на мальовничі краєвиди, що створює відчуття повного релаксу',
      'Ідеальне місце для сніданків на свіжому повітрі, романтичних вечерь та відпочинку з друзями',
      'Стильні меблі, жива зелень, вечірнє підсвічування для особливої атмосфери',
    ],
    image:
      'https://res.cloudinary.com/db8gndp2b/image/upload/v1742577743/IMG_7055_xlljou.jpg',
    tagline: 'Де простір, що надихає',
    title: 'Панорамна тераса з видом на природу',
  },
  {
    features: [
      'Приватна зона для гостей, які хочуть насолодитися коктейлями та закусками біля води',
      'Бар із авторськими напоями та легкими закусками',
      'Зручні шезлонги та балдахіни для максимального комфорту',
      'У вечірній час тут грає жива музика або DJ-сети, що додає особливої атмосфери',
    ],
    image:
      'https://res.cloudinary.com/db8gndp2b/image/upload/v1735750533/media/images/about_app/pool_1_guqemq_g1crpq.webp',
    tagline: 'Місце, де поєднується сонце, вода та розслаблення',
    title: 'Лаунж-тераса біля басейну',
  },
]

const RestaurantTerrace: FC<RestaurantTerraceProps> = ({
  className,
  ...props
}) => {
  return (
    <section className={cn('py-20', className)} {...props}>
      <Content>
        <div className="mb-16 text-center">
          <h2 className="mb-3 text-4xl font-light tracking-tight">
            Тераси та зали
          </h2>
        </div>

        <div className="flex flex-col gap-20">
          <div>
            <h3 className="mb-10 flex items-center gap-3 text-2xl font-light">
              Відкриті тераси <Icons.logo />
            </h3>

            {terraceFeatures.map((terrace, index) => (
              <div
                className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} mb-16 gap-8`}
                key={index}
              >
                <div className="flex-1">
                  <div className="relative h-[400px] w-full overflow-hidden rounded-lg shadow-lg">
                    <Image
                      alt={terrace.title}
                      className="object-cover transition-transform duration-700 hover:scale-105"
                      fill
                      src={terrace.image}
                    />
                  </div>
                </div>
                <div className="flex flex-1 flex-col justify-center">
                  <h4 className="mb-2 text-2xl font-medium">{terrace.title}</h4>
                  <p className="mb-6 text-lg text-accent">{terrace.tagline}</p>

                  <ul className="space-y-3">
                    {terrace.features.map((feature, fIndex) => (
                      <li className="flex items-start gap-2" key={fIndex}>
                        <span className="mt-1 text-accent">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div>
            <h3 className="mb-10 flex items-center gap-3 text-2xl font-light">
              Вишукані зали <Icons.logo />
            </h3>

            <div className="grid gap-8 md:grid-cols-2">
              <div className="overflow-hidden rounded-lg bg-white shadow-lg transition-shadow hover:shadow-xl">
                <div className="relative h-96 w-full">
                  <Image
                    alt="Бенкетний зал"
                    className="object-cover"
                    fill
                    src="https://res.cloudinary.com/db8gndp2b/image/upload/v1735753693/media/images/about_app/1711101169518693_n6z7dk_p71i1q.webp"
                  />
                </div>
                <div className="p-6">
                  <h4 className="mb-2 text-xl font-medium">Бенкетний зал</h4>
                  <p className="mb-4 text-accent">
                    Ідеальне місце для ваших подій
                  </p>
                  <ul className="space-y-2 text-neutral-700">
                    <li className="flex items-start gap-2">
                      <span className="text-accent">•</span>
                      <span>
                        Просторий зал з розкішним дизайном, високими стелями та
                        стильним інтер&apos;єром
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent">•</span>
                      <span>
                        Можливість проведення весіль, банкетів, корпоративів та
                        конференцій
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent">•</span>
                      <span>
                        Авторське банкетне меню від шеф-кухаря, яке можна
                        адаптувати під захід
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="overflow-hidden rounded-lg bg-white shadow-lg transition-shadow hover:shadow-xl">
                <div className="relative h-96 w-full">
                  <Image
                    alt="Камінна зала"
                    className="object-cover"
                    fill
                    src="https://res.cloudinary.com/db8gndp2b/image/upload/v1742577744/%D1%82.%D0%BC_gqubgk.jpg"
                  />
                </div>
                <div className="p-6">
                  <h4 className="mb-2 text-xl font-medium">Камінна зала</h4>
                  <p className="mb-4 text-accent">
                    Нестандартний простір для креативних подій
                  </p>
                  <ul className="space-y-2 text-neutral-700">
                    <li className="flex items-start gap-2">
                      <span className="text-accent">•</span>
                      <span>
                        Локація для виставок, лекцій, майстер-класів та
                        фотосесій
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent">•</span>
                      <span>
                        Унікальний стильний інтер&apos;єр із сучасним дизайном
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent">•</span>
                      <span>Творча атмосфера для натхнення та розвитку</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Content>
    </section>
  )
}

export default RestaurantTerrace
