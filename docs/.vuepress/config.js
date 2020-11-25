/*
 * @Description: 未描述
 * @Author: danielmlc
 * @Date: 2020-02-03 17:47:35
 * @LastEditTime: 2020-07-13 09:16:35
 */

module.exports = {
  title: '易龙软件开发文档',
  description: 'YLSoft Work Document',
  port: 8066, 
  base: '/YlDocument/',
  head: [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  themeConfig: {
    logo: '/img/logo.png',
    search: true,
    searchMaxSuggestions: 10,
    lastUpdated: 'Last Updated',
    smoothScroll: true,
    displayAllHeaders: true,
    nav: [
      { text: '首页', link: '/' },
      {
        text: '开发规范',
        items: [
          { text: '基础规范', link: '/base/base-rules/' },
          { text: '前端规范', link: '/front/front-rules/' },
          { text: '服务端规范', link: '/service/service-rules/' }
        ]
      },
      { text: '基础设施', link: '/basic/facilities'},
      {
        text: '数据库脚本',
        items: [
          { text: '物资基础数据', link: '/sql/cbaseinfo/' },
          { text: '物资实物量管控', link: '/sql/mquantity/' },
          { text: '物资账务管理', link: '/sql/maccount/' },
          { text: '混凝土核算系统', link: '/sql/concrete/' }
        ]
      },
      { text: '环境配置', link: '/daily/editor'},
      { text: '技术扩展', link: '/extend/markdown'},
      { text: 'github', link: 'https://github.com/YLSoftWorkGroup/YlDocument'  },
    ],
    sidebarDepth: 4,
    sidebar: {
      '/base/': [ 
        'base-rules',
      ],
      '/basic/': [ 
        'facilities',
      ],
      '/front/': [ 
        'front-rules',
      ],
      '/webapp/': [ 
        'webapp-rules',
      ],
      '/service/': [ 
        'service-rules',
      ],
      '/sql/': [ 
        'cbaseinfo',
        'mquantity',
        'maccount',
        'concrete',
      ],
      '/daily/': [ 
        'editor',
        'editor',
        'npm-use',
      ],
      '/extend/': [
        'markdown',
        'git'
      ],
    },
  },
  markdown: {
    lineNumbers: true
  },
  plugins: [
    '@vuepress/back-to-top',
    '@vuepress/medium-zoom'
  ]
  }
