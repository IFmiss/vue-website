import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Pic from '../components/pic/pic.vue'
import Music from '../components/music/music.vue'
import Blog from '../components/blog/blog.vue'
import About from '../components/about/about.vue'
import Setting from '../components/setting/setting.vue'
import Works from '../components/works/works.vue'
import Joke from '../components/joke/joke.vue'
import MusicSearch from '../components/music/search/search.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
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
      component: Music,
      children: [
        {
          path: '/music/search',
          component: MusicSearch
        }
        // {
        //   path: '/about/joke',
        //   component: Joke
        // }
      ]
    },
    {
      // 博客
      path: '/blog',
      component: Blog
    },
    {
      // 关于
      path: '/about',
      component: About,
      children: [
        {
          path: '/about/works',
          component: Works
        },
        {
          path: '/about/joke',
          component: Joke
        }
      ]
    },
    {
      path: '/setting',
      component: Setting
    }
    // 作品列表
    // {
    //   path: '/works',
    //   component: Works
    // }
  ]
})
