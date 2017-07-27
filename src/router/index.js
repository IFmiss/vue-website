import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Pic from '../components/pic/pic.vue'
import Music from '../components/music/music.vue'
import Blog from '../components/blog/blog.vue'
import About from '../components/about/about.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/',
      component: Home
    },
    {
      // 图片
      path: '/pic',
      component: Pic
    },
    {
      // 音乐
      path: '/music',
      component: Music
    },
    {
      // 博客
      path: '/blog',
      component: Blog
    },
    {
      // 关于
      path: '/about',
      component: About
    }
  ]
})
