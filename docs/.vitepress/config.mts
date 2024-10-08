import { defineConfig } from "vitepress";
import { generateSidebar } from "vitepress-sidebar";
import wikilinks from "markdown-it-wikilinks";
import { withMermaid } from "vitepress-plugin-mermaid";

export default withMermaid({
  ...defineConfig({
    title: "SpellBook",
    titleTemplate: "Explore. Capture. Elevate. 🚀",
    description: "SpellBook",
    head: [
      [
        "script",
        {
          async: "",
          src: "https://www.googletagmanager.com/gtag/js?id=G-KEH7XC8FNF",
        },
      ],
      [
        "script",
        {},
        `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-KEH7XC8FNF');`,
      ],
      ["link", { rel: "icon", href: "/spellbook.png" }],
    ],
    themeConfig: {
      logo: "/spellbook.png",
      nav: [
        {
          text: "MuggleBorn",
          link: "https://muggleborn.dev",
        },
        {
          text: "Changelog",
          link: "https://github.com/jaypancholi94/spellbook/commits/main",
        },
      ],
      sidebar: generateSidebar({
        documentRootPath: "docs/",
        sortMenusByName: true,
      }),
      outline: [2, 3],
      search: {
        provider: "local",
      },
      externalLinkIcon: true,
      socialLinks: [
        { icon: "github", link: "https://github.com/jaypancholi94" },
        { icon: "linkedin", link: "https://www.linkedin.com/in/jay-pancholi" },
        { icon: "instagram", link: "https://www.instagram.com/_jaypancholi_/" },
        { icon: "discord", link: "https://www.discordapp.com/users/w4r10ck" },
        { icon: "facebook", link: "https://www.facebook.com/Jay.D.Pancholi/" },
      ],
    },
    ignoreDeadLinks: true,
    markdown: {
      config: (md) => {
        md.use(
          wikilinks({
            baseURL: "/",
            postProcessPageName: (label) => label.trim().replace(/\s/g, "%20"),
          }),
        );
      },
    },
  }),
  mermaidPlugin: {
    class: "mermaid my-class", // set additional css classes for parent container
  },
});
