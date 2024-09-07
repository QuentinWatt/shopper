import React, { ReactNode, useEffect, useState } from "react";
import ProductsContext from "./ProductsContext";
import fetchProductsRequest from "@/requests/products/fetchProductsRequest";
import Product from "@/models/Product";

const ProductsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      setProducts(await fetchProductsRequest());
    };

    fetchProducts();
  }, []);

  return (
    <ProductsContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
