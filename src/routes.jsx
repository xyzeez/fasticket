import { createBrowserRouter } from "react-router-dom";

// UIs
import Layout from "./ui/Layout";

// Pages
import Home from "./pages/Home";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "home",
        element: <Home />,
      },
    ],
  },
]);
