import { useEffect, useState } from 'react';

import apiService from './services/ApiService';

import './App.css';

type PhotoItem = {
  title: string;
  description: string;
  image: string;
  index: number;
};

type PhotoCollection = {
  [key: string]: PhotoItem;
};

const useFetchData = () => {
  const [data, setData] = useState<PhotoCollection>({});

  useEffect(() => {
    apiService.getData().then(data => setData(data)).catch(() => setData({}))
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
