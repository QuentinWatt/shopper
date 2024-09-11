import Product from "@/models/Product";
import { createContext } from "react";

interface ProductEditContextInterface {
  product: Product | null;
  setProduct: React.Dispatch<React.SetStateAction<Product | null>>;
  isFetching: boolean;
  setFetching: React.Dispatch<React.SetStateAction<boolean>>;
}

const initialState: ProductEditContextInterface = {
  product: null,
  isFetching: false,
  setProduct: () => {},
  setFetching: () => {},
};

export const ProductEditContext = createContext(initialState);

export default ProductEditContext;
