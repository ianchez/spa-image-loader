import { useEffect, useState } from 'react';

import apiService from './services/ApiService';

import './App.css';

type PhotoItem = {
  title: string;
  description?: string;
  image?: string;
  index: number;
};

const isValidUrl = (url: any): boolean => {
  if (!url) return false;
  if (typeof url !== 'string') return false;

  try {
    const parsedUrl = new URL(url);
    return ['http:', 'https:'].includes(parsedUrl.protocol);
  } catch (e) {
    return false;
  }
};

const parsePhotoItem = (item: any): PhotoItem => ({
  title: String(item?.title) || '',
  description: String(item?.description) || '',
  image: isValidUrl(item.image) ? item.image : undefined,
  index: parseInt(item?.index || 0),
});

const useFetchData = () => {
  const [data, setData] = useState<PhotoItem[]>([]);

  useEffect(() => {
    apiService.getData()
      .then(data => {
          const dataArray = Object.values(data).map(parsePhotoItem);
          const sortedData = dataArray.sort((a, b) => a.index - b.index);
          setData(sortedData)
        });
  }, [])

  return data;
}

function App() {
  const data = useFetchData();
  console.log(data);

  return (
    <div className="App">
      <header className="App-header">
        <h1>App</h1>
      </header>
    </div>
  );
}

export default App;
