import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  title: "MuMuAINovel",
  description: "MuMuAINovel项目使用说明小站",
  head: [['link', { rel: 'icon', href: '/logo.svg' }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '简介', link: '/guide/' },
      { text: '教程', link: '/usage/login' },
      { text: '部署', link: '/deployment/docker' },
      { text: '配置', link: '/configuration/' }
    ],

    sidebar: [
      {
        text: 'MuMuAINovel简介',
        collapsed: false,
        items: [
          { text: '项目简介', link: '/guide/' },
          { text: '快速开始', link: '/guide/quick-start' },
        ]
      },
      {
        text: '使用教程',
        collapsed: false,
        items: [
          { text: '登录系统', link: '/usage/login' },
          { text: '配置 AI API', link: '/usage/api-config' },
          { text: '创建项目', link: '/usage/create-project' },
          { text: '项目管理', link: '/usage/project-management' },
          { text: '章节撰写', link: '/usage/writing' }
        ]
      },
      {
        text: '部署指南',
        collapsed: false,
        items: [
          { text: 'Docker 部署', link: '/deployment/docker' },
          { text: '本地开发', link: '/deployment/local' }
        ]
      },
      {
        text: '配置参考',
        collapsed: false,
        items: [
          { text: '配置首页', link: '/configuration/' },
          { text: 'AI 服务', link: '/configuration/ai-services' },
          { text: '用户认证', link: '/configuration/authentication' },
          { text: '高级配置', link: '/configuration/advanced' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    // 中文化配置
    outline: {
      label: '页面导航'
    },
    
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },

    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式'
  }
})
