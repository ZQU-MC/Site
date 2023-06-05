import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  title: "ZQUMC 砚园工坊",
  titleTemplate: 'ZQUMC 砚园工坊',
  description: "创造属于我们的世界",
  themeConfig: {
    logo: '/logo.svg',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '计划表', link: '/todo' },
      { text: '关于', link: '/about' }
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
      { icon: 'github', link: 'https://github.com/thezqumc' }
    ],
    
    search: {
      provider: 'local'
    },

    editLink: {
      pattern: 'https://github.com/thezqumc/Site/edit/main/docs/:path',
      text: '在 GitHub 编辑此页'
    },

    outlineTitle: '快速导航',

    cleanUrls: 'without-subfolders',
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
