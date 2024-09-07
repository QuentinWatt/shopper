import { vi } from "vitest";

vi.mock("@/requests/products/fetchProductRequest", () => ({
  __esModule: true,
  default: vi.fn().mockResolvedValue({
    id: 1,
    sku: "1235",
    name: "My mock Candle",
    description: "mock candle description",
    price_cents: "10000",
    created_at: "",
    updated_at: "",
  }),
}));
