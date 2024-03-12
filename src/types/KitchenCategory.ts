type KitchenCategory = {
  additions?: Addition[]
  id: number
  items?: KitchenCategoryItem[]
  name: string
  note?: string
  slug: string
}

export type Addition = {
  id: number
  name: string
  price: number
}

export type KitchenCategoryItem = {
  id: number
  image?: string
  ingredients?: Ingredient[]
  name: string
  price: number
  serving_type: 'mass' | 'quantity'
  weight_value: string
}

export type Ingredient = {
  id: number
  name: string
}

export default KitchenCategory
