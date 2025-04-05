import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Amit's Blog",
  description: "A place where I blob about writing code and building cool stuff.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Articles', link: '/ios-cache-handler' }
    ],

    sidebar: [
      {
        text: 'iOS Dev',
        items: [
          { text: 'iOS Cache Handler', link: '/ios-cache-handler' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/amitpdev' }
    ]
  }
})
