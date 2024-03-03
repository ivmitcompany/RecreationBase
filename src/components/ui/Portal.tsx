import { disablePageScroll, enablePageScroll } from '@/utils'
import { FC, ReactElement, useLayoutEffect, useState } from 'react'
import { createPortal } from 'react-dom'

const createWrapperAndAppendToBody = (
  wrapperId: string
): HTMLElement | null => {
  if (!document) return null

  const wrapperElement = document.createElement('div')
  wrapperElement.setAttribute('id', wrapperId)
  document.body.appendChild(wrapperElement)
  
  return wrapperElement
}

type PortalProps = {
  children: ReactElement
  wrapperId?: string
}

const Portal: FC<PortalProps> = ({ children, wrapperId = 'modals-root' }) => {
  const [wrapperElement, setWrapperElement] = useState<HTMLElement>()

  useLayoutEffect(() => {
    let element = document.getElementById(wrapperId)
    let systemCreated = false

    if (!element) {
      element = createWrapperAndAppendToBody(wrapperId)
      systemCreated = true
      disablePageScroll()
    }

    setWrapperElement(element!)

    return () => {
      if (systemCreated && element?.parentNode) {
        element.parentNode.removeChild(element)
        enablePageScroll()
      }
    }
  }, [wrapperId])

  return <>{wrapperElement ? createPortal(children, wrapperElement) : null}</>
}

export default Portal
