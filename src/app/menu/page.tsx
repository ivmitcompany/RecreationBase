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

export default function Menu() {
  return <div>MENU PAGE</div>
}
