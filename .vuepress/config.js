module.exports = {
  title: 'danielmlc',
  description: '马龙昌的博客',
  port: 8066, //端口
  dest: 'docs',
  base:'/blog/',
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
      { text: '聊聊工作', link: '/work/' },
      { text: '谈谈生活', link: '/everything/'},
      { text: '我', link: '/me/'  },
      { text: 'GitHub', link: 'https://github.com/danielmlc/'  },
    ],
    sidebar: {
      '/work/': [ 
        {
          title: '前端知识集',
          collapsable: true,
          children: [
            'frontEnd/hellovuepress',
          ]
        },
        {
          title: '服务器知识集',
          collapsable: true,
          children: [
          ]
        },
        {
          title: '其他',
          collapsable: true,
          children: [
          ]
        },
      ],
      '/everything/': [
        {
          title: '文章',
          collapsable: true,
          children: [
          ]
        },
        {
          title: '记录',
          collapsable: true,
          children: [
          ]
        }
      ]
    },
   }
  }
