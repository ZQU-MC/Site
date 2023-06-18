import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/',
  lang: 'zh-CN',
  title: "ZQUMC 砚园工坊",
  titleTemplate: 'ZQUMC砚园工坊',
  description: "创造属于我们的世界",
  themeConfig: {
    logo: '/logo.svg',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '博客', link: 'https://blog.zqumc.cn/' },
      { text: '关于', link: '/about' },
      {
        text: '更多',
        items: [
          { text: 'ZQUMC 运营组', link: '/team' },
          { text: '支持我们', link: '/support' },
        ]
      },
    ],
/*    
    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],
*/
    socialLinks: [
      { icon: 'github', link: 'https://github.com/zqu-mc' }
    ],
    
    search: {
      provider: 'local'
    },

    editLink: {
      pattern: 'https://github.com/thezqumc/site/edit/main/docs/:path',
      text: '页面反馈'
    },

    outlineTitle: '快速导航',

    cleanUrls: true,
    lastUpdated: true,
    lastUpdatedText: '上次更新',
    docFooter: {
      prev: '上一节',
      next: '下一节'
    },

    markdown: {
      lineNumbers: true
    },

    footer: {
      message: '本组织与 肇庆学院 没有从属关系。',
      copyright: 'Copyright © 2023 ZQUMC. | Made with ❤️ by 9527.'
    },
  }
})
