'use client'

import Gallery from '@/components/ui/Gallery'
import { cn } from '@/utils'
import { FC, HTMLAttributes } from 'react'

interface RestaurantGalleryProps extends HTMLAttributes<HTMLDivElement> {}

const galleryImages = [
  {
    alt: '',
    id: 1,
    src: 'https://res.cloudinary.com/dwocqwqdo/image/upload/v1746825581/photo_2025-05-10_00.18.50_ymvnf2.jpg',
  },
  {
    alt: '',
    id: 2,
    src: 'https://res.cloudinary.com/dwocqwqdo/image/upload/v1746825581/photo_2025-05-10_00.18.54_ustrtp.jpg',
  },
  {
    alt: '',
    id: 3,
    src: 'https://res.cloudinary.com/dwocqwqdo/image/upload/v1746825582/photo_2025-05-10_00.18.57_jsozyb.jpg',
  },
  {
    alt: '',
    id: 4,
    src: 'https://res.cloudinary.com/dwocqwqdo/image/upload/v1746825583/photo_2025-05-10_00.19.06_ookxvu.jpg',
  },
  {
    alt: '',
    id: 5,
    src: 'https://res.cloudinary.com/dwocqwqdo/image/upload/v1746825584/photo_2025-05-10_00.19.09_slk95e.jpg',
  },
  {
    alt: '',
    id: 6,
    src: 'https://res.cloudinary.com/dwocqwqdo/image/upload/v1746825590/IMG_5540_dfrmdf.jpg',
  },
  {
    alt: '',
    id: 7,
    src: 'https://res.cloudinary.com/dwocqwqdo/image/upload/v1746825591/IMG_5544_gt222y.jpg',
  },
  {
    alt: '',
    id: 8,
    src: 'https://res.cloudinary.com/dwocqwqdo/image/upload/v1746825592/photo_2025-05-10_00.18.41_khjizm.jpg',
  },
  {
    alt: '',
    id: 9,
    src: 'https://res.cloudinary.com/dwocqwqdo/image/upload/v1746825593/photo_2025-05-10_00.18.44_qrcnvc.jpg',
  },
  {
    alt: '',
    id: 10,
    src: 'https://res.cloudinary.com/dwocqwqdo/image/upload/v1746825746/photo_2025-05-10_00.21.53_lyevec.jpg',
  },
  {
    alt: '',
    id: 11,
    src: 'https://res.cloudinary.com/dwocqwqdo/image/upload/v1746825747/photo_2025-05-10_00.21.59_bxu3qh.jpg',
  },
  {
    alt: '',
    id: 12,
    src: 'https://res.cloudinary.com/dwocqwqdo/image/upload/v1746825748/photo_2025-05-10_00.22.05_qluv9n.jpg',
  },
  {
    alt: '',
    id: 13,
    src: 'https://res.cloudinary.com/dwocqwqdo/image/upload/v1746825750/photo_2025-05-10_00.22.09_fxxmuz.jpg',
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
