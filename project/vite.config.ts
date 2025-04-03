import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],

  root: ".", // ✅ Set root to current directory

  build: {
    outDir: "dist", // ✅ Output build files to 'dist'
    emptyOutDir: true, // ✅ Clear 'dist' before every build
  },

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // ✅ Allows cleaner imports using "@"
    },
  },

  optimizeDeps: {
    exclude: ["lucide-react"], // ✅ Excludes lucide-react from pre-bundling
  },

  css: {
    postcss: path.resolve(__dirname, "postcss.config.js"), // ✅ Ensures PostCSS works correctly
  },
});
