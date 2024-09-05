import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomeView from "../views/HomeView";
import ProductsView from "../views/Products/ProductsView";
import NotFound from "../views/NotFound";
import ProductView from "../views/Products/ProductView";

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
        path: "products",
        element: <ProductsView />,
      },
      {
        path: "products/:id",
        element: <ProductView />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default routes;
