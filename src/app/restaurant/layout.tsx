import { ReactNode } from 'react'

type RestaurantLayoutProps = Readonly<{
  children: ReactNode
}>

export default function RestaurantLayout({ children }: RestaurantLayoutProps) {
  return <>{children}</>
}
