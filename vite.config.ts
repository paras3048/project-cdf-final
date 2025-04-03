import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],

  root: ".", // ✅ Keep the root at the project level

  build: {
    outDir: "dist", // ✅ Ensure the build output is in 'dist'
    emptyOutDir: true, // ✅ Clears 'dist' before building
  },

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // ✅ Cleaner imports
    },
  },

  optimizeDeps: {
    exclude: ["lucide-react"], // ✅ Keep exclusions
  },

  css: {
    postcss: path.resolve(__dirname, "postcss.config.js"), // ✅ Ensure correct PostCSS path
  },
});
