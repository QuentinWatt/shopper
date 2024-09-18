import { render, screen } from "@testing-library/react";
import Home from "./page"; // adjust path to the Page component
import { shopperApi } from "@/clients/shopperApi";
import { TProduct } from "@/models/TProduct";
import { vi } from "vitest";

describe("Page Component with products", () => {
  vi.mock("@/clients/shopperApi", () => ({
    shopperApi: {
      get: vi.fn(),
    },
  }));

  beforeEach(async () => {
    const mockProducts: TProduct[] = [
      {
        id: 1,
        name: "Product 1",
        sku: "123",
        price_cents: "20000",
        description: "Description 1",
        created_at: "",
        updated_at: "",
      },
      {
        id: 2,
        name: "Product 2",
        sku: "123",
        price_cents: "30000",
        description: "Description 2",
        created_at: "",
        updated_at: "",
      },
    ];

    (shopperApi.get as vi.Mock).mockResolvedValue({
      data: { data: mockProducts },
    });

    render(await Home({}));
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  test("displays featured products after loading", async () => {
    expect(screen.getByText("Welcome to the storefront")).toBeInTheDocument();

    expect(screen.getByText("Product 1")).toBeInTheDocument();
    expect(screen.getByText("Product 2")).toBeInTheDocument();
  });
});
