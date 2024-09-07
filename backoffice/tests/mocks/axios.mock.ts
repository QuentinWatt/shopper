import { vi } from "vitest";
import axios from "axios";

// Mock axios methods
vi.mock("axios");
axios.get = vi.fn().mockResolvedValue({ data: { foo: "bar" } });
axios.post = vi.fn().mockResolvedValue({ data: { foo: "bar" } });
axios.put = vi.fn().mockResolvedValue({ data: { foo: "bar" } });
axios.patch = vi.fn().mockResolvedValue({ data: { foo: "bar" } });
axios.delete = vi.fn().mockResolvedValue({ data: { foo: "bar" } });
