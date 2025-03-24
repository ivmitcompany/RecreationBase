'use client'

import Gallery from '@/components/ui/Gallery'
import { cn } from '@/utils'
import { FC, HTMLAttributes } from 'react'

interface PoolGalleryProps extends HTMLAttributes<HTMLDivElement> {}

const galleryImages = [
  { alt: 'Фото басейну', id: 1, src: '/pool10.jpg' },
  { alt: 'Фото басейну', id: 2, src: '/pool2.jpg' },
  { alt: 'Фото басейну', id: 3, src: '/pool3.jpg' },
  { alt: 'Зона відпочинку', id: 4, src: '/pool4.jpg' },
  { alt: 'Фото басейну', id: 5, src: '/pool5.jpg' },
  { alt: 'Фото басейну', id: 6, src: '/pool6.jpg' },
  { alt: 'Фото басейну', id: 7, src: '/pool7.jpg' },
  { alt: 'Фото басейну', id: 8, src: '/pool8.jpg' },
  { alt: 'Фото басейну', id: 9, src: '/pool9.jpg' },
  { alt: 'Фото басейну', id: 10, src: '/pool.JPEG' },
  { alt: 'Фото басейну', id: 11, src: '/pool11.JPG' },
  { alt: 'Фото басейну', id: 12, src: '/pool12.JPG' },
  { alt: 'Фото басейну', id: 13, src: '/pool13.JPG' },
]

const PoolGallery: FC<PoolGalleryProps> = ({ className, ...props }) => {
  return (
    <Gallery
      accentColor="blue"
      accentTitle="басейну"
      className={cn(className)}
      description="Зона релаксу та відпочинку для наших гостей"
      images={galleryImages}
      title="Фотогалерея"
      {...props}
    />
  )
}

export default PoolGallery
