import CompanyService from '@/types/CompanyService'
import requestSender from '@/types/classes/RequestSender'

export const getCompanyServices = async () => {
  const data = await requestSender.get<CompanyService[]>('/services')
  return data
}
