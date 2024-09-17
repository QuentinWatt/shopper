import { TProduct } from "@/models/TProduct";
import React from "react";

const FeaturedProductCard: React.FC<{
  product: TProduct;
}> = ({ product }) => {
  return (
    <div className="border rounded-lg overflow-hidden h-full">
      <div className="h-48 bg-gray-300" />
      <div className="p-3">
        <h3>{product.name}</h3>
        <div className="font-bold">{product.price_cents}</div>
      </div>
    </div>
  );
};

export default FeaturedProductCard;
