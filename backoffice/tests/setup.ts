import { afterEach } from "vitest";
import { cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import "./mocks/shopperApi.mock";
import "./mocks/requests/fetchProductsRequest.mock";
import "./mocks/requests/fetchProductRequest.mock";

// Clean up after tests
afterEach(() => {
  cleanup();
});
