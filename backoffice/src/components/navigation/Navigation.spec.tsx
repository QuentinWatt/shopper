import { render, screen } from "@testing-library/react";
import Navigation from "./Navigation";
import { MemoryRouter } from "react-router-dom";

describe("Navigation", () => {
  it("Contains a logo", () => {
    render(
      <MemoryRouter>
        <Navigation />
      </MemoryRouter>
    );

    expect(screen.getByTestId("shopper-square-logo")).toBeInTheDocument();
  });

  it("Contains the top level links", () => {
    render(
      <MemoryRouter>
        <Navigation />
      </MemoryRouter>
    );

    const productsLink = screen.getByRole("link", { name: /products/i });
    expect(productsLink).toBeInTheDocument();
    expect(productsLink).toHaveAttribute("href", "/products");
  });
});
