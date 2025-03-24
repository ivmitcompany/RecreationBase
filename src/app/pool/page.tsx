import PoolExtras from '@/components/pages/pool/extras/PoolExtras'
import PoolFeatures from '@/components/pages/pool/features/PoolFeatures'
import PoolGallery from '@/components/pages/pool/gallery/PoolGallery'
import PoolHero from '@/components/pages/pool/hero/PoolHero'
import PoolInfo from '@/components/pages/pool/info/PoolInfo'
import PoolRestaurant from '@/components/pages/pool/restaurant/PoolRestaurant'
import { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: {
    canonical: '/pool/',
  },
  description:
    'Насолоджуйтесь нашими комфортними басейнами та зоною відпочинку в оточенні карпатської природи. Ідеальне місце для релаксації та сімейного дозвілля.',
  title: 'Басейни та зона відпочинку',
}

export default function Pool() {
  return (
    <>
      <PoolHero className="mb-[1.625rem] pb-[1rem] pt-header md:mb-2 md:pb-[10.6875rem]" />
      <PoolFeatures
        className="pb-14 pt-[2rem] md:pb-28 md:pt-[5.6875rem]"
        id="features"
      />
      <PoolGallery
        className="pb-[3.25rem] md:pb-[8.5rem] md:pt-[2rem]"
        id="gallery"
      />
      <PoolRestaurant className="pb-[4.25rem] pt-[4.875rem] md:pb-[4rem] md:pt-[1.5rem]" />
      <PoolExtras className="pb-[4.25rem] pt-[4.875rem] md:pb-[4rem] md:pt-[1.5rem]" />
      <PoolInfo />
    </>
  )
}
