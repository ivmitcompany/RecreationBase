import { cn } from '@/utils'
import { FC, HTMLAttributes } from 'react'

import MenuNavigationListItem from './MenuNavigationListItem'

interface MenuNavigationListProps extends HTMLAttributes<HTMLOListElement> {}

const MenuNavigationList: FC<MenuNavigationListProps> = ({
  className,
  ...props
}) => (
  <ol
    className={cn(
      'flex gap-2.5 overflow-x-auto pb-2.5 text-lg font-light leading-6 md:flex-col md:gap-4 md:overflow-hidden md:pb-0 md:pl-[1.875rem] md:text-sm',
      className
    )}
    {...props}
  >
    <MenuNavigationListItem href="/menu/#snidanki">
      Сніданки
    </MenuNavigationListItem>
    <MenuNavigationListItem href="/menu/#holodni-zakuski">
      Холодні закуски
    </MenuNavigationListItem>
    <MenuNavigationListItem href="/menu/#garyachi-zakuski">
      Гарячі закуски
    </MenuNavigationListItem>
    <MenuNavigationListItem href="/menu/#salati">Салати</MenuNavigationListItem>
    <MenuNavigationListItem href="/menu/#pershi-stravi">
      Перші страви
    </MenuNavigationListItem>
    <MenuNavigationListItem href="/menu/#pasti">Пасти</MenuNavigationListItem>
    <MenuNavigationListItem href="/menu/#garniri">
      Гарніри
    </MenuNavigationListItem>
    <MenuNavigationListItem href="/menu/#garyachi-stravi">
      Гарячі страви
    </MenuNavigationListItem>
    <MenuNavigationListItem href="/menu/#zakarpatski-stravi">
      Закарпатські страви
    </MenuNavigationListItem>
    <MenuNavigationListItem href="/menu/#stravi-na-mangali">
      Страви на мангалі
    </MenuNavigationListItem>
    <MenuNavigationListItem href="/menu/#pitsa">Піца</MenuNavigationListItem>
    <MenuNavigationListItem href="/menu/#sushi">Суші</MenuNavigationListItem>
    <MenuNavigationListItem href="/menu/#deserti">
      Десерти
    </MenuNavigationListItem>
    <MenuNavigationListItem href="/menu/#pisne-menyu">
      Пісне меню
    </MenuNavigationListItem>
    <MenuNavigationListItem href="/menu/#dityache-menyu">
      Дитяче меню
    </MenuNavigationListItem>
    <MenuNavigationListItem href="/menu/#sousi">Соуси</MenuNavigationListItem>
    <MenuNavigationListItem href="/menu/#zakuski-do-piva">
      Закуски до пива
    </MenuNavigationListItem>
  </ol>
)

export default MenuNavigationList
