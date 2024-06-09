import HttpClient from './HttpClient';

class ApiService {
  constructor(
    private httpClient: typeof HttpClient,
    private apiUrl?: string,
  ) {}

  public async getData(): Promise<any> {
    try {
      if (!this.apiUrl) {
        throw new Error('URL is required for fetching data.');
      }

      const response = await this.httpClient.get(this.apiUrl);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return response.json();
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}

const apiService = new ApiService(HttpClient, process.env.REACT_APP_API_URL);
export default apiService;