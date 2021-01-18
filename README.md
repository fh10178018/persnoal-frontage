## 介绍
本项目是基于React-TypeScript的一个个人简历 Web App，UI样式和插件工具基于`ant-design` + `styled-components`,主要是实现大屏幕滚动单页交互。

本项目也是我第一个亲力亲为，做的比较完整的React项目，即不论是项目创建到项目开发和设计，还是到最后搭载到服务器，并且进一步优化项目。当然还有做的不足的地方，也会逐渐完善。

同时也算是对于React项目学习的一个小总结，至于第一个项目为什么不用网上已有的实践项目，我觉得学习前端的一部分动力就是创意吧，能把编程与设计结合，是我很愿意做的事情。

接口数据来源于我做的一个后端express项目，链接为：<https://github.com/fh10178018/backend-services.git>

后端数据管理VUE项目链接为：<https://github.com/fh10178018/Personalblog-back-end.git>

本项目链接为：<https://github.com/fh10178018/persnoal-frontage.git>

## 主要技术栈
其中页面滚动涉及到的技术和页面素材设计为`useThrottle`、`useDebounce`、`redux`、`react-transition-group`、`svg`、`PhotoShop`和`Inllustrator`。

## 已经完成的优化内容
* 将部分loading过程加入html文件中，解决白屏问题，同时自行设计loading动画
* 将多个海浪图片压缩为一张图片，通过剪切图片的形式展示，同时压缩其它图片
* 用svg做文字遮罩动画，解决用gif动画文件过大问题
* 提取部分自定义字体，压缩字体文件大小
* 静态打包压缩为gz文件，方便静态资源加载

## 本项目参考内容
* 自定义字体采用TsangerYuMo

* 部分灵感来源于code open中的部分项目

* 页面加载动画的设计，来源于扁平风格的一个视频，最终通过svg实现，实现工具为`Inllustrator` + `Svgator`

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
