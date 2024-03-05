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
        <section className="pb-7 pt-5 md:pb-[7.1875rem] md:pt-9">
          <MenuHeading className="mx-auto" />
          <div className="mt-14 flex flex-col gap-10 md:mt-8 md:flex-row">
            <aside className="basis-[17.8125rem]">
              {navigation}
              <CompanyInfo className="lg:hidden" />
            </aside>
            <div className="flex-shrink flex-grow basis-0">{children}</div>
            <CompanyInfo className="hidden basis-[17.8125rem] lg:block" />
          </div>
        </section>
      </Content>
    </div>
  )
}
