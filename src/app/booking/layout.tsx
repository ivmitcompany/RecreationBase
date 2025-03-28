import { ReactNode } from 'react'

type BookingLayoutProps = Readonly<{
  children: ReactNode
}>

export default function BookingLayout({ children }: BookingLayoutProps) {
  return <>{children}</>
}
