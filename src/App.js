import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Layout from "./components/Layout/layout";
import RendomColor from "./components/Pages/rendomColor/rendomColor";
import Rating from "./components/Pages/rating/rating";
import LoadData from "./components/Pages/LoadData/loadData";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <RendomColor />,
      },
      {
        path: "/rating",
        element: <Rating />,
      },
      {
        path: "/load",
        element: <LoadData title="Loading data through one click"/>,
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
