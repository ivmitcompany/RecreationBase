import MenuHeading from '@/components/pages/menu/MenuHeading'
import CompanyInfo from '@/components/pages/menu/company/CompanyInfo'
import Content from '@/components/ui/Content'
import { ReactNode } from 'react'

type MenuLayoutProps = Readonly<{
  children: ReactNode
  navigation: ReactNode
}>

export default function MenuLayout({ children, navigation }: MenuLayoutProps) {
  return (
    <div className="pt-header">
      <Content>
        <section className="pb-12 pt-5 md:pb-[7.1875rem] md:pt-9">
          <MenuHeading className="mx-auto" />
          <div className="mt-10 flex flex-col md:mt-3 md:flex-row md:gap-10">
            <aside className="md:sticky-element md:basis-[17.8125rem] md:py-5">
              {navigation}
              <CompanyInfo className="mt-5 hidden md:block lg:hidden" />
            </aside>
            <div className="mt-14 flex-shrink flex-grow basis-0 md:mt-0">
              {children}
            </div>
            <CompanyInfo className="md:sticky-element hidden md:basis-[17.8125rem] md:py-5 lg:block" />
          </div>
        </section>
      </Content>
    </div>
  )
}
