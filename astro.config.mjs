// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://driespieters.github.io",
  integrations: [tailwind()],
  experimental: {
    responsiveImages: true,
    svg: true,
  },
});
