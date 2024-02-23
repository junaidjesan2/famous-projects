import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Layout from "./components/Layout/layout";
import RendomColor from "./components/Pages/rendomColor/rendomColor";
import Rating from "./components/Pages/rating/rating";
import LoadData from "./components/Pages/loadData/loadData";
import QrCode from "./components/Pages/qrcode/qrCode";

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
        element: <LoadData />,
      },
      {
        path: "/qr",
        element: <QrCode />,
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
