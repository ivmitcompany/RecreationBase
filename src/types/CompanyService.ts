import { ImageInfo } from './ImageInfo'

export type CompanyService = {
  description?: string
  excess_time_price: number
  id: number
  images?: ImageInfo[]
  min_order_time: number
  note?: string
  price: number
  title: string
}
