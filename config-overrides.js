const { override, fixBabelImports } = require("customize-cra");
const rewireCompressionPlugin = require('react-app-rewire-compression-plugin');

// 在这里修改cra默认的插件配置项
const replaceConfig = () => (config, env) => {
  config = rewireCompressionPlugin(config, env, {
    test: /\.js(\?.*)?$/i,
    cache: true
  })
  const oneOf_loc = config.module.rules.findIndex(n => n.oneOf)
  config.module.rules[oneOf_loc].oneOf = [
    {
      test: /\.(woff2?|eot|ttf|otf|woff)(\?.*)?$/,
      // 排除 node_modules 目录下的文件
      exclude: /(node_modules)/,
      loader: 'file-loader',
      options: {
        limit: 10000,
        // 定义打包完成后最终导出的文件路径
        outputPath: 'css/fonts/',
        // 文件的最终名称
        name: '[name].[hash:7].[ext]'
      }
    },
    ...config.module.rules[oneOf_loc].oneOf
  ]
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

