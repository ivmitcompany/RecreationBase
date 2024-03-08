import Apartment from '@/types/Apartment'
import requestSender from '@/types/classes/RequestSender'

export const getApartments = async () => {
  const data = await requestSender.get<Apartment[]>('/our_apartments')
  return data
}
