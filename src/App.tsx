import { useAppSelector } from './app/hooks';
import { useFetchAllData } from './hooks/useFetchAll';
import { selectAllPhotos } from './features/fetchAll/fetchAllSlice';

import './App.css';

function App() {
  useFetchAllData();
  const data = useAppSelector(selectAllPhotos);
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
