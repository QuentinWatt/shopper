import { shopperApi } from "@/clients/shopperApi";
import Product from "@/models/Product";

const fetchProductRequest = async (
  id: number
): Promise<{ product: Product | null }> => {
  let product = null;

  try {
    const response = await shopperApi.get(`/products/${id}`);
    product = response.data.data;
  } catch {
    // console.log(error);
  }

  return {
    product,
  };
};

export default fetchProductRequest;
