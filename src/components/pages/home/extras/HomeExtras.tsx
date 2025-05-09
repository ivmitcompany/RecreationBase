import Content from '@/components/ui/Content'
import { cn } from '@/utils'
import Link from 'next/link'
import { FC, HTMLAttributes } from 'react'

interface HomeExtrasProps extends HTMLAttributes<HTMLDivElement> {}

const extras = [
  {
    description:
      'Насолоджуйтесь вишуканою кухнею та атмосферою нашого ресторану.',
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
  {
    description:
      'Відпочиньте в нашому чудовому басейні з прекрасним краєвидом та додатковими послугами.',
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
        />
        <path
          d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
        />
      </svg>
    ),
    img: '/pool12.JPG',
    link: '/pool',
    title: 'Басейн',
  },
]

const HomeExtras: FC<HomeExtrasProps> = ({ className, ...props }) => {
  return (
    <section className={cn('bg-white py-24', className)} {...props}>
      <Content>
        <div className="mb-16 text-center">
          <h2 className="mb-2 font-serif text-4xl font-light tracking-tight md:text-5xl">
            Наші <span className="font-semibold text-accent">послуги</span>
          </h2>
          <div className="mx-auto mb-6 h-0.5 w-16 bg-accent"></div>
          <p className="mx-auto max-w-2xl text-lg text-neutral-600">
            Ми пропонуємо різноманітні послуги для вашого комфорту та
            задоволення під час перебування в Logindariy.
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

export default HomeExtras
