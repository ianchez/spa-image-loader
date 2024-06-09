import { useFetchAllData } from './hooks/useFetchAll';
import './App.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// Screens
import HomeScreen from './app/screens/HomeScreen';
import ItemScreen from './app/screens/ItemScreen';
import ErrorScreen from './app/screens/ErrorScreen';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeScreen />,
    errorElement: <ErrorScreen />,
  },
  {
    path: "/:id/:itemId",
    element: <ItemScreen />,
    errorElement: <ErrorScreen />,
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
