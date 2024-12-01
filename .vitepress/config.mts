import { defineConfigWithTheme } from 'vitepress'
import type { ThemeConfig } from 'vitepress-carbon'
import baseConfig from 'vitepress-carbon/config'

// https://vitepress.dev/reference/site-config
export default defineConfigWithTheme<ThemeConfig>({
  extends: baseConfig,
  title: "Pete Argent 🖖 Web3 Wizard",
  description: "Web3 knowledge and resources for change makers",
  srcDir: 'src',
  // base: '/pedrogrande.github.io/', // if running on github-pages, set repository name here

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about' },
      { text: 'Services', link: '/services' },
      { text: 'Contact', link: '/contact' }
    ],

    search: {
      provider: 'local'
    },
    
    sidebar: [
      {
        text: 'Contents',
        items: [
          { text: 'Home', link: '/' },
          { text: 'About', link: '/about' },
          { text: 'Contact', link: '/contact' }
        ]
      },
      {
        text: 'Services',
        items: [
          { text: 'Strategy Consulting', link: '/services/strategy' },
          { text: 'Implementation', link: '/services/implementation' },
          { text: 'Training', link: '/services/training' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/pedrogrande/' },
      { icon: 'linkedin', link: 'https://linkedin.com/in/peterargent/' }
    ]
  }
})
