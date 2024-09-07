import { render, screen, waitFor } from "@testing-library/react";
import ProductEditProvider from "./ProductEditProvider";
import fetchProductRequest from "@/requests/products/fetchProductRequest";

describe("ProductEditProvider", () => {
  it("renders with children", async () => {
    render(
      <ProductEditProvider productId={1}>
        <span>child component</span>
      </ProductEditProvider>
    );

    await waitFor(() => {
      expect(screen.getByText(/child component/i)).toBeInTheDocument();
    });
  });

  it("sends a request to fetch product data on render", async () => {
    render(
      <ProductEditProvider productId={1}>
        <span>child component</span>
      </ProductEditProvider>
    );

    await waitFor(() => {
      expect(fetchProductRequest).toHaveBeenCalledWith(1);
    });
  });
});
