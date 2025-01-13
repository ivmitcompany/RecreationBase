import type { Metadata } from 'next'

import Footer from '@/components/layout/footer/Footer'
import Header from '@/components/layout/header/Header'
import Providers from '@/store/providers'
import { SITE_URL, cn } from '@/utils'
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google'
import { ReactNode } from 'react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { roboto } from './fonts'
import './globals.css'

export const metadata: Metadata = {
  description:
    'Наш готельно-ресторанний комплекс пропонує ідеальне місце для сімейного відпочинку в серці Закарпатських гір. З неймовірною природою та озелененою територією, наш заклад створює особливу атмосферу, ідеальну для відпочинку та релаксації. У нашому комплексі є розваги для всієї родини, з катком у зимовий період та басейнами у літній сезон. Крім того, ми пропонуємо розкішні умови відпочинку, включаючи чани, лазні, соляну кімнату та хамам. Наша дитяча кімната з різними атракціонами та дитячий майданчик забезпечують розваги для найменших гостей. На території бази встановлена чудова білосніжна арка для виїзних церемоній та освідчень. Ми також пропонуємо зручну парковку та різноманітні будинки для різних цінових категорій, розташовані на схилі гори, подалі від міської метушні.',
  icons: {
    icon: [
      {
        href: '/icon.svg',
        media: '(prefers-color-scheme: light)',
        type: 'image/svg+xml',
        url: '/icon.svg',
      },
      {
        href: '/icon-light.svg',
        media: '(prefers-color-scheme: dark)',
        type: 'image/svg+xml',
        url: '/icon-light.svg',
      },
    ],
  },
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Logindariy',
    template: `%s | Logindariy`,
  },
}

type RootLayoutProps = Readonly<{
  children: ReactNode
}>

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html className="scroll-smooth" lang="ua">
      <body
        className={cn(
          'relative flex min-h-screen flex-col font-default text-dark',
          roboto.variable,
          roboto.variable
        )}
      >
        <GoogleTagManager gtmId="GTM-TCMRDQJ2" />
        <Providers>
          <Header />
          <main className="flex-shrink flex-grow basis-0">{children}</main>
          <Footer />
        </Providers>
      </body>
      <GoogleAnalytics gaId="G-98MEGPHR50" />
    </html>
  )
}
