import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/", // Should be "/" for surprise-lilac.vercel.app root
  plugins: [react()],
});