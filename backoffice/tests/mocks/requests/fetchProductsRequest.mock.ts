import { vi } from "vitest";

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
