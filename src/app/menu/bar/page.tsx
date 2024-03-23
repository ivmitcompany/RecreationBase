import MenuCategory from '@/components/pages/menu/category/MenuCategory'
import CompanyInfo from '@/components/pages/menu/company/CompanyInfo'
import MenuNavigation from '@/components/pages/menu/navigation/MenuNavigation'
import MenuNavigationList from '@/components/pages/menu/navigation/MenuNavigationList'
import { getBarCategories } from '@/utils/api/menu'
import { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: {
    canonical: '/menu/bar/',
  },
  title: 'Меню · Бар',
}

export default async function Bar() {
  const categories = await getBarCategories()

  return (
    <>
      <aside className="md:sticky-element md:basis-[17.8125rem] md:py-5">
        <MenuNavigation>
          <MenuNavigationList pathname="/menu/bar" />
        </MenuNavigation>
        <CompanyInfo className="mt-5 hidden md:block lg:hidden" />
      </aside>
      <div className="mt-14 flex-shrink flex-grow basis-0 md:mt-0">
        <div className="space-y-[3.75rem] ">
          {categories.map((category) => (
            <MenuCategory
              data={category}
              id={category.slug}
              includeModal={false}
              key={category.id}
            />
          ))}
        </div>
        <CompanyInfo className="mt-[6.25rem] md:hidden" />
      </div>
    </>
  )
}
