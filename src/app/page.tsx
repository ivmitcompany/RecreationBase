import AboutSection from '@/components/pages/home/about/AboutSection'
import ApartmentsSection from '@/components/pages/home/apartments/ApartmentsSection'
import HeroSection from '@/components/pages/home/hero/HeroSection'
import ReviewsSection from '@/components/pages/home/reviews/ReviewsSection'
import ServicesSection from '@/components/pages/home/services/ServicesSection'

export default function Home() {
  return (
    <>
      <HeroSection className="pb-[8.625rem] pt-header md:pb-[10.6875rem]" />
      <AboutSection className="pb-[6.25rem] md:pb-[7.5rem]" id="about" />
      <ApartmentsSection
        className="pb-44 pt-20 md:pb-28 md:pt-[5.6875rem]"
        id="apartments"
      />
      <ServicesSection className="pb-[6.25rem] md:pb-[7.5rem]" />
      <ReviewsSection className="pb-[4.25rem] pt-[4.875rem] md:pb-[6.875rem] md:pt-[5.6875rem]" />
    </>
  )
}
