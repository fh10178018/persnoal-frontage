const { override, fixBabelImports } = require("customize-cra");
const rewireCompressionPlugin = require('react-app-rewire-compression-plugin');

// 在这里修改cra默认的插件配置项
const replaceConfig = () => (config,env) => {
  config = rewireCompressionPlugin(config, env, {
    test: /\.js(\?.*)?$/i,
    cache: true
  })
  // 需要返回config对象
  return config;
};

module.exports = override(
  fixBabelImports("antd", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: "css",
  }),
  fixBabelImports("react-use", {
    libraryName: "react-use",
    libraryDirectory: "lib",
    camel2DashComponentName: false,
  }),
  replaceConfig()
);

