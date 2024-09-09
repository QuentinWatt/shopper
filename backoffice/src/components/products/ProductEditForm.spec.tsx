import ProductEditContext from "@/providers/products/ProductEditContext";
import { fireEvent, render, screen } from "@testing-library/react";
import ProductEditForm from "./ProductEditForm";

describe("Product Edit Form", () => {
  const product = {
    id: 1,
    name: "Tranquil Treasures Candle Set",
    description: "Quo fugit omnis sint consequuntur.",
    price_cents: "5500",
    sku: "L478",
  };
  const setProduct = vi.fn();
  const isLoading = false;
  const setLoading = vi.fn();

  beforeEach(() => {
    render(
      <ProductEditContext.Provider
        value={{ product, setProduct, isLoading, setLoading }}
      >
        <ProductEditForm />
      </ProductEditContext.Provider>
    );
  });

  it("has a 'Name' input", () => {
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/name/i).closest("input")).toBeInTheDocument();
  });

  it("can edit the name field", async () => {
    const input = screen.getByLabelText(/name/i).closest("input")!;
    expect(input.value).not.toBe("my new product name");
    fireEvent.change(input, { target: { value: "my new product name" } });
    expect(input.value).toBe("my new product name");
  });

  it("has a 'Description' textarea", () => {
    expect(screen.getByLabelText(/description/i)).toBeInTheDocument();
    expect(
      screen.getByLabelText(/description/i).closest("textarea")
    ).toBeInTheDocument();
  });

  it("can edit the decription field", () => {
    const field = screen.getByLabelText(/description/i).closest("textarea")!;
    expect(field.value).not.toBe("another description");
    fireEvent.change(field, { target: { value: "another description" } });
    expect(field.value).toBe("another description");
  });

  it("has an 'SKU' input", () => {
    expect(screen.getByLabelText(/sku/i)).toBeInTheDocument();
  });

  it("has an 'Price' input", () => {
    expect(screen.getByLabelText(/price/i)).toBeInTheDocument();
  });
});
