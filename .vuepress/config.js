module.exports = {
  "title": "puppet-blog",
  "description": "The Puppet's Blog",
  "dest": "public",
  "head": [
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
  "theme": "reco",
  "themeConfig": {
    "keyPage": {
      color: '#0274FE', // 登录页动画球的颜色
      lineColor: '#0274FE' // 登录页动画线的颜色
    },
    // 导航
    "nav": [
      {
        "text": "不起眼的主页",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "好像是时间线耶",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "瞧瞧文档孩子吧",
        "icon": "reco-message",
        "items": [
          {
            "text": "vuepress-reco",
            "link": "/docs/theme-reco/"
          }
        ]
      },
      {
        "text": "没有失联啦",
        "icon": "reco-message",
        "items": [
          {
            "text": "GitHub",
            "link": "https://github.com/coldzmj",
            "icon": "reco-github"
          }
        ]
      }
    ],
    "sidebar": {
      "/docs/theme-reco/": [
        "",
        "theme",
        "plugin",
        "api"
      ]
    },
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2, // 在导航栏菜单中所占的位置，默认2
        "text": "分类"  // 默认文案 “分类”
      },
      "tag": {
        "location": 3,  // 在导航栏菜单中所占的位置，默认3
        "text": "标签" // 默认文案 “标签”
      },
      "socialLinks": [     // 信息栏展示社交信息
        // { "icon": 'reco-github', "link": 'https://github.com/recoluan' },
        // { "icon": 'reco-npm', "link": 'https://www.npmjs.com/~reco_luan' },
        { "icon": 'reco-qq', "link": 'http://wpa.qq.com/msgrd?v=3&uin=1048858619&site=qq&menu=yes' }
      ]
    },
    "friendLink": [
      {
        "title": "午后南杂",
        "desc": "Enjoy when you can, and endure when you must.",
        "email": "1156743527@qq.com",
        "link": "https://www.recoluan.com"
      },
      {
        "title": "vuepress-theme-reco",
        "desc": "A simple and beautiful vuepress Blog & Doc theme.",
        "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        "link": "https://vuepress-theme-reco.recoluan.com"
      }
    ],

    "logo": "headImg.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "PuppetSmall",
    "authorAvatar": "headImg.png",
    "record": "xxxx",
    "startYear": "2022",
    valineConfig: {
      appId: 'M4tNaSXvw7TBGHNOPnSkPgN8-gzGzoHsz',
      appKey: 'd4JCfewzvF59tvTYJHKMq96z'
    }
  },
  "markdown": {
    "lineNumbers": true
  },
  "plugins": [
    ["sakura", {
      num: 20,  // 默认数量
      show: true, //  是否显示
      zIndex: -1,   // 层级
      img: {
        replace: false,  // false 默认图 true 换图 需要填写httpUrl地址
        httpUrl: '...'     // 绝对路径
      }
    }],

    [
      "vuepress-plugin-cursor-effects",
      {
        "size": 2,                    // size of the particle, default: 2
        "shape": 'circle',  // shape of the particle, default: 'star'
        "zIndex": 999999999           // z-index property of the canvas, default: 999999999
      }
    ],

    ["ribbon-animation", {
      size: 90,   // 默认数据
      opacity: 0.3,  //  透明度
      zIndex: -1,   //  层级
      opt: {
        // 色带HSL饱和度
        colorSaturation: "80%",
        // 色带HSL亮度量
        colorBrightness: "60%",
        // 带状颜色不透明度
        colorAlpha: 0.65,
        // 在HSL颜色空间中循环显示颜色的速度有多快
        colorCycleSpeed: 6,
        // 从哪一侧开始Y轴 (top|min, middle|center, bottom|max, random)
        verticalPosition: "center",
        // 到达屏幕另一侧的速度有多快
        horizontalSpeed: 200,
        // 在任何给定时间，屏幕上会保留多少条带
        ribbonCount: 2,
        // 添加笔划以及色带填充颜色
        strokeSize: 0,
        // 通过页面滚动上的因子垂直移动色带
        parallaxAmount: -0.5,
        // 随着时间的推移，为每个功能区添加动画效果
        animateSections: true
      },
      ribbonShow: false, //  点击彩带  true显示  false为不显示
      ribbonAnimationShow: true  // 滑动彩带
    }],

    [
      //动态标题 先安装在配置， npm install vuepress-plugin-dynamic-title --save
      "dynamic-title",
      {
        showIcon: "/logo.png",
        showText: "(/≧▽≦/)你来啦！",
        hideIcon: "/failure.ico",
        hideText: "(●—●)喔哟，崩溃啦！",
        recoverTime: 2000
      }
    ],

    ["vuepress-plugin-nuggets-style-copy", {
      copyText: "复制代码",  //vuepress复制粘贴提示插件P 先安装在配置 npm install vuepress-plugin-nuggets-style-copy --save
      tip: {
        content: "复制成功!"
      }
    }],
  ],
}