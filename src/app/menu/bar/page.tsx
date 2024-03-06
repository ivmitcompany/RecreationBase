import MenuCategory from '@/components/pages/menu/category/MenuCategory'

const barMenu = {
  categories: [
    {
      id: 1,
      name: 'Алкогольні напої',
      slug: 'alcohol',
      subcategories: [
        {
          drinks: [
            { id: 1, name: 'B-53', price: 155 },
            { id: 1, name: 'Хіросіма', price: 170 },
          ],
          id: 1,
          name: 'Shot drinks',
        },
        {
          drinks: [
            {
              id: 1,
              ingredients: [
                { id: 1, name: 'горілка' },
                { id: 2, name: 'білий ром' },
                { id: 3, name: 'текіла' },
                { id: 4, name: 'джин' },
                { id: 5, name: 'тріпл сек' },
                { id: 6, name: 'кока-кола' },
                { id: 7, name: 'лимон' },
              ],
              name: 'Лонг Айленд',
              price: 300,
            },
            {
              id: 2,
              ingredients: [
                { id: 1, name: 'горілка' },
                { id: 2, name: 'лікер персиковий' },
                { id: 3, name: 'гренадін' },
                { id: 4, name: 'сік' },
              ],
              name: 'Секс на пляжі',
              price: 165,
            },
          ],
          id: 2,
          name: 'Long drinks',
        },
      ],
    },
    {
      additions: [
        { id: 1, name: 'Молок', price: 10 },
        { id: 2, name: 'Мед', price: 18 },
      ],
      drinks: [
        {
          id: 1,
          name: 'Лате',
          price: 46,
        },
        {
          id: 2,
          name: 'Какао',
          price: 87,
        },
      ],
      id: 2,
      name: 'Кавові напої',
      slug: 'coffee',
    },
  ],
  name: 'Бар',
  slug: 'bar',
}

export default function Bar() {
  return (
    <div className="space-y-[3.75rem] ">
      <MenuCategory id="snidanki" />
      <MenuCategory id="holodni-zakuski" />
    </div>
  )
}
