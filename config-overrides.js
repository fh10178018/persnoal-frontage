const { override, fixBabelImports } = require("customize-cra");

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
  })
);
