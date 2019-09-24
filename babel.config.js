module.exports = {
  presets: [
    '@vue/app',
  ],
  // 安装 babel-plugin-import 插件后如下配置可按需引入 ant-design-vue 组件
  plugins: [
    ['import', { libraryName: 'ant-design-vue', libraryDirectory: 'es', style: 'css' }],
  ],
};
