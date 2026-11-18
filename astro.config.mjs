// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://driespieters.com",
  build: {
    // Page is tiny: inline CSS so nothing blocks rendering
    inlineStylesheets: "always",
  },
  image: {
    responsiveStyles: true,
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
