'use client'

import FontAccentSpan from '@/components/ui/FontAccentSpan'
import { Icons } from '@/components/ui/Icons'
import ImagePlaceholder from '@/components/ui/ImagePlaceholder'
import ImageSlider from '@/components/ui/ImageSlider'
import Modal from '@/components/ui/Modal'
import IconButton from '@/components/ui/button/IconButton'
import { arrayIsNotEmpty, cn, getArrayLength } from '@/utils'
import Image from 'next/image'
import { title } from 'process'
import { FC, HTMLAttributes, useState } from 'react'

import { Apartment } from '../ApartmentsSection'

interface ApartmentDetailsProps extends HTMLAttributes<HTMLDivElement> {
  data: Apartment
}

const ApartmentDetails: FC<ApartmentDetailsProps> = ({
  className,
  data: { additions, images, name, price },
  ...props
}) => {
  const [imagesModalIsOpen, setImagesModalIsOpen] = useState<boolean>(false)
  const imagesArePresent = arrayIsNotEmpty(images)
  const imagesCount = getArrayLength(images)
  const additionsArePresent = arrayIsNotEmpty(additions)

  const openImagesModal = () => {
    setImagesModalIsOpen(true)
  }

  const closeImagesModal = () => {
    setImagesModalIsOpen(false)
  }

  return (
    <>
      <article
        className={cn('flex flex-col gap-10 md:flex-row md:gap-5', className)}
        {...props}
      >
        <div className="relative aspect-square w-full md:aspect-[0.68/1] lg:aspect-[0.9/1] xl:aspect-[1.02/1]">
          {imagesArePresent ? (
            <>
              <Image
                alt={title}
                className="object-cover object-center"
                fill
                quality={80}
                sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 100vw"
                src={images![0].src}
              />
              {imagesCount > 1 && (
                <IconButton
                  Icon={Icons.photos}
                  className="absolute bottom-5 right-5 md:left-5 md:right-auto"
                  label="Переглянути більше фото"
                  onClick={openImagesModal}
                />
              )}
            </>
          ) : (
            <ImagePlaceholder className="h-full w-full" />
          )}
        </div>
        <div className="flex flex-col md:overflow-y-auto">
          <h3 className="text-[1.875rem] font-light uppercase leading-[1.35]">
            {name}
          </h3>
          <p className="flex items-baseline gap-3 md:items-center">
            <FontAccentSpan className="leading-[0.5] text-accent" size="xs">
              {price}
            </FontAccentSpan>
            грн за годину
          </p>
          <div className="mt-[3.75rem] space-y-5 md:mt-16">
            {additionsArePresent && (
              <div className="space-y-10">
                <h4 className="md:text-lg">
                  <span className="text-lg uppercase md:text-xl" role="text">
                    Зручності в номері
                  </span>{' '}
                  (на 2 особи)
                </h4>
                <ul className="flex flex-wrap gap-2.5">
                  {additions!.map((addition, index) => (
                    <li
                      className="w-fit rounded-3xl border border-accent px-4 py-1 lowercase"
                      key={index + 1}
                    >
                      {addition}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div className="space-y-[0.3125rem] md:space-y-2.5">
              <p>
                у вартість входять сніданки та можливість користуватись катком
                взиму й басейном влітку
              </p>
              <p>на території комплексу також є парковка</p>
            </div>
          </div>
          <a
            className="mt-[3.75rem] block pt-5 text-end text-lg uppercase transition-colors hover:text-accent md:mt-auto"
            href="tel:380678279007"
          >
            бронювання <span className="text-accent">&#91;</span>+380678279007
            <span className="text-accent">&#93;</span>
          </a>
        </div>
      </article>
      {imagesArePresent && imagesCount > 1 && (
        <Modal
          isOpen={imagesModalIsOpen}
          onClose={closeImagesModal}
          size="screen"
        >
          <ImageSlider className="h-full w-full" images={images!} />
        </Modal>
      )}
    </>
  )
}

export default ApartmentDetails
