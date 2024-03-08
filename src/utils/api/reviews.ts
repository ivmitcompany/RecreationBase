import Review from '@/types/Review'
import requestSender from '@/types/classes/RequestSender'

export const getReviews = async () => {
  const data = await requestSender.get<Review[]>('/reviews')
  return data
}
