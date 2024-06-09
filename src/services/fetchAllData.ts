import { parsePhotoItem } from "../utils";
import apiService from "./ApiService";

const fetchAllData = async () => {
  const data = await apiService.getData();
  const dataArray = Object.entries(data).map(parsePhotoItem);
  const sortedData = dataArray.sort((a, b) => a.index - b.index);
  return sortedData;
}

export default fetchAllData;