import React from "react";
import ProductsList from "@/components/products/ProductsList";
import ProductsProvider from "@/providers/products/ProductsProvider";

const ProductsView: React.FC = () => {
  return (
    <div className="container mx-auto py-6">
      <h1 className="font-bold mb-5 text-2xl">Products</h1>

      <ProductsProvider>
        <ProductsList />
      </ProductsProvider>
    </div>
  );
};

export default ProductsView;
