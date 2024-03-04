import MenuInfo from '@/components/pages/menu/info/MenuInfo'
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
        <div className="flex gap-[3.125rem]">
          {navigation}
          {children}
          <MenuInfo />
        </div>
      </Content>
    </div>
  )
}
