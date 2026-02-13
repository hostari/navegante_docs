// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
    site: "https://docs.navegante.app",
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
                    label: "Deployment Quirks",
                    items: [
                        {
                            label: "Static Site Generators",
                            slug: "",
                        },
                        {
                            label: "Javascript-based Frameworks",
                            slug: "",
                        },
                    ],
                },
                // {
                //     label: "Architecture",
                //     autogenerate: { directory: "architecture" },
                // },
                {
                    label: "Github App",
                    items: [
                        {
                            label: "Github Integration",
                            slug: "",
                        },
                        {
                            label: "Troubleshooting",
                            slug: "",
                        },
                    ],
                },
                {
                    label: "Reference",
                    items: [
                        {
                            label: "Compute Plans",
                            slug: "reference/compute-plans",
                        },
                        {
                            label: "Infrastructure Projects",
                            slug: "reference/infrastructure-projects",
                        },
                        {
                            label: "Application Configurations ",
                            slug: "reference/application-configurations",
                        },
                        {
                            label: "Application Services",
                            slug: "reference/application-services",
                        },
                        {
                            label: "Application Deployments",
                            slug: "reference/application-deployments",
                        },
                        {
                            label: "Organizations",
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
