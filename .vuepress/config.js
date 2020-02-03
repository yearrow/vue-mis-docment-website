/*
 * @Description: 未描述
 * @Author: danielmlc
 * @Date: 2020-02-03 17:47:35
 * @LastEditTime : 2020-02-03 22:09:34
 */
module.exports = {
  title: '易龙软件开发文档 ',
  description: 'YLSoft Work Document',
  port: 8066, 
  dest: 'docs',
  base:'/docs/',
  head: [
    ['link', { rel: 'icon', href: '/img/favicon.ico' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: `/img/icons/Icon-152.png` }],
    ['meta', { name: 'msapplication-TileImage', content: '/img/icons/Icon-120.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  serviceWorker: true,
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '前端规范', link: '/front/' },
      { text: '移动端规范', link: '/webApp/'},
      { text: '服务端规范', link: '/service/'},
      { text: '技术扩展', link: '/more/'},
      { text: 'GitHub', link: 'https://github.com/YLSoftWorkGroup'  },
    ],
    sidebarDepth :3,
    sidebar: {
      '/front/': [ 
        'frontRules',
        'globalFun',
        'directive',
        'components',
        'renderComs',
        'pageConf',
        'demo',
        'moduleConf',
        'reportConf',
      ],
      '/webApp/': [ 
      ],
      '/service/': [
        'service'
      ],
      '/more/': [
        'markdown',
        'git'
      ],
      // 三级栏目的配置方式
      // '/more/': [
      //   {
      //     title: '文档写作',
      //     collapsable: true,
      //     children: [
      //       'markdown/',
      //     ]
      //   },
      //     {
      //       title: 'git知识',
      //       collapsable: true,
      //       children: [
      //         'git/',
      //       ]
      //     },
         
      // ],
    },
   }
  }
