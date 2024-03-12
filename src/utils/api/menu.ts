import MenuCategoryType from '@/types/KitchenCategory'
import requestSender from '@/types/classes/RequestSender'

export const getKitchenCategories = async () => {
  const data = await requestSender.get<MenuCategoryType[]>(
    '/kitchen/categories'
  )
  return data
}

export const getBarCategories = async () => {
  const data = await requestSender.get<MenuCategoryType[]>('/bar/categories')
  return data
}
