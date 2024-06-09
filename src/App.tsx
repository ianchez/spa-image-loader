import { useFetchAllData } from './hooks/useFetchAll';
import './App.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// Screens
import HomeScreen from './app/screens/HomeScreen';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeScreen />,
  },
]);



function App() {
  useFetchAllData();

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
