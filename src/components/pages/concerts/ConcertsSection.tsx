'use client'

import ColorAccentSpan from '@/components/ui/ColorAccentSpan'
import Content from '@/components/ui/Content'
import CurlyBraceHeading from '@/components/ui/CurlyBraceHeading'
import { Icons } from '@/components/ui/Icons'
import Button from '@/components/ui/button/Button'
import { cn } from '@/utils'
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion'
import Head from 'next/head'
import React, { useEffect, useRef, useState } from 'react'

interface LinkButtonProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode
}

const LinkButton: React.FC<LinkButtonProps> = ({
  children,
  className,
  ...props
}) => (
  <a
    className={cn(
      'font-light uppercase text-light transition-colors hover:text-accent',
      className
    )}
    {...props}
  >
    {children}
  </a>
)

const ConcertsSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const { scrollYProgress } = useScroll({
    offset: ['start start', 'end start'],
    target: containerRef,
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  useEffect(() => {
    const video = document.querySelector('video')
    if (video) {
      video.playbackRate = 0.8
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.querySelector('.artists-section')
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  const artists = [
    {
      description:
        'Подарували вибухову енергію та драйв, змушуючи зал танцювати й аплодувати стоячи.',
      name: 'Марина і компанія',
    },
    {
      description:
        'Своєю щирістю та романтичними хітами захопив зал атмосферою ніжності й кохання.',
      name: 'Роман Скорпіон',
    },
    {
      description:
        'Легендарний виконавець вразив глибиною свого голосу та харизмою.',
      name: 'Віктор Павлік',
    },
    {
      description: 'Фольклорна енергія нагадала про силу українських традицій.',
      name: 'Остра Тернина',
    },
    {
      description:
        'Чарівна виконавиця полонила слухачів своїм потужним вокалом.',
      name: 'Катерина Бужинська',
    },
    {
      description:
        'Зворушливі й душевні пісні стали справжнім подарунком для всіх шанувальників живої музики.',
      name: 'Михайло Грицкан',
    },
    {
      description:
        'Яскравий і харизматичний виконавець додав до концертної програми сучасного звучання та ритму.',
      name: 'Вулканов',
    },
    {
      description:
        'Харизматичний виконавець, який своїм виступом ще раз довів, що українська музика — це щось більше, ніж просто пісні.',
      name: 'Віталій Лобач',
    },
  ]

  return (
    <>
      <Head>
        <title>
          Концерти в Логіндарій | Жива музика та виступи в ресторані
        </title>
        <meta
          content="Відвідайте концерти в ресторані Логіндарій. Жива музика, виступи відомих артистів, незабутні музичні вечори. Роман Скорпіон, Віктор Павлік, Остра Тернина та інші зірки української естради."
          name="description"
        />
        <meta
          content="концерти Логіндарій, жива музика, виступи артистів, ресторан з музикою, Роман Скорпіон, Віктор Павлік, Остра Тернина, Катерина Бужинська, Михайло Грицкан, Марина і компанія, Вулканов, Віталій Лобач"
          name="keywords"
        />

        {/* Open Graph / Facebook */}
        <meta content="website" property="og:type" />
        <meta content="https://logindariy.com/concerts" property="og:url" />
        <meta
          content="Концерти в Логіндарії | Жива музика та виступи в ресторані"
          property="og:title"
        />
        <meta
          content="Відвідайте концерти в ресторані Логіндарій. Жива музика, виступи відомих артистів, незабутні музичні вечори."
          property="og:description"
        />
        <meta
          content="https://res.cloudinary.com/db8gndp2b/image/upload/v1743458072/IMG_3970_g8mynj.jpg"
          property="og:image"
        />

        {/* Додаткові мета-теги */}
        <meta content="index, follow" name="robots" />
        <meta content="Ukrainian" name="language" />
        <meta content="Логіндарій" name="author" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />

        {/* Canonical URL */}
        <link href="https://logindariy.com/concerts" rel="canonical" />

        {/* JSON-LD розмітка */}
        <script
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Event',
              description:
                'Відвідайте концерти в ресторані Логіндарій. Жива музика, виступи відомих артистів, незабутні музичні вечори.',
              location: {
                '@type': 'Place',
                address: {
                  '@type': 'PostalAddress',
                  addressCountry: 'UA',
                  addressLocality: 'Рокосово',
                },
                name: 'Ресторан Логіндарій',
              },
              name: 'Концерти в Логіндарії',
              offers: {
                '@type': 'Offer',
                availability: 'https://schema.org/InStock',
              },
              performer: [
                {
                  '@type': 'Person',
                  name: 'Роман Скорпіон',
                },
                {
                  '@type': 'Person',
                  name: 'Віктор Павлік',
                },
                {
                  '@type': 'Person',
                  name: 'Остра Тернина',
                },
              ],
            }),
          }}
          type="application/ld+json"
        />
      </Head>

      <div
        className="relative min-h-screen overflow-hidden bg-dark"
        ref={containerRef}
      >
        <video
          autoPlay
          className="fixed left-0 top-0 z-0 h-full w-full object-cover opacity-40 md:opacity-50"
          loop
          muted
          playsInline
          src="https://res.cloudinary.com/dwocqwqdo/video/upload/v1746825266/4_%D1%80%D1%96%D1%87%D0%BD%D0%B8%D1%86%D1%8F_%D0%9B%D0%BE%D0%B3%D1%96%D0%BD%D0%B4%D0%B0%D1%80%D1%96%D0%B8%CC%86_irdctj.mov"
        />

        <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-5 text-center md:px-10">
          <CurlyBraceHeading
            className="mb-8 text-light"
            level={1}
            position="center"
            size="default"
          >
            Концерти
          </CurlyBraceHeading>

          <p className="mx-auto mb-12 max-w-2xl text-lg font-light text-light/90 md:text-xl">
            Місце, де народжуються незабутні музичні моменти та з&apos;єднуються
            душі через силу музики
          </p>

          <motion.div
            animate={{ opacity: 1 }}
            className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-sm uppercase tracking-wider text-light/80"
            initial={{ opacity: 0 }}
            transition={{ delay: 1 }}
          >
            <motion.div
              animate={{
                scaleY: [1, 0.5, 1],
              }}
              className="h-16 w-px bg-gradient-to-b from-light/80 to-transparent"
              transition={{
                duration: 1.5,
                ease: 'easeInOut',
                repeat: Infinity,
              }}
            />
          </motion.div>
        </div>

        <Content className="artists-section relative z-10 py-20">
          <p className="mx-auto mb-16 max-w-3xl text-center text-lg font-light text-light/90 md:text-xl">
            На нашій локації постійно відбуваються низка яскравих концертів, які
            залишили незабутні враження в серцях глядачів. Сцену запалювали
            відомі зірки української естради, кожен з яких подарував публіці
            справжнє свято музики, емоцій та тепла.
          </p>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
            <AnimatePresence>
              {isVisible &&
                artists.map((artist, index) => (
                  <motion.div
                    animate={{ opacity: 1, y: 0 }}
                    className="rounded-2xl border border-light/10 bg-light/5 p-6 backdrop-blur-sm transition-all duration-300 hover:border-light/20 hover:shadow-lg md:p-8"
                    initial={{ opacity: 0, y: 30 }}
                    key={artist.name}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <h3 className="mb-4 text-xl font-medium text-accent md:text-2xl">
                      {artist.name}
                    </h3>
                    <p className="text-base font-light text-light/90 md:text-lg">
                      {artist.description}
                    </p>
                  </motion.div>
                ))}
            </AnimatePresence>
          </div>

          <div className="mt-24 rounded-3xl border border-light/10 bg-light/5 p-8 text-center backdrop-blur-sm md:mt-32 md:p-12">
            <CurlyBraceHeading
              className="mb-6 text-light"
              level={2}
              position="center"
              size="sm"
            >
              Найближчий концерт
            </CurlyBraceHeading>

            <div className="mb-8">
              <video
                autoPlay
                className="mx-auto w-full max-w-xl rounded-xl object-contain"
                loop
                muted
                playsInline
                preload="auto"
                src="https://res.cloudinary.com/dwocqwqdo/video/upload/v1746902341/telegram-cloud-document-2-5260319804899748481_1_._qg4r4p.mp4"
              />
            </div>

            <h3 className="mb-4 text-2xl font-medium text-accent">
              Анна Трінчер
            </h3>
            <p className="mx-auto mb-8 max-w-xl text-base font-light text-light/70 md:text-lg">
              Не пропустіть виступ однієї з найяскравіших зірок української
              естради
            </p>

            <LinkButton
              className="text-m mx-auto bg-accent px-8 py-5 font-medium uppercase text-light  transition-colors hover:bg-accent/80"
              href="https://khust.karabas.com/ru/anna-trincher-17/order/?fbclid=PAZXh0bgNhZW0CMTEAAafqxvwiD8psbrZePG2pI5hdFeITfyPibZFZg7ufO0j_cbtu6f2BZJZKaKXt5w_aem_Bg3_I2h2XiOyHXtaRUmGIA"
              rel="noopener noreferrer"
              target="_blank"
            >
              Купити квитки
            </LinkButton>
          </div>

          {/* Секція з відео */}
          <div className="mt-24 md:mt-32">
            <CurlyBraceHeading
              className="mb-12 text-center text-light"
              level={2}
              position="center"
              size="sm"
            >
              Наші концерти
            </CurlyBraceHeading>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              <motion.div
                animate={{ opacity: 1, y: 0 }}
                className="group relative overflow-hidden rounded-2xl border border-light/10 bg-light/5 backdrop-blur-sm transition-all duration-300 hover:border-light/20 hover:shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <video
                  autoPlay
                  className="h-full w-full object-cover"
                  loop
                  muted
                  playsInline
                  src="https://res.cloudinary.com/dwocqwqdo/video/upload/v1746825348/IMG_7767_f9uo7n.mov"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </motion.div>

              <motion.div
                animate={{ opacity: 1, y: 0 }}
                className="group relative overflow-hidden rounded-2xl border border-light/10 bg-light/5 backdrop-blur-sm transition-all duration-300 hover:border-light/20 hover:shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <video
                  autoPlay
                  className="h-full w-full object-cover"
                  loop
                  muted
                  playsInline
                  src="https://res.cloudinary.com/dwocqwqdo/video/upload/v1746825349/IMG_7770_mxatfg.mov"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </motion.div>

              <motion.div
                animate={{ opacity: 1, y: 0 }}
                className="group relative overflow-hidden rounded-2xl border border-light/10 bg-light/5 backdrop-blur-sm transition-all duration-300 hover:border-light/20 hover:shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <video
                  autoPlay
                  className="h-full w-full object-cover"
                  loop
                  muted
                  playsInline
                  src="https://res.cloudinary.com/dwocqwqdo/video/upload/v1746825342/IMG_7769_vuc9m4.mov"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </motion.div>
            </div>
          </div>

          <div className="mt-24 rounded-3xl border border-light/10 bg-light/5 p-8 text-center backdrop-blur-sm md:mt-32 md:p-12">
            <CurlyBraceHeading
              className="mb-6 text-light"
              level={2}
              position="center"
              size="sm"
            >
              Слідкуйте за нами
            </CurlyBraceHeading>
            <p className="mx-auto mb-12 max-w-xl text-base font-light text-light/70 md:text-lg">
              Підпишіться на наші соціальні мережі, щоб першими дізнаватися про
              нові концерти та події
            </p>
            <div className="flex flex-col justify-center gap-6 md:flex-row md:gap-12">
              <LinkButton
                href="https://www.instagram.com/logindariy_restaurant/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Instagram
              </LinkButton>
              <LinkButton
                href="https://www.facebook.com/p/Logindariy-Restaurantt-100063863570860/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Facebook
              </LinkButton>
              <LinkButton
                href="https://www.tiktok.com/@logindariy?_t=ZN-8utnpvZZesg&_r=1"
                rel="noopener noreferrer"
                target="_blank"
              >
                TikTok
              </LinkButton>
            </div>
          </div>
        </Content>
      </div>
    </>
  )
}

export default ConcertsSection
