import Content from '@/components/ui/Content'
import { cn } from '@/utils'
import Link from 'next/link'
import { FC, HTMLAttributes } from 'react'

interface PoolExtrasProps extends HTMLAttributes<HTMLDivElement> {}

const extras = [
  {
    description:
      'Розкішні номери з усіма зручностями для незабутнього відпочинку.',
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
        />
      </svg>
    ),
    img: '/modul.JPEG',
    link: '/',
    title: 'Апартаменти',
  },
  {
    description:
      'Насолоджуйтесь освіжаючими напоями та легкими закусками не виходячи з води.',
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
        />
      </svg>
    ),
    img: 'https://res.cloudinary.com/dwocqwqdo/image/upload/v1746822767/photo_2025-05-09_23.28.54_ughlpu.jpg',
    link: '/restaurant',
    title: 'Ресторан',
  },
]

const PoolExtras: FC<PoolExtrasProps> = ({ className, ...props }) => {
  return (
    <section className={cn('bg-white py-24', className)} {...props}>
      <Content>
        <div className="mb-16 text-center">
          <h2 className="mb-2 font-serif text-4xl font-light tracking-tight md:text-5xl">
            Послуги басейну
          </h2>
          <div className="mx-auto mb-6 h-0.5 w-16 bg-accent"></div>
          <p className="mx-auto max-w-2xl text-lg text-neutral-600">
            Відпочиньте в нашому чудовому басейні та скористайтеся додатковими
            послугами для повного розслаблення.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {extras.map((extra, index) => (
            <div className="group relative" key={index}>
              <Link
                className="relative block h-80 overflow-hidden rounded-lg shadow-lg"
                href={extra.link}
              >
                <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
                  <img
                    alt={extra.title}
                    className="h-full w-full object-cover"
                    src={extra.img}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                </div>

                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <div className="mb-3 flex items-center">
                    <div className="mr-3 rounded-full bg-accent p-2 text-white">
                      {extra.icon}
                    </div>
                    <h3 className="text-2xl font-semibold text-white">
                      {extra.title}
                    </h3>
                  </div>
                  <p className="text-white/80">{extra.description}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </Content>
    </section>
  )
}

export default PoolExtras
