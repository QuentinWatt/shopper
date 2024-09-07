import { render, screen, waitFor } from "@testing-library/react";
import ProductsView from "./ProductsView";
import { MemoryRouter } from "react-router-dom";

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
