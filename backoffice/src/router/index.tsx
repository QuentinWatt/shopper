import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomeView from "../views/HomeView";
import ProductView from "../views/ProductsView";
import NotFound from "../views/NotFound";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomeView />,
      },
      {
        path: "/products",
        element: <ProductView />,
      },
      {
        path: "/*",
        element: <NotFound />,
      },
    ],
  },
]);

export default routes;
