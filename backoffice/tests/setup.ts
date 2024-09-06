import { afterEach, vi } from "vitest";
import { cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import axios from "axios";

// Axios mocks
vi.mock("axios");
axios.get = vi.fn().mockResolvedValue({ data: { foo: "bar" } });
axios.post = vi.fn().mockResolvedValue({ data: { foo: "bar" } });

// Clean up after tests
afterEach(() => {
  cleanup();
});
