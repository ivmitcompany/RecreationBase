import MenuCategory from '@/components/pages/menu/category/MenuCategory'
import { getBarCategories } from '@/utils/api/menu'

export default async function Bar() {
  const categories = await getBarCategories()

  return (
    <div className="space-y-[3.75rem] ">
      {categories.map((category) => (
        <MenuCategory data={category} id={category.slug} key={category.id} />
      ))}
    </div>
  )
}
