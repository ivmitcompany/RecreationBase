'use client'

import FontAccentSpan from '@/components/ui/FontAccentSpan'
import ImagePlaceholder from '@/components/ui/ImagePlaceholder'
import Modal from '@/components/ui/Modal'
import Button from '@/components/ui/button/Button'
import { arrayIsNotEmpty, cn } from '@/utils'
import Image from 'next/image'
import { FC, HTMLAttributes, useState } from 'react'

import ApartmentDetails from './ApartmentDetails'
import { Apartment } from './ApartmentsSection'

interface ApartmentsSectionItemProps extends HTMLAttributes<HTMLDivElement> {
  data: Apartment
}

const ApartmentsSectionItem: FC<ApartmentsSectionItemProps> = ({
  className,
  data,
  ...props
}) => {
  const { images, name } = data
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
        className={cn('group/item md:even:mt-[11.25rem]', className)}
        {...props}
      >
        <h3 className="text-[2.5rem] font-light uppercase leading-[1.35] first-letter:text-accent group-even/item:text-end xl:text-[3.75rem] xl:leading-[1.4]">
          {name}
        </h3>
        <div className="relative mt-2.5 aspect-square">
          {imagesArePresent ? (
            <>
              <Image
                alt={name}
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
        </div>
        <Button className="ml-auto mt-2.5 md:mt-5" onClick={openDetailsModal}>
          Детальніш
          <FontAccentSpan className="ml-[0.0625rem] uppercase" size="xs">
            e
          </FontAccentSpan>
        </Button>
      </article>
      <Modal isOpen={detailsModalIsOpen} onClose={closeDetailsModal}>
        <ApartmentDetails className="w-full md:h-full" data={data} />
      </Modal>
    </>
  )
}

export default ApartmentsSectionItem
