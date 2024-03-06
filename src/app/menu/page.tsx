import MenuCategory from '@/components/pages/menu/category/MenuCategory'
import CompanyInfo from '@/components/pages/menu/company/CompanyInfo'
import MeatInfo from '@/components/pages/menu/meat/MeatInfo'

const kitchenMenu = {
  categories: [
    {
      additions: [
        { id: 1, name: 'Шинка', price: 30 },
        { id: 2, name: 'Лосось свіжий', price: 130 },
      ],
      id: 1,
      meals: [
        {
          id: 1,
          img: '/path-to-img',
          name: 'Англійський сніданок',
          price: 210,
          weight: { type: 'mass', value: 380 },
        },
        {
          id: 2,
          name: 'Яйце варене',
          price: 18,
          weight: { type: 'quantity', value: 1 },
        },
      ],
      name: 'Сніданки',
      slug: 'breakfast',
    },
    {
      id: 2,
      meals: [
        {
          id: 1,
          img: '/path-to-img',
          ingredients: [
            { id: 1, name: 'корейка свинна копчена' },
            { id: 2, name: 'буженина' },
            { id: 3, name: 'балик копчений' },
          ],
          name: 'М’ясна нарізка власного виробництва',
          price: 285,
          weight: { portion: 50, type: 'mass', value: 300 },
        },
      ],
      name: 'Холодні закуски',
      slug: 'cold-snacks',
    },
  ],
  slug: 'kitchen',
  title: 'Кухня',
}

export default function Menu() {
  return (
    <>
      <div className="space-y-[3.75rem] ">
        <MenuCategory />
        <MenuCategory />
      </div>
      <MeatInfo className="mt-10" />
      <CompanyInfo className="mt-[6.25rem] md:hidden" />
    </>
  )
}
