import ImageInfo from './ImageInfo'

type AboutItem = {
  category: string
  description: string
  features?: string[]
  id: number
  image: string
  images: ImageInfo[]
  title: string
}

export default AboutItem
