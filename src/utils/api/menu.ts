import KitchenCategory from '@/types/KitchenCategory'
import requestSender from '@/types/classes/RequestSender'

export const getKitchenCategories = async () => {
  const data = await requestSender.get<KitchenCategory[]>('/kitchen/categories')
  return data
}
