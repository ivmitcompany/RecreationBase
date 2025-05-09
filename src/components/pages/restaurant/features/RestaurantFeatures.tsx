import Content from '@/components/ui/Content'
import { cn } from '@/utils'
import Image from 'next/image'
import { FC, HTMLAttributes } from 'react'

interface RestaurantFeaturesProps extends HTMLAttributes<HTMLDivElement> {}

const features = [
  {
    description:
      'Весілля, дні народження, корпоративи та інші особливі моменти в елегантній атмосфері.',
    icon: '🎉',
    image:
      'https://res.cloudinary.com/db8gndp2b/image/upload/v1735937269/media/images/about_app/5_mzmer3.webp',
    title: 'Святкування подій',
  },
  {
    description:
      'Комфортне місце для святкування дитячих подій з професійними аніматорами та спеціальним меню.',
    icon: '👶',
    image:
      'https://res.cloudinary.com/db8gndp2b/image/upload/v1737215313/media/images/about_app/IMG_1446_thmz7h.jpg',
    title: 'Дитяча зона',
  },
  {
    description:
      'Незабутні вечері на нашій терасі під зоряним небом, ідеальне місце для освідчень та особливих моментів.',
    icon: '❤️',
    image:
      'https://res.cloudinary.com/db8gndp2b/image/upload/v1735937268/media/images/about_app/6_sx9wqw.webp',
    title: 'Романтичні вечори',
  },
]

const RestaurantFeatures: FC<RestaurantFeaturesProps> = ({
  className,
  ...props
}) => {
  return (
    <section className={cn('bg-white py-20', className)} {...props}>
      <Content>
        <div className="mb-16 text-center">
          <h2 className="mb-3 text-4xl font-light tracking-tight">
            Особливості нашого ресторану
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <div
              className="group overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl"
              key={index}
            >
              <div className="relative h-60 w-full overflow-hidden">
                <Image
                  alt={feature.title}
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  fill
                  src={feature.image}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <span className="absolute bottom-4 right-4 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-4xl backdrop-blur-md">
                  {feature.icon}
                </span>
              </div>
              <div className="p-6">
                <h3 className="mb-3 text-xl font-medium">{feature.title}</h3>
                <p className="text-neutral-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Концертний блок */}
        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            <div className="relative aspect-[9/16] w-full max-w-md mx-auto overflow-hidden rounded-2xl shadow-xl">
              <video
                autoPlay
                className="h-full w-full object-cover"
                loop
                muted
                playsInline
              >
                <source
                  src="https://res.cloudinary.com/dwocqwqdo/video/upload/v1746823734/IMG_7767_n4nb1v.mov"
                  type="video/mp4"
                />
              </video>
            </div>
            <div className="space-y-6">
              <h3 className="text-3xl font-light">
                Концерти
              </h3>
              <p className="text-lg text-neutral-600">
                Наш ресторан регулярно стає місцем для незабутніх музичних вечорів. 
                Ми організовуємо концерти, де талановиті артисти 
                створюють особливу атмосферу.
              </p>
            </div>
          </div>
        </div>
      </Content>
    </section>
  )
}

export default RestaurantFeatures
