import { ReactNode } from 'react'

type PoolLayoutProps = Readonly<{
  children: ReactNode
}>

export default function PoolLayout({ children }: PoolLayoutProps) {
  return <>{children}</>
}
