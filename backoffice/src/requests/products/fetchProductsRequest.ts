import { shopperApi } from "@/clients/shopperApi";

const fetchProductsRequest = async () => {
  let products = [];
  try {
    const response = await shopperApi.get("/products");
    products = response.data.data;
  } catch (error: unknown) {
    console.log(error);
  }

  return products;
};

export default fetchProductsRequest;
