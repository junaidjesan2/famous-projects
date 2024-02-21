import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Layout from "./components/Layout/layout";
import RendomColor from "./components/Pages/rendomColor/rendomColor";
import Rating from "./components/Pages/rating/rating";

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
