import { useFetchAllData } from './hooks/useFetchAll';
import './App.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// Screens
import HomeScreen from './app/screens/HomeScreen';
import ItemScreen from './app/screens/ItemScreen';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeScreen />,
  },
  {
    path: "/:id/:itemId",
    element: <ItemScreen />,
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
