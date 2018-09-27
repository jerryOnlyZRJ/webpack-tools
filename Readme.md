## 项目说明

webpack运行机制剖析参照项目

## 构建命令

**clone项目后先安装所需依赖**

```
$ npm i
```

如需执行构建，可执行构建命令：

```
$ npm run build
```

可结合输出日志理解构建生命周期hook机制

## 目录结构

```
├── dist         输出文件
├── loaders         自定义loader
├── plugins        自定义插件
├── src          模块等资源文件
├── package.json
├── README.md       说明文档
├── webpack.config.js       webpack配置文件
└── .gitignore
```

## 项目文档

本项目附带了《webpack运行机制》、《编写自定义webpack loader》和《编写自定义webpack plugin》三篇文档，具体可参照下方链接：

[《webpack运行机制》](docs/webpack-principle.md)

[《编写自定义webpack loader》](docs/webpack-loader.md)

[《编写自定义webpack plugin》](docs/webpack-plugin.md)

## 其他

项目具体知识点详见文件内代码注释
