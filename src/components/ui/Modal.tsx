'use client'

import { cn } from '@/utils'
import { VariantProps, cva } from 'class-variance-authority'
import React, { FC, HTMLAttributes, useEffect, useRef } from 'react'

import { Icons } from './Icons'
import Portal from './Portal'
import IconButton from './button/IconButton'

const modalVariants = cva('fixed z-[100] top-0 left-0 right-0 bottom-0', {
  defaultVariants: { size: 'default' },
  variants: {
    size: {
      default:
        'w-screen h-screen flex items-center justify-center md:py-16 md:px-[5.625rem] md:bg-graphite md:bg-opacity-50',
      screen: 'w-screen h-screen',
    },
  },
})

const modalBodyVariants = cva(
  'relative max-h-full max-w-full bg-light text-dark',
  {
    defaultVariants: { size: 'default' },
    variants: {
      size: {
        default: 'px-5 py-20 md:p-[3.75rem]',
        screen:
          'w-full h-full px-5 py-[1.625rem] md:px-[3.75rem] md:py-[2.625rem]',
      },
    },
  }
)

const modalCloseButtonVariants = cva('z-50 absolute  text-accent', {
  defaultVariants: { size: 'default' },
  variants: {
    size: {
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
  wrapperId: string
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

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('no-scroll')
    }

    return () => {
      document.body.classList.remove('no-scroll')
    }
  }, [isOpen, onClose])

  return (
    <>
      {isOpen ? (
        <Portal wrapperId={wrapperId}>
          <div
            className={cn(modalVariants({ size }), className)}
            ref={modalRef}
            {...props}
          >
            <div className={modalBodyVariants({ size })}>
              <IconButton
                Icon={Icons.cross}
                className={modalCloseButtonVariants({ size })}
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
