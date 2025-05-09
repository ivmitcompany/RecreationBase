import Content from '@/components/ui/Content'
import { cn } from '@/utils'
import Image from 'next/image'
import { FC, HTMLAttributes } from 'react'

interface RestaurantCateringProps extends HTMLAttributes<HTMLDivElement> {}

const cateringOptions = [
  {
    description:
      'Повне обслуговування офіціантами для вашого святкового заходу з індивідуальним підходом до кожного гостя.',
    icon: '🍽️',
    image:
      'https://res.cloudinary.com/dwocqwqdo/image/upload/v1746824501/photo_2025-05-09_23.58.14_eqlftl.jpg', // Add appropriate image path
    title: 'Банкет',
  },
  {
    description:
      'Самообслуговування з широким асортиментом вишуканих закусок та напоїв для неформальних заходів.',
    icon: '🥂',
    image:
      'https://res.cloudinary.com/dwocqwqdo/image/upload/v1746824051/photo_2025-05-09_23.52.57_egmoyf.jpg', // Add appropriate image path
    title: 'Фуршет без обслуговування',
  },
  {
    description:
      'Елегантне обслуговування вашого фуршету нашими професійними офіціантами для особливих подій.',
    icon: '👨‍🍳',
    image:
      'https://res.cloudinary.com/dwocqwqdo/image/upload/v1746824052/photo_2025-05-09_23.53.07_arf47m.jpg', // Add appropriate image path
    title: 'Фуршет з обслуговуванням',
  },
]

const RestaurantCatering: FC<RestaurantCateringProps> = ({
  className,
  ...props
}) => {
  return (
    <section
      className={cn(
        'relative overflow-hidden py-24 text-white md:max-h-screen',
        className
      )}
      {...props}
    >
      {/* Video background with overlay */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          className="absolute inset-0 h-full w-full object-cover"
          loop
          muted
          playsInline
        >
          <source
            src="https://res.cloudinary.com/dwocqwqdo/video/upload/v1746823103/IMG_1998_lm3gja.mov"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80" />
      </div>

      <Content className="relative z-10">
        <div className="mb-14 text-center">
          <h2 className="mb-3 font-serif text-4xl font-light tracking-tight">
            Виїзний банкет
          </h2>
          <div className="my-2 flex flex-col items-center justify-center gap-2 md:flex-row">
            <a
              className="inline-flex items-center rounded-full bg-accent px-4 py-1 font-medium text-white transition-colors duration-300 hover:bg-accent"
              href="tel:+38067279007"
            >
              <svg
                className="mr-1 h-4 w-4"
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
              +38 067 27 90 07
            </a>
          </div>
          <p className="mx-auto max-w-2xl text-lg text-white/80">
            Обирайте ідеальний формат для вашого заходу. Наша команда
            професіоналів забезпечить бездоганне обслуговування та вишукані
            страви для будь-якої події. Отримайте знижку 20% при замовленні від
            5 осіб!
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {cateringOptions.map((option, index) => (
            <div
              className="group relative overflow-hidden rounded-xl bg-black/30 backdrop-blur-sm transition-transform duration-300 hover:-translate-y-2"
              key={index}
            >
              {/* Image background */}
              <div className="relative h-48 overflow-hidden">
                <img
                  alt={option.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  src={option.image}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

                {/* Icon badge */}
                <div className="absolute right-4 top-4 transform rounded-full bg-accent p-3 shadow-lg transition-transform duration-300 group-hover:scale-110">
                  <span className="text-2xl">{option.icon}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="mb-3 text-xl font-semibold text-accent">
                  {option.title}
                </h3>
                <p className="text-sm text-white/80">{option.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Content>
    </section>
  )
}

export default RestaurantCatering
