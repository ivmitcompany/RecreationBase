import BeSearchForm from "@/components/layout/be-forms/beSearchForm"
import AboutSection from '@/components/pages/home/about/AboutSection'
import ApartmentsSection from '@/components/pages/home/apartments/ApartmentsSection'
import HomeExtras from '@/components/pages/home/extras/HomeExtras'
import HeroSection from '@/components/pages/home/hero/HeroSection'
import ReviewsSection from '@/components/pages/home/reviews/ReviewsSection'
import ServicesSection from '@/components/pages/home/services/ServicesSection'
import { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: {
    canonical: '/',
  },
}

export default function Home() {
  return (
    <>
      <HeroSection className="pb-[8.625rem] pt-header md:pb-[10.6875rem]" />
      <BeSearchForm />
      <ApartmentsSection
        className="pb-44 pt-20 md:pb-28 md:pt-[5.6875rem]"
        id="apartments"
      />
      <HomeExtras className="pb-[4.25rem] pt-[1.875rem] md:pb-[4rem] md:pt-[1.5rem]" />
      <AboutSection id="about" />
      <ServicesSection className="pb-[6.25rem] pt-[1.2rem] md:pb-[7.5rem]" />
      <ReviewsSection className="pb-[4.25rem] pt-[4.875rem] md:pb-[0.875rem] md:pt-[0.6875rem]" />
    </>
  )
}
