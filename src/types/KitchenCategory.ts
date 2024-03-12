type KitchenCategory = {
  additions?: Addition[]
  id: number
  items?: Meal[]
  name: string
  note?: string
  slug: string
}

export type Addition = {
  id: number
  name: string
  price: number
}

export type Meal = {
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
