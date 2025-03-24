import Content from '@/components/ui/Content'
import { cn } from '@/utils'
import Image from 'next/image'
import { FC, HTMLAttributes } from 'react'

interface RestaurantMenuProps extends HTMLAttributes<HTMLDivElement> {}

const RestaurantMenu: FC<RestaurantMenuProps> = ({ className, ...props }) => {
  return (
    <section className={cn('bg-neutral-50 py-24', className)} {...props}>
      <Content>
        <div className="flex flex-col items-center md:flex-row">
          {/* Left side - Text content */}
          <div className="mb-12 w-full md:mb-0 md:w-1/2 md:pr-12">
            <div className="mx-auto max-w-md md:mx-0">
              <h2 className="mb-2 font-serif text-4xl font-light tracking-tight md:text-5xl">
                Наше меню
              </h2>
              <div className="mb-6 h-0.5 w-16 bg-accent"></div>
              <p className="mb-8 text-lg text-neutral-600">
                Відкрийте для себе різноманіття смаків у нашому ресторані. Від
                класичних страв до авторських кулінарних шедеврів, створених
                нашими шеф-кухарями.
              </p>
              <a
                className="inline-flex items-center justify-center rounded-full bg-accent px-8 py-3 font-medium
                text-white transition-colors duration-300 hover:bg-accent"
                href="https://logindariy.choiceqr.com/online-menu"
              >
                Переглянути меню
                <svg
                  className="ml-2 h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="w-full md:w-1/2">
            <div className="relative">
              <div className="relative overflow-hidden rounded-lg shadow-xl">
                <div className="absolute -right-6 -top-6 h-32 w-32 rounded-full bg-amber-100 opacity-70"></div>
                <div className="absolute -bottom-4 -left-4 h-24 w-24 rounded-full bg-amber-200 opacity-70"></div>
                <div className="relative z-10 aspect-[4/3] w-full overflow-hidden rounded-lg">
                  <video
                    autoPlay
                    className="absolute inset-0 h-full w-full object-cover"
                    loop
                    muted
                    playsInline
                  >
                    <source
                      src="https://res.cloudinary.com/db8gndp2b/video/upload/v1742415609/IMG_1998_y4mldq.mov"
                      type="video/mp4"
                    />
                  </video>
                </div>
                <div className="absolute inset-0 z-20 rounded-lg bg-gradient-to-tr from-accent/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </Content>
    </section>
  )
}

export default RestaurantMenu
