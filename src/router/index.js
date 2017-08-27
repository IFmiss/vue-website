import Vue from 'vue'
import Router from 'vue-router'
import store from './../store'
import Home from '@/components/home'
import Pic from '../components/pic/pic.vue'
import Music from '../components/music/music.vue'
import Blog from '../components/blog/blog.vue'
import About from '../components/about/about.vue'
import Setting from '../components/setting/setting.vue'
import Works from '../components/works/works.vue'
import Joke from '../components/joke/joke.vue'
import MusicSearch from '../components/music/search/search.vue'
import MusicSheet from '../components/music/sheet/sheet.vue'
import MusicSearchList from '../components/music/searchlist/searchlist.vue'
import MusicAlbumList from '../components/music/albumlist/albumlist.vue'
import MusicCollection from '../components/music/collection/collection.vue'

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
          path: '/',
          redirect: store.getters.getMusicRouter,
          components: {
            listinfo: MusicSheet
          }
        },
        {
          path: '/music/search',
          components: {
            fullscreen: MusicSearch
          }
        },
        {
          path: '/music/albumlist/:id',
          name: 'albumlist',
          components: {
            listinfo: MusicAlbumList
          }
        },
        // 收藏的列表
        {
          path: '/music/collection',
          name: 'collection',
          components: {
            listinfo: MusicCollection
          }
        },
        {
          path: '/music/sheet/:id',
          name: 'musicindex',
          components: {
            listinfo: MusicSheet
          }
        },
        {
          path: '/music/searchlist/:w',
          name: 'searchlist',
          components: {
            listinfo: MusicSearchList
          }
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
