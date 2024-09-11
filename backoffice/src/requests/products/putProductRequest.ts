import { shopperApi } from "@/clients/shopperApi";
import Product from "@/models/Product";
import BaseErrorResponse from "@/models/responses/BaseErrorResponse";
import { AxiosError } from "axios";

type PutProductResponse = {
  product: Product | null;
  responseError: BaseErrorResponse | null;
};

const putPostProductRequest = async (
  product: Product
): Promise<PutProductResponse> => {
  let newProduct: Product | null = null;
  let responseError: BaseErrorResponse | null = null;

  try {
    const response = await shopperApi.put(`products/${product.id}`, product);
    newProduct = response.data.data;
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      responseError = error;
    } else {
      responseError = { message: "There was an error" };
    }
  }

  return {
    product: newProduct,
    responseError,
  };
};

export default putPostProductRequest;
