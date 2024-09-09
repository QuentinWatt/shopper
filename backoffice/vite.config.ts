import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src/"),
    },
  },
  server: {
    host: "shopper.test",
    port: 5000, // or any other port
  },
});
