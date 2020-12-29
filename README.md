## 介绍
本项目是基于React-TypeScript的一个个人简历 Web App，UI样式基于ant-design + styled-components,主要是实现大屏幕滚动单页交互。

## 主要逻辑内容
页面滚动内容涉及到的主要技术：useDebounce、react-transition-group、redux

## 本项目参考内容
* 自定义字体采用TsangerYuMo

* 部分灵感来源于code open中的部分项目

* 部分图片来源于千图网的国潮风格图片（也有后续修改）

  （如有侵权，请告知）

## 安装依赖
`yarn install`

## 启动
`yarn start`

## Git Hooks

Commit Message Lint

```
<emoji type>(<scope>): <subject>
```

type: 用于说明 commit 的类别，主要下面几个标识。

| type  |      emoji代码       | 说明                                                      |
| :---: | :------------------: | :-------------------------------------------------------- |
|   🎉   |       `:tada:`       | 初次提交                                                  |
|   🆕   |       `:new:`        | feat：新功能（feature）                                   |
|   🐛   |       `:bug:`        | fix：修补bug                                              |
|   🔧   |      `:wrench:`      | chore：修改配置文件                                       |
|   💄   |     `:lipstick:`     | style： 格式（不影响代码运行的变动）                      |
|   📝   |       `:memo:`       | docs：文档（documentation）                               |
|   🔨   |      `:hammer:`      | refactor：重构（即不是新增功能，也不是修改bug的代码变动） |
|   ➕   | `:heavy_plus_sign:`  | 增加依赖                                                  |
|   ➖   | `:heavy_minus_sign:` | 减少                                                      |
|   🗑️   |   `:wastebasket:`    | 删除                                                      |
|   🚀   |      `:rocket:`      | 部署功能                                                  |
