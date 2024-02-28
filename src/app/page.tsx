import AboutSection from '@/components/pages/home/about/AboutSection'
import ApartmentsSection from '@/components/pages/home/apartments/ApartmentsSection'
import HeroSection from '@/components/pages/home/hero/HeroSection'
import ServicesSection from '@/components/pages/home/services/ServicesSection'

export default function Home() {
  return (
    <>
      <HeroSection className="pb-[8.625rem] pt-header md:pb-[10.6875rem]" />
      <AboutSection className="pb-[6.25rem] md:pb-[7.5rem]" />
      <ApartmentsSection className="pb-44 pt-20 md:pb-28 md:pt-[5.6875rem]" />
      <ServicesSection className="pb-[6.25rem] md:pb-[7.5rem]" />
    </>
  )
}
