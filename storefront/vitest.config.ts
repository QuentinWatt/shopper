import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  test: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
    environment: "jsdom",
    globals: true,
    setupFiles: "./tests/setup.ts",
  },
});
