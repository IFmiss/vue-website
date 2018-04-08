## 网站版本更新
![](https://img.shields.io/badge/vue-2.3.3-4EDD96.svg) ![](https://img.shields.io/badge/stylus-0.54.5-F6B386.svg)  ![](https://img.shields.io/badge/vue_awesome_swiper-2.5.4-FD9494.svg) ![](https://img.shields.io/badge/vuex-2.4.1-69D3E3.svg)  ![](https://img.shields.io/badge/axios-0.16.2-56DD7F.svg) ![](https://img.shields.io/badge/vue_message-1.3.0-F876B5.svg) ![](https://img.shields.io/badge/vue_lazyload-1.1.4-68CBD2.svg) ![](https://img.shields.io/badge/better_scroll-1.6.0-B07541.svg) 

## 演示地址   www.daiwei.org

QQ交流群： 424418160

## 网页截图

#### 首页

![](https://github.com/IFmiss/vue-website/blob/master/static/testimg/w1.jpg)

#### 状态  

![](https://github.com/IFmiss/vue-website/blob/master/static/testimg/w2.jpg)

#### 音乐  

![](https://github.com/IFmiss/vue-website/blob/master/static/testimg/w3.jpg)

#### 设置  

![](https://github.com/IFmiss/vue-website/blob/master/static/testimg/w4.jpg)

#### News

![](https://github.com/IFmiss/vue-website/blob/master/static/testimg/w5.jpg)

#### 作品信息

![](https://github.com/IFmiss/vue-website/blob/master/static/testimg/w6.jpg)

#### 标签信息

![](https://github.com/IFmiss/vue-website/blob/master/static/testimg/w7.jpg)

#### 浮层类型

![](https://github.com/IFmiss/vue-website/blob/master/static/testimg/w8.jpg)

#### 版本记录

![](https://github.com/IFmiss/vue-website/blob/master/static/testimg/w9.jpg)

等等...

## 执行方法

``` bash
# install dependencies   安装依赖
npm install

# serve with hot reload at localhost:8081   启动项目
npm run dev

# build for production with minification    打包项目
npm run build

```

## 描述
这是关于网站版本的一次更新，网站采用当前比较热门的前端框架vue编写，目的也是通过开发提升自己

## 使用到的技术 &　插件
vuex  axios swiper vue-router lazyload better-scorll 等

## 网站特点
* 同步bing主题  并且可以自定义壁纸(个人状态中的壁纸 或者我个人自定义的默认壁纸信息)
* 自定义壁纸可添加音频
* 可自定义遮罩的显示模式
* 兼容移动端
* 海量音乐播放，api来自网易云音乐，听歌我就用网易云
* 时实用户ip显示地址，并显示当地的天气情况
* 实时新闻信息
* 每日一笑
* 个人动态展示，可发表文字，图片信息
* 网站设置同步本地存储，包括音乐收藏列表

## 已知的问题

1. 个人状态页的图片在swiper上预览的时候  第一次打开swiper的时候没有办法显示索引大于0的图片 意思就是swiper第一次打开的时候无论你点的是第几个图片显示的都是第一张图片，之后关闭再打开显示就是正常的效果

2. 歌词滚动的问题  滚动的动画做到当前的效果但不使用jquery，现在默认使用的是jqeury的animate方法。。。

如果有人遇到这个问题，而且知道方法，求教。感激不尽

