import { vi } from "vitest";

// Mock axios methods
vi.mock("shopperApi");
vi.mock("@/clients/shopperApi", () => ({
  shopperApi: {
    get: vi.fn(),
    post: vi.fn(),
    put: vi.fn(),
    patch: vi.fn(),
    delete: vi.fn(),
  },
}));
