import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});

// server: {
//   proxy: {
//     "/v1": {
//       target: "https://cloud.appwrite.io",
//       changeOrigin: false,
//       rewrite: (path) => path.replace(/^\/v1/, "/v1"),
//     },
//   },
// },
