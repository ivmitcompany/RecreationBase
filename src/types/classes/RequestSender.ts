class RequestSender {
  baseURL: string

  constructor(baseURL: string) {
    this.baseURL = baseURL
  }

  async get<T>(path: string, headers: Record<string, string> = {}): Promise<T> {
    try {
      const url = `${this.baseURL}${path}`

      const response = await fetch(url, {
        headers: { 'Content-type': 'application/json', ...headers },
        method: 'GET',
        next: { revalidate: 5 },
      })

      if (!response.ok) {
        throw new Error(
          `Failed to fetch data from ${url}. Status: ${response.status} ${response.statusText}`
        )
      }

      const data: T = await response.json()
      return data
    } catch (error) {
      throw error
    }
  }
}

const requestSender = new RequestSender(process.env.API_URL!)

export default requestSender
