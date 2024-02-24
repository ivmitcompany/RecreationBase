import AboutSection from '@/components/pages/home/about/AboutSection'
import HeroSection from '@/components/pages/home/hero/HeroSection'

export default function Home() {
  return (
    <>
      <HeroSection className="pb-[8.625rem] md:pb-[10.6875rem]" />
      <AboutSection className="pb-[6.25rem] md:pb-[7.5rem]" />
    </>
  )
}
