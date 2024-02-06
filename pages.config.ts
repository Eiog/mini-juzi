import { defineUniPages } from '@uni-helper/vite-plugin-uni-pages'

export default defineUniPages({
  easycom: {
    autoscan: true,
    custom: {
    },
  },
  pages: [],
  middleware: ['global'],
  globalStyle: {
    backgroundColor: '@bgColor',
    backgroundColorBottom: '@bgColorBottom',
    backgroundColorTop: '@bgColorTop',
    backgroundTextStyle: '@bgTxtStyle',
    navigationBarBackgroundColor: '#000000',
    navigationBarTextStyle: '@navTxtStyle',
    navigationBarTitleText: 'Vitess-Uni',
    navigationStyle: 'default',
  },
  tabBar: {
    backgroundColor: '#FFF',
    borderStyle: '@tabBorderStyle',
    color: '#333',
    selectedColor: '#000',
    list: [
      {
        pagePath: 'pages/index',
        text: '发现',
        iconPath: '/static/orange.png',
        selectedIconPath: '/static/orange.png',
      },
      {
        pagePath: 'pages/tools',
        text: '工具',
        iconPath: '/static/banana.png',
        selectedIconPath: '/static/banana.png',
      },
    ],
  },
})
