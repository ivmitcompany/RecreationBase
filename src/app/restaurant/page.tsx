import RestaurantCatering from '@/components/pages/restaurant/catering/RestaurantCatering'
import RestaurantDelivery from '@/components/pages/restaurant/delivery/RestaurantDelivery'
import RestaurantExtras from '@/components/pages/restaurant/extras/RestaurantExtras'
import RestaurantFeatures from '@/components/pages/restaurant/features/RestaurantFeatures'
import RestaurantGallery from '@/components/pages/restaurant/gallery/RestaurantGallery'
import RestaurantHero from '@/components/pages/restaurant/hero/RestaurantHero'
import RestaurantMenu from '@/components/pages/restaurant/menu/RestaurantMenu'
import RestaurantTerrace from '@/components/pages/restaurant/terrace/RestaurantTerrace'
import { FC } from 'react'

const RestaurantPage: FC = () => {
  return (
    <main>
      <RestaurantHero />
      <RestaurantMenu />
      <RestaurantDelivery />
      <RestaurantFeatures />
      <RestaurantTerrace />
      <RestaurantCatering />
      <RestaurantGallery />
      <RestaurantExtras />
    </main>
  )
}

export default RestaurantPage
