// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://www.docs-test.hostari-labs.com",
  server: {
    allowedHosts: true,
    host: true,
  },
  integrations: [
    starlight({
      title: "Navegante Docs",
      social: [
        {
          icon: "x.com",
          label: "x.com",
          href: "https://x.com/navegantedotapp",
        },
      ],
      sidebar: [
        {
          label: "Get Started",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Start Here", slug: "get-started" },
          ],
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
    }),
  ],
});
