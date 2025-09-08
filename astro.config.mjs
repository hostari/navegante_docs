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
          label: "Start Here",
          items: [
            {
              label: "Welcome to Navegante",
              slug: "welcome",
            },
            {
              label: "Quick Start",
              slug: "quick-start",
            },
          ],
        },
        {
          label: "Features",
          autogenerate: { directory: "features" },
        },
        {
          label: "Framework Guides",
          autogenerate: { directory: "framework-guides" },
        },
        {
          label: "Architecture",
          autogenerate: { directory: "architecture" },
        },
        {
          label: "Reference",
          items: [
            {
              label: "Infrastructure Projects Reference",
              slug: "reference/infrastructure-projects",
            },
            {
              label: "Application Configurations Reference",
              slug: "reference/application-configurations",
            },
            {
              label: "Application Services Reference",
              slug: "reference/application-services",
            },
            {
              label: "Application Deployments Reference",
              slug: "reference/application-deployments",
            },
            {
              label: "Organizations Reference",
              slug: "reference/organizations",
            },
            {
              label: "Role-Based Access Control (RBAC) Reference",
              slug: "reference/organizations",
            },
          ],
        },
      ],
    }),
  ],
});
