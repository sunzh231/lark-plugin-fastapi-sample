import { resolve } from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "frontend"),
    },
  },
  build: {
    manifest: "manifest.json",
    outDir: "templates",
    rollupOptions: {
      input: "frontend/main.js",
    },
  },
});
