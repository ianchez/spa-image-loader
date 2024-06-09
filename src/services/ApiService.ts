import HttpClient from './HttpClient';

interface BaseItem {
  index: number;
}

class ApiService {
  constructor(
    private httpClient: typeof HttpClient,
    private apiUrl?: string,
  ) {}

  private async getData(): Promise<any> {
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

  public async fetchAllDataAndParse<T extends BaseItem>(
    parseItem: ([key, item]: [key: string, item: any]) => T
  ) {
    const data = await this.getData();
    const dataArray: T[] = Object.entries(data).map(parseItem);
    const sortedData = dataArray.sort((a, b) => a.index - b.index);
    return sortedData;
  }
}

const apiService = new ApiService(HttpClient, process.env.REACT_APP_API_URL);
export default apiService;