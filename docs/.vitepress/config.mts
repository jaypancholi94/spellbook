import { defineConfig } from 'vitepress';
import { generateSidebar } from 'vitepress-sidebar';
import wikilinks from 'markdown-it-wikilinks';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'SkipTheSearch',
  titleTemplate: 'Discover. Document. Empower. 💪🏼',
  description: 'A VitePress Site',
  head: [['link', { rel: 'icon', href: '/detective.png' }]],
  themeConfig: {
    logo: '/detective.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/About' },
      { text: 'Changelog', link: 'https://github.com/jaypancholi94/SkipTheSearch/commits/main' },
    ],
    sidebar: generateSidebar({
      documentRootPath: 'docs/',
    }),
    search: {
      provider: 'local',
    },
    externalLinkIcon: true,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/jaypancholi94' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/jay-pancholi' },
      { icon: 'instagram', link: 'https://www.instagram.com/_jaypancholi_/' },
      { icon: 'discord', link: 'https://www.discordapp.com/users/w4r10ck' },
    ],
  },
  ignoreDeadLinks: true,
  markdown: {
    config: (md) => {
      md.use(
        wikilinks({
          baseURL: '/',
          postProcessPageName: (label) => label.trim().replace(/\s/g, '%20'),
        })
      );
    },
  },
});
