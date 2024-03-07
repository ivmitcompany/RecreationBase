import { AboutItem } from '@/types/AboutItem'
import requestSender from '@/types/classes/RequestSender'

export const getAboutItems = async () => {
  const data = await requestSender.get<AboutItem[]>('/about')
  return data
}
