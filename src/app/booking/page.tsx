import BookingContent from '@/components/pages/booking/content/BookingContent'
import BookingHero from '@/components/pages/booking/hero/BookingHero'
import { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: {
    canonical: '/booking/',
  },
  description: 'Бронювання номерiв',
  title: 'Бронювання',
}

export default function Booking() {
  return (
    <>
      <BookingHero className="pb-[1rem] pt-header md:pb-[10.6875rem]" />
      <BookingContent />
    </>
  )
}
