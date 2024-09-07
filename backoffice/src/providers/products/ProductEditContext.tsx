import Product from "@/models/Product";
import { createContext } from "react";

interface ProductEditContextInterface {
  product: Product | null;
  setProduct: React.Dispatch<React.SetStateAction<Product | null>>;
}

const initialState: ProductEditContextInterface = {
  product: null,
  setProduct: () => {},
};

export const ProductEditContext = createContext(initialState);

export default ProductEditContext;
