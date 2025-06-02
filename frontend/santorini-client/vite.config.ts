import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path"; // ⬅️ Needed for alias resolution

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@tilemap/CompositeTilemap": path.resolve(
        __dirname,
        "/src/pixijs/vendor/dist/index.js",
      ),
    },
  },
});
