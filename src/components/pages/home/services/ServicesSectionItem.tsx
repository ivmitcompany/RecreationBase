'use client'

import FontAccentSpan from '@/components/ui/FontAccentSpan'
import ImagePlaceholder from '@/components/ui/ImagePlaceholder'
import Modal from '@/components/ui/Modal'
import Button from '@/components/ui/button/Button'
import { arrayIsNotEmpty, cn } from '@/utils'
import Image from 'next/image'
import { FC, HTMLAttributes, useState } from 'react'

import ServiceDetails from './ServiceDetails'
import { Service } from './ServicesSection'

interface ServicesSectionItemProps extends HTMLAttributes<HTMLDivElement> {
  data: Service
}

const ServicesSectionItem: FC<ServicesSectionItemProps> = ({
  className,
  data,
  ...props
}) => {
  const { images, title } = data
  const [detailsModalIsOpen, setDetailsModalIsOpen] = useState<boolean>(false)
  const imagesArePresent = arrayIsNotEmpty(images)

  const openDetailsModal = () => {
    setDetailsModalIsOpen(true)
  }

  const closeDetailsModal = () => {
    setDetailsModalIsOpen(false)
  }

  return (
    <>
      <article
        className="group flex flex-col-reverse gap-2.5 md:flex-col"
        {...props}
      >
        <div className="relative aspect-[0.96/1] md:aspect-[0.79/1]">
          {imagesArePresent ? (
            <>
              <Image
                alt={title}
                className="object-cover object-center"
                fill
                quality={80}
                sizes="(max-width: 767px) 100vw, (max-width: 1279) 50vw, 488px"
                src={images![0].src}
              />
            </>
          ) : (
            <ImagePlaceholder className="h-full w-full" />
          )}
          <Button
            buttonSize="sm"
            circleColor={imagesArePresent ? 'light' : 'default'}
            circleSize="xs"
            circleSpacing="tight"
            className={cn(
              'absolute bottom-2.5 uppercase group-odd:left-2.5 group-even:right-2.5 md:bottom-auto md:group-odd:left-auto md:group-odd:right-2.5 md:group-odd:top-2.5 md:group-even:bottom-2.5',
              imagesArePresent ? 'text-light' : 'text-dark'
            )}
            onClick={openDetailsModal}
          >
            Детальніш
            <FontAccentSpan size="xxs">e</FontAccentSpan>
          </Button>
        </div>
        <h3 className="text-lg uppercase md:text-base">{title}</h3>
      </article>
      <Modal isOpen={detailsModalIsOpen} onClose={closeDetailsModal}>
        <ServiceDetails data={data} images={images} previewImgAlt={title} />
      </Modal>
    </>
  )
}

export default ServicesSectionItem
