import { displayPrice } from "@/helpers/currency";
import Product from "@/models/Product";
import ProductsContext from "@/views/Products/ProductsContext";
import React, { useContext } from "react";

const ProductsList: React.FC = () => {
  const { products }: { products: Product[] } = useContext(ProductsContext);

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id} className="border rounded p-3 mb-2 bg-white">
          <h1 className="font-bold">{product.name}</h1>
          <div>{displayPrice(product.price_cents)}</div>
        </li>
      ))}
    </ul>
  );
};

export default ProductsList;
