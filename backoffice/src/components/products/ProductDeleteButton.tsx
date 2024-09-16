import React, { ReactNode, useContext, useState } from "react";
import Button from "../shared/Button";
import { shopperApi } from "@/clients/shopperApi";
import { useToast } from "../shared/toasts/ToastContext";
import ProductEditContext from "@/providers/products/ProductEditContext";
import { useNavigate } from "react-router-dom";

type ProductDeleteButton = {
  children?: ReactNode;
  redirect?: boolean;
  redirectRoute?: string;
};

const ProductDeleteButton: React.FC<ProductDeleteButton> = ({
  children,
  redirect = true,
  redirectRoute = "/products",
}) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { product } = useContext(ProductEditContext);
  const { addToast } = useToast();

  const handleDelete = async () => {
    setIsLoading(true);
    try {
      await shopperApi.delete(`products/${product!.id}`);
      if (redirect) navigate(redirectRoute);
      addToast("Product Deleted", "success");
    } catch {
      addToast("The was an error", "error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      autoComplete="off"
      onSubmit={(e) => {
        e.preventDefault();
        handleDelete();
      }}
    >
      {children ? (
        children
      ) : (
        <Button
          type="submit"
          loading={isLoading}
          className="w-full bg-red-400 hover:bg-red-500 mt-3"
        >
          Delete
        </Button>
      )}
    </form>
  );
};

export default ProductDeleteButton;
