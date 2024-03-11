type KitchenCategory = {
  additions?: Addition[]
  id: number
  meals?: Meal[]
  name: string
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

type Ingredient = {
  id: number
  name: string
}

export default KitchenCategory
