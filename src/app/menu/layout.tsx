import MenuHeading from '@/components/pages/menu/MenuHeading'
import CompanyInfo from '@/components/pages/menu/company/info/CompanyInfo'
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
          <div className="mt-14 flex gap-10 md:mt-8">
            <aside className="basis-[17.8125rem]">{navigation}</aside>
            <section className="flex-shrink flex-grow basis-0">
              {children}
            </section>
            <CompanyInfo className="basis-[17.8125rem]" />
          </div>
        </section>
      </Content>
    </div>
  )
}
