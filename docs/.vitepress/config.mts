import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Amit's Blog",
  description: "A place where I blog about writing code and building cool stuff.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Articles', link: '/ios-cache-handler' },
      { text: 'My Projects', link: '/my-projects' }
    ],

    sidebar: [
      {
        text: 'Articles',
        items: [
          { text: 'iOS Cache Handler', link: '/ios-cache-handler' },
        ]
      },
      {
        text: 'Projects',
        items: [
          { text: 'My Projects & Open Source', link: '/my-projects' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/amitpdev' }
    ]
  }
})
