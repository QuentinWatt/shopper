import { render, screen, waitFor } from "@testing-library/react";
import ProductsProvider from "./ProductsProvider";
import fetchProductsRequest from "@/requests/products/fetchProductsRequest";

describe("ProductsProvider", () => {
  it("renders its children", async () => {
    render(
      <ProductsProvider>
        <span>Some content here.</span>
      </ProductsProvider>
    );

    await waitFor(() => {
      expect(screen.getByText(/Some content here./i)).toBeInTheDocument();
    });
  });

  it("fetches products on render", async () => {
    render(
      <ProductsProvider>
        <span>Content</span>
      </ProductsProvider>
    );

    await waitFor(() => {
      expect(fetchProductsRequest).toHaveBeenCalled();
    });
  });
});
