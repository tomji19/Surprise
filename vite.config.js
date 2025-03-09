import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/Surprise/", // Adjust to your Vercel deployment path, if needed
  plugins: [react()],
});