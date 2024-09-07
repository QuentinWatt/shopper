import { render, screen, waitFor } from "@testing-library/react";
import ProductsView from "./ProductsView";
import { MemoryRouter } from "react-router-dom";

vi.mock("@/requests/products/fetchProductsRequest", () => ({
  __esModule: true,
  default: vi.fn().mockResolvedValue([
    {
      id: 1,
      name: "Candle",
      description: "candle description",
      price_cents: "10000",
    },
    {
      id: 2,
      name: "Coffee Cup",
      description: "coffee description",
      price_cents: "20000",
    },
  ]),
}));

describe("ProductsView", () => {
  it("has the correct h1", async () => {
    render(
      <MemoryRouter>
        <ProductsView />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(
        screen.getByRole("heading", { level: 1, name: /Products/i })
      ).toBeInTheDocument();
    });
  });

  it("has a list of products", async () => {
    render(
      <MemoryRouter>
        <ProductsView />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByText(/candle/i)).toBeInTheDocument();
      expect(screen.getByText(/coffee cup/i)).toBeInTheDocument();
    });
  });
});
