import React, { useEffect, useState } from "react";
import ProductsContext from "./ProductsContext";
import Product from "@/models/Product";
import ProductsList from "@/components/products/ProductsList";
import fetchProductsRequest from "@/requests/products/fetchProductsRequest";

const ProductsView: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      setProducts(await fetchProductsRequest());
    };

    fetchProducts();
  }, []);

  return (
    <ProductsContext.Provider value={{ products, setProducts }}>
      <div className="container mx-auto py-6">
        <h1 className="font-bold mb-5 text-2xl">Products Page</h1>

        <ProductsList />
      </div>
    </ProductsContext.Provider>
  );
};

export default ProductsView;
