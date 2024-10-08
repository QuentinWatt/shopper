import { render, screen } from "@testing-library/react";
import ProductEditView from "./ProductEditView";
import { MemoryRouter } from "react-router-dom";

describe("ProductView", () => {
  it("has the correct h1", () => {
    render(
      <MemoryRouter>
        <ProductEditView />
      </MemoryRouter>
    );

    expect(
      screen.getByRole("heading", { level: 1, name: /Edit Product/i })
    ).toBeInTheDocument();
  });
});
