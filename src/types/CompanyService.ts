import ImageInfo from './ImageInfo'

type CompanyService = {
  description: string
  id: number
  images?: ImageInfo[]
  min_order_time?: number
  note?: string
  order_excess_price?: number
  price: number
  title: string
}

export default CompanyService
