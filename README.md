# React菜谱-React+AntD 项目实战

## 前言

学习 React 之后做的小练习作为个人项目


## 技术栈

- react
- react-router
- react-redux
- less

## 基本项目搭建

- node 开发环境
- 安装依赖： yarn
- 项目启动： yarn start
- 涉及到第三方 API 接口，由极速 API 提供
## 页面结构

```
|-react-recipe 项目名
    |-node_modules  依赖包
    |-public
    |-src
        |-api   请求数据接口
        |-components    组件目录
            |-CardList      卡片列表组件
            |-Footer        底部组件
            |-Header        头部组件
            |-NavLeft       左侧导航
            |-NavRight      右侧标签
        |-config        菜单配置
        |-pages         页面
            |-Collections   收藏页
            |-Detail        详情页
            |-Home          首页
            |-Search        搜索页
            |-NoMatch       无数据页
            |-。。。        其他导航页
        |-redux         redux数据管理
            action-types
            actions
            reducers
            store
        |-utils         工具类
        admin.js        页面外层结构
        App.js          页面路由
        common.less     页面样式
        index.js        入口文件
    config-overrides.js     antd主题设置
    packjon.json            全局配置
    README.md               readme文件
```

## 功能实现
路由配置、搜索功能、收藏功能等
