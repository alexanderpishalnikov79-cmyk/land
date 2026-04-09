import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const base = process.env.GITHUB_ACTIONS ? "/-/" : "/";

export default defineConfig({
  base,
  plugins: [react(), tailwindcss()],
});
