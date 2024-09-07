import React, { useContext } from "react";
import ProductEditContext from "@/providers/products/ProductEditContext";
import { displayPrice } from "@/helpers/currency";

const ProductEditForm: React.FC = () => {
  const { product, isLoading } = useContext(ProductEditContext);

  if (isLoading || product == null) {
    return <div>fetching product</div>;
  }

  return (
    <form>
      <div>{product.name}</div>
      <div>{product.description}</div>
      <div>{displayPrice(product.price_cents)}</div>
      <div>{product.sku}</div>
    </form>
  );
};

export default ProductEditForm;
