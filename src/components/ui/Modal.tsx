'use client'

import { cn } from '@/utils'
import { VariantProps, cva } from 'class-variance-authority'
import React, { FC, HTMLAttributes, MouseEvent, useRef } from 'react'

import { Icons } from './Icons'
import Portal from './Portal'
import IconButton from './button/IconButton'

const modalVariants = cva(
  'animate-fadeIn fixed z-[100] top-0 left-0 right-0 bottom-0',
  {
    defaultVariants: { size: 'default' },
    variants: {
      size: {
        card: 'w-screen h-dvh flex items-end md:items-center md:justify-center md:px-[2.8125rem] md:py-8 bg-graphite bg-opacity-50',
        default:
          'w-screen h-dvh md:flex md:items-center md:justify-center md:px-[2.8125rem] md:py-8 lg:py-16 lg:px-[5.625rem] md:bg-graphite md:bg-opacity-50',
        screen: 'w-screen h-dvh',
      },
    },
  }
)

const modalBodyVariants = cva('relative bg-light text-dark', {
  defaultVariants: { size: 'default' },
  variants: {
    size: {
      card: 'w-full h-[70%] md:h-full md:max-h-[36.875rem] md:max-w-[36.875rem] overflow-y-auto',
      default:
        'w-full h-full md:max-h-[43.75rem] md:max-w-[68.75rem] px-5 py-20 md:py-[3.75rem] md:px-[3.25rem]',
      screen:
        'w-full h-full px-5 py-[1.625rem] md:px-[3.75rem] md:py-[2.625rem]',
    },
  },
})

const modalCloseButtonVariants = cva('z-50 absolute  text-accent', {
  defaultVariants: { size: 'default' },
  variants: {
    size: {
      card: 'right-5 top-5',
      default: 'right-5 top-10 md:right-6 md:top-6',
      screen: 'top-10 right-5 md:top-14 md:right-14',
    },
  },
})

interface ModalProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof modalVariants>,
    VariantProps<typeof modalBodyVariants>,
    VariantProps<typeof modalCloseButtonVariants> {
  isOpen: boolean
  onClose: () => void
  wrapperId?: string
}

const Modal: FC<ModalProps> = ({
  children,
  className,
  isOpen,
  onClose,
  size,
  wrapperId,
  ...props
}) => {
  const modalRef = useRef<HTMLDivElement | null>(null)

  const onCloseInternal = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === modalRef.current) {
      onClose()
    }
  }

  return (
    <>
      {isOpen ? (
        <Portal wrapperId={wrapperId}>
          <div
            className={cn(modalVariants({ size }), className)}
            onClick={onCloseInternal}
            ref={modalRef}
            {...props}
          >
            <div className={modalBodyVariants({ size })} id="modal-body">
              <IconButton
                className={modalCloseButtonVariants({ size })}
                icon={Icons.cross}
                label="Закрити модальне вікно"
                onClick={onClose}
              />
              {children}
            </div>
          </div>
        </Portal>
      ) : null}
    </>
  )
}

export default Modal
