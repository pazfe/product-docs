// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "emnify Docs",
  tagline: "Solutions for your deployments",
  url: "https://docs.emnify.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "emnify", // Usually your GitHub org/user name.
  projectName: "product-docs", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "/",

          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //  "https://github.com/emnify/product-docs",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //  "https://github.com/emnify/product-docs",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Developer Hub",
        logo: {
          alt: "emnify Logo",
          src: "img/logo.png",
        },
        items: [
          {
            href: "https://www.emnify.com/developer-blog",
            position: "left",
            label: "Blog",
          },
          {
            label: "emnify API",
            href: "https://cdn.emnify.net/api/doc/swagger.html?__hstc=115846617.4e595f58851491bb8576507ce2561f79.1670194662635.1671607748521.1671620155218.32&__hssc=115846617.14.1671620155218&__hsfp=3017379904",
            position: "left",
          },
          {
            label: "Solutions by Industry",
            href: "https://www.emnify.com/industries",
            position: "left",
          },
          {
            label: "Change Logs",
            href: "https://cdn.emnify.net/api/doc/changelog.html?__hstc=115846617.4e595f58851491bb8576507ce2561f79.1670194662635.1671607748521.1671620155218.32&__hssc=115846617.21.1671620155218&__hsfp=3017379904",
            position: "right"
          },
          // { to: "/blog", label: "Change Log", position: "right" },
          {
            href: "https://github.com/emnify/product-docs/#readme",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Tutorial",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Stack Overflow",
                href: "https://stackoverflow.com/questions/tagged/docusaurus",
              },
              {
                label: "Discord",
                href: "https://discordapp.com/invite/docusaurus",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/docusaurus",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/facebook/docusaurus",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
