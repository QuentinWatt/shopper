import React from "react";
import { shopperApi } from "@/clients/shopperApi";
import { TProduct } from "@/models/TProduct";
import FeaturedProductCard from "@/components/products/FeaturedProductCard";
import Link from "next/link";

const fetchFeaturedProducts = async () => {
  try {
    const response = await shopperApi.get("/products");
    return response.data.data;
  } catch {
    return [];
  }
};

const Page: React.FC = async () => {
  const featuredProducts: TProduct[] = await fetchFeaturedProducts();

  return (
    <div className="container mx-auto my-6 px-3">
      <h1 className="font-bold text-2xl">Welcome to the storefront</h1>

      <div className="mt-5 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 items-stretch">
        {featuredProducts.map((product: TProduct) => (
          <Link key={product.id} href={`product/${product.id}`}>
            <FeaturedProductCard product={product} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Page;
