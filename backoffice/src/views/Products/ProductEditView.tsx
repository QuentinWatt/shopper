import ProductEditForm from "@/components/products/ProductEditForm";
import ProductEditProvider from "@/providers/products/ProductEditProvider";
import React from "react";
import { useParams } from "react-router-dom";

const ProductEditView: React.FC = () => {
  const { id } = useParams();

  return (
    <div className="container mx-auto my-6">
      <h1 className="font-bold text-2xl mb-5">Edit Product</h1>

      {id !== undefined && (
        <ProductEditProvider productId={Number(id)}>
          <ProductEditForm />
        </ProductEditProvider>
      )}
    </div>
  );
};

export default ProductEditView;
