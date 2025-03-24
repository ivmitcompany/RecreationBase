import Image from 'next/image'
import { FC } from 'react'

const PoolInfo: FC = () => {
  return (
    <div className="mt-12 overflow-hidden bg-dark shadow-xl">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Фото з обрамленням */}
        <div className="relative h-64 overflow-hidden md:h-auto">
          <div className="absolute inset-0 z-10 bg-[#122223]/20"></div>
          <Image
            alt="Басейн"
            className="transition-transform duration-700 hover:scale-105"
            layout="fill"
            objectFit="cover"
            src="/pool8.jpg"
          />
          <div className="absolute bottom-0 left-0 right-0 z-10 h-20 bg-gradient-to-t from-[#122223] to-transparent"></div>
        </div>

        {/* Інформація */}
        <div className="p-8 text-[#f3f3f3]">
          <h2 className="text-3xl font-bold text-[#f3f3f3]">Басейн</h2>
          <p className="mt-1 font-medium text-[#f3f3f3]/80">
            Щодня з 11:00 до 20:00
          </p>

          <div className="mt-6 rounded-lg bg-[#1a2f30] p-4">
            <div className="flex justify-between text-lg font-medium">
              <span className="text-[#f3f3f3]">Будні</span>
              <span className="font-bold text-[#f3f3f3]">250 грн</span>
            </div>
            <div className="my-3 h-px bg-gradient-to-r from-transparent via-[#f3f3f3]/30 to-transparent"></div>
            <div className="flex justify-between text-lg font-medium">
              <span className="text-[#f3f3f3]">Вихідні</span>
              <span className="font-bold text-[#f3f3f3]">300 грн</span>
            </div>
          </div>

          <ul className="mt-6 space-y-3 text-sm">
            <li className="flex items-center text-[#f3f3f3]">
              <span className="mr-2 flex h-5 w-5 items-center justify-center rounded-full bg-[#f3f3f3]/20">
                <svg
                  className="h-3 w-3 text-[#f3f3f3]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    fillRule="evenodd"
                  />
                </svg>
              </span>
              Діти до 5 років — безкоштовно
            </li>
            <li className="flex items-center text-[#f3f3f3]">
              <span className="mr-2 flex h-5 w-5 items-center justify-center rounded-full bg-[#f3f3f3]/20">
                <svg
                  className="h-3 w-3 text-[#f3f3f3]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    fillRule="evenodd"
                  />
                </svg>
              </span>
              Рушники для гостей готелю безкоштовні
            </li>
            <li className="flex items-center text-[#f3f3f3]">
              <span className="mr-2 flex h-5 w-5 items-center justify-center rounded-full bg-[#ff6b6b]/20">
                <svg
                  className="h-3 w-3 text-[#ff6b6b]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    fillRule="evenodd"
                  />
                </svg>
              </span>
              Напої та їжа приносити з собою заборонені
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default PoolInfo
