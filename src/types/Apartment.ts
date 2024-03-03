import { ImageInfo } from './ImageInfo'

export type Apartment = {
  additions?: string[]
  id: number
  images?: ImageInfo[]
  name: string
  price: number
}
