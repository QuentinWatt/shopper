import Product from "@/models/Product";
import { createContext } from "react";

interface ProductEditContextInterface {
  product: Product | null;
  setProduct: React.Dispatch<React.SetStateAction<Product | null>>;
  isLoading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const initialState: ProductEditContextInterface = {
  product: null,
  isLoading: false,
  setProduct: () => {},
  setLoading: () => {},
};

export const ProductEditContext = createContext(initialState);

export default ProductEditContext;
