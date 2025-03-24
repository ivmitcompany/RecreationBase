'use client'

import Gallery from '@/components/ui/Gallery'
import { cn } from '@/utils'
import { FC, HTMLAttributes } from 'react'

interface RestaurantGalleryProps extends HTMLAttributes<HTMLDivElement> {}

const galleryImages = [
  {
    alt: "Інтер'єр ресторану",
    id: 1,
    src: 'https://res.cloudinary.com/db8gndp2b/image/upload/v1735749956/media/images/about_app/nature_14_cyzupm_nabhow.webp',
  },
  {
    alt: 'Вишукані страви',
    id: 2,
    src: 'https://res.cloudinary.com/db8gndp2b/image/upload/v1712325035/media/images/meal_images/%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%BD%D1%8F_viber_2024-03-29_21-14-57-659_pkpti4.jpg',
  },
  {
    alt: 'Вишукані страви',
    id: 3,
    src: 'https://res.cloudinary.com/db8gndp2b/image/upload/v1714071845/media/images/meal_images/ML0A3729_wcp1ic.jpg',
  },
  {
    alt: 'Вишукані страви',
    id: 4,
    src: 'https://res.cloudinary.com/db8gndp2b/image/upload/v1711808846/media/images/meal_images/%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%BD%D1%8F_viber_2024-03-30_15-48-33-475_tbsndv.jpg',
  },
  {
    alt: 'Вишукані страви',
    id: 5,
    src: 'https://res.cloudinary.com/db8gndp2b/image/upload/v1711805454/media/images/meal_images/%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%BD%D1%8F_viber_2024-03-29_21-22-59-493_blwy4i.jpg',
  },
  {
    alt: 'День народження',
    id: 6,
    src: 'https://res.cloudinary.com/db8gndp2b/image/upload/v1735937270/media/images/about_app/4_smemz1.webp',
  },
  {
    alt: 'Романтична вечеря',
    id: 7,
    src: 'https://res.cloudinary.com/db8gndp2b/image/upload/v1741808423/%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%BD%D1%8F_viber_2024-03-25_17-16-22-390_mgfnsz.jpg',
  },
  {
    alt: 'Бенкетний зал',
    id: 8,
    src: 'https://res.cloudinary.com/db8gndp2b/image/upload/v1735753686/media/images/about_app/1711378180916534_wqltxt_mreiul.webp',
  },
  {
    alt: "Інтер'єр ресторану",
    id: 9,
    src: 'https://res.cloudinary.com/db8gndp2b/image/upload/v1741810833/photo_2025-03-12_22.19.24_uia6v0.jpg',
  },
  {
    alt: "Інтер'єр ресторану",
    id: 10,
    src: 'https://res.cloudinary.com/db8gndp2b/image/upload/v1735749689/media/images/about_app/nature_4_hsiiiy_fiyihz.webp',
  },
  {
    alt: 'Святкування подій',
    id: 11,
    src: 'https://res.cloudinary.com/db8gndp2b/image/upload/v1735937274/media/images/about_app/1_e9o31i.webp',
  },
  {
    alt: 'Корпоративи та вечірки',
    id: 12,
    src: 'https://res.cloudinary.com/db8gndp2b/image/upload/v1735937268/media/images/about_app/6_sx9wqw.webp',
  },
  {
    alt: 'Весілля та урочистості',
    id: 13,
    src: 'https://res.cloudinary.com/db8gndp2b/image/upload/v1735937265/media/images/about_app/10_zeoudp.webp',
  },
  {
    alt: 'Вишукані страви',
    id: 14,
    src: 'https://res.cloudinary.com/db8gndp2b/image/upload/v1735753171/media/images/about_app/%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%BD%D1%8F_viber_2024-03-25_17-00-03-552_u3xs5g_lwrqwk.webp',
  },
  {
    alt: 'Фірмові страви',
    id: 15,
    src: 'https://res.cloudinary.com/db8gndp2b/image/upload/v1735753166/media/images/about_app/%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%BD%D1%8F_viber_2024-03-25_17-00-06-203_dqp28c_m6mwsa.webp',
  },
  {
    alt: 'Десерти',
    id: 16,
    src: 'https://res.cloudinary.com/db8gndp2b/image/upload/v1735753160/media/images/about_app/%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%BD%D1%8F_viber_2024-03-25_17-06-45-734_dndm5a_osz2t4.webp',
  },
]

const RestaurantGallery: FC<RestaurantGalleryProps> = ({
  className,
  ...props
}) => {
  return (
    <Gallery
      accentColor="amber"
      accentTitle="ресторану"
      className={cn(className)}
      description="Відчуйте атмосферу нашого ресторану через фотографії"
      images={galleryImages}
      title="Фотогалерея"
      {...props}
    />
  )
}

export default RestaurantGallery
