import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Base path for GitHub Pages subdirectory deployment.
// When hosting at https://<user>.github.io/prosthetics-hero/, assets need this prefix.
const repoName = "prosthetics-hero";

export default defineConfig({
  plugins: [react()],
  base: `/${repoName}/`,
});
