#### vue 框架

想要使用 vue 开发项目，需要安装 vue 的开发环境，官方网站提供了安装环境的脚手架工具 vue-cli, 使用命令 `vue install -g @vue/cli` 全局安装脚手架工具，工具安装好之后就可以搭建 vue 的开发环境了，有两种方式搭建

- vue create 命令，在想要创建项目的文件夹下执行 `vue create 项目名`
- 图形化界面工具，在任意位置执行 `vue ui` 在浏览器中调出图形化界面，创建 vue 项目
  - 选择上方的创建按钮
  - 选好项目所要创建的位置
  - 选择默认的预设模板
  - 创建
  - 创建完成之后，选择 任务-->serve-->运行-->启动 app
  - 此时 vue 的基础项目已经搭建完毕

##### vue 初始项目结构

- node_modules 该项目的依赖包的存放位置
- .gitignore 作为 github 仓库忽略上传的记录
- package.json 记录了 node 项目的基础配置，和一些 vue 项目的配置
- package-lock.json 详细记录项目所用到的包
- README.md 项目的介绍文件
- public 该文件下存在的是项目的 html 模板，意思就是你写的所有的 vue 代码其实都是以该模板为基础的，一般不需要修改，偶尔可能会引入一些文件(css,js 等工具类的)
- babel.config.js babel 的配置文件，babel 是一个 js 编译工具，作用是编译新版本的 js 语法
- src 文件夹是 vue 项目的源代码
  - assets 存储静态文件的文件夹，一般存放一些公共的 css 图片等 ，文件夹名不要改
  - components 存放 vue 组件的，文件夹名称可以修改
  - app.vue 该文件就是 vue 的最外层组件
  - main.js 该项目的入口文件，意思是 webpack 会将该文件打包编译，该文件内写的是 vue 的一些全局设置

##### spa 单页面应用

vue 项目创建的就是单页面应用，整个项目就在一个页面内，(弊端：首页访问的会比较慢等等)[单页面](https://www.jianshu.com/p/0c32c85c668b)

##### vue 基础
