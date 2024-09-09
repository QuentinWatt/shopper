import React, { ReactNode, useEffect, useState } from "react";
import ProductEditContext from "./ProductEditContext";
import Product from "@/models/Product";
import fetchProductRequest from "@/requests/products/fetchProductRequest";

const ProductEditProvider: React.FC<{
  productId: number;
  children?: ReactNode;
}> = ({ productId, children }) => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const fetch = async (id: number) => {
      const { product } = await fetchProductRequest(id);
      setProduct(product);
    };

    fetch(productId);
  }, [productId]);

  return (
    <ProductEditContext.Provider
      value={{ product, setProduct, isLoading, setLoading }}
      key={product?.id ?? 0}
    >
      {children}
    </ProductEditContext.Provider>
  );
};

export default ProductEditProvider;
