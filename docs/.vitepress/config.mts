import { defineConfig } from "vitepress";
import { generateSidebar } from "vitepress-sidebar";
import wikilinks from "markdown-it-wikilinks";

export default defineConfig({
  title: "SpellBook",
  titleTemplate: "Explore. Capture. Elevate. 🚀",
  description: "SpellBook",
  head: [["link", { rel: "icon", href: "/spellbook.png" }]],
  themeConfig: {
    logo: "/spellbook.png",
    nav: [
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
});
