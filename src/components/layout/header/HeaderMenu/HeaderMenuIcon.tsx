'use client'

import { Icons } from '@/components/ui/Icons'
import { FC } from 'react'

const HeaderMenuIcon: FC = () => {
  return (
    <button className="p-1.5">
      <Icons.burger />
      <Icons.cross />
    </button>
  )
}

export default HeaderMenuIcon
