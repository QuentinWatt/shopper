import { createContext } from "react";
import Product from "@/models/Product";

interface ProductsContextInterface {
  products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
}

const initialValue: ProductsContextInterface = {
  products: [],
  setProducts: () => {},
};

const ProductsContext = createContext(initialValue);

export default ProductsContext;
