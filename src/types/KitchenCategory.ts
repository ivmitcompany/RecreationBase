type MenuCategoryType = {
  additions?: Addition[]
  id: number
  items?: MenuCategoryItemType[]
  name: string
  note?: string
  slug: string
  subcategories?: MenuSubcategoryType[]
}

export type Addition = {
  id: number
  name: string
  price: number
}

export type MenuCategoryItemType = {
  category?: number
  description?: string
  id: number
  image?: string
  ingredients?: Ingredient[]
  name: string
  price: number
  serving_type?: 'mass' | 'quantity'
  weight_value: string
}

export type MenuSubcategoryType = {
  id: number
  items?: MenuCategoryItemType[]
  name: string
}

export type Ingredient = {
  id: number
  name: string
}

export default MenuCategoryType
