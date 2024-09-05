import { displayPrice } from "@/helpers/currency";
import Product from "@/models/Product";
import ProductsContext from "@/views/Products/ProductsContext";
import React, { useContext } from "react";
import { Link } from "react-router-dom";

const ProductsList: React.FC = () => {
  const { products }: { products: Product[] } = useContext(ProductsContext);

  return (
    <ul className="grid gap-2">
      {products.map((product) => (
        <li key={product.id}>
          <Link
            to={`/products/${product.id}`}
            className="flex border border-gray-300 rounded p-3 bg-white"
          >
            <h3 className="font-bold mr-3">{product.name}</h3>
            <div>{displayPrice(product.price_cents)}</div>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ProductsList;
