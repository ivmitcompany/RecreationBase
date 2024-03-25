import ImageInfo from './ImageInfo'

type Apartment = {
  additions?: ApartmentAddition[]
  description: string
  id: number
  images: [] | ImageInfo[]
  people_numbers: number
  price: number
  title: string
}

type ApartmentAddition = {
  name: string
}

export default Apartment
