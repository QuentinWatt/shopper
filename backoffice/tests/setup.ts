import { afterEach } from "vitest";
import { cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import "./mocks/axios.mock";
import "./mocks/shopperApi.mock";
import "./mocks/requests/fetchProductsRequest.mock";

// Clean up after tests
afterEach(() => {
  cleanup();
});
