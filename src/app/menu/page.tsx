import MenuCategory from '@/components/pages/menu/category/MenuCategory'
import MeatInfo from '@/components/pages/menu/meat/MeatInfo'
import { getKitchenCategories } from '@/utils/api/menu'

export default async function Menu() {
  const categories = await getKitchenCategories()

  return (
    <div className="space-y-[3.75rem] ">
      {categories.map((category) => (
        <>
          <MenuCategory data={category} id={category.slug} key={category.id} />
          {category.slug === 'snidanki' && <MeatInfo className="!mt-10" />}
        </>
      ))}
    </div>
  )
}
