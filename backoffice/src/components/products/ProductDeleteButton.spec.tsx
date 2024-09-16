import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import ProductDeleteButton from "./ProductDeleteButton";
import { MemoryRouter } from "react-router-dom";
import { shopperApi } from "@/clients/shopperApi";
import ProductEditContext from "@/providers/products/ProductEditContext";

describe("ProductDeleteButton", () => {
  const setProduct = vi.fn();
  const setFetching = vi.fn();
  const isFetching = false;
  const product = {
    id: 1,
    name: "something",
    description: "",
    sku: "123",
    price_cents: "2000",
  };

  beforeEach(() => {
    render(
      <MemoryRouter>
        <ProductEditContext.Provider
          value={{ product, isFetching, setFetching, setProduct }}
        >
          <ProductDeleteButton />
        </ProductEditContext.Provider>
      </MemoryRouter>
    );
  });

  it("it renders with a delete button", () => {
    expect(screen.getByRole("button", { name: /delete/i })).toBeInTheDocument();
  });

  it("starts loading when the delete button is clicked", async () => {
    const button = screen.getByRole("button", { name: /delete/i });
    fireEvent.click(button);
    await waitFor(() => {
      expect(screen.queryByTestId("spinning-loader")).toBeInTheDocument();
    });
  });

  it("sends an axios request to delete the product", async () => {
    const button = screen.getByRole("button", { name: /delete/i });
    fireEvent.click(button);
    await waitFor(() => {
      expect(shopperApi.delete).toHaveBeenCalledWith("products/1");
    });
  });
});
