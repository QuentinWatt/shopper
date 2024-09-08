import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomeView from "../views/Dashboard/DashboardView";
import ProductsView from "../views/Products/ProductsView";
import ProductEditView from "../views/Products/ProductEditView";
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
        path: "products",
        element: <ProductsView />,
      },
      {
        path: "products/:id",
        element: <ProductEditView />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default routes;
