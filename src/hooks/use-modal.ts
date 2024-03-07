'use client'

import { useCallback, useState } from 'react'

const useModal = () => {
  const [modalIsOpened, setModalIsOpened] = useState<boolean>(false)

  const openModal = useCallback(() => {
    setModalIsOpened(true)
  }, [])

  const closeModal = useCallback(() => {
    setModalIsOpened(false)
  }, [])

  return { closeModal, modalIsOpened, openModal }
}

export default useModal
