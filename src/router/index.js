import Vue from 'vue'
import Router from 'vue-router'
import store from './../store'
import Home from '@/components/home'
const Pic = r => require.ensure([], () => r(require('@/components/pic/pic.vue')), 'pic')
// import Pic from '@/components/pic/pic.vue'
const Music = r => require.ensure([], () => r(require('@/components/music/music.vue')), 'music')
// import Music from '@/components/music/music.vue'
const Blog = r => require.ensure([], () => r(require('@/components/blog/blog.vue')), 'blog')
// import Blog from '@/components/blog/blog.vue'
const About = r => require.ensure([], () => r(require('@/components/about/about.vue')), 'about')
// import About from '@/components/about/about.vue'
const Setting = r => require.ensure([], () => r(require('@/components/setting/setting.vue')), 'setting')
// import Setting from '@/components/setting/setting.vue'
const Works = r => require.ensure([], () => r(require('@/components/about/works/works.vue')), 'works')
// import Works from '@/components/works/works.vue'
const Joke = r => require.ensure([], () => r(require('@/components/about/joke/joke.vue')), 'joke')
// import Joke from '@/components/joke/joke.vue'
const MusicSearch = r => require.ensure([], () => r(require('@/components/music/search/search.vue')), 'search')
// import MusicSearch from '@/components/music/search/search.vue'
const MusicSheet = r => require.ensure([], () => r(require('@/components/music/sheet/sheet.vue')), 'sheet')
// import MusicSheet from '@/components/music/sheet/sheet.vue'
const MusicSearchList = r => require.ensure([], () => r(require('@/components/music/searchlist/searchlist.vue')), 'searchlist')
// import MusicSearchList from '@/components/music/searchlist/searchlist.vue'
const MusicAlbumList = r => require.ensure([], () => r(require('@/components/music/albumlist/albumlist.vue')), 'albumlist')
// import MusicAlbumList from '@/components/music/albumlist/albumlist.vue'
const MusicCollection = r => require.ensure([], () => r(require('@/components/music/collection/collection.vue')), 'collection')
// import MusicCollection from '@/components/music/collection/collection.vue'
const MusicPlayList = r => require.ensure([], () => r(require('@/components/music/playlist/playlist.vue')), 'playlist')
// import MusicPlayList from '@/components/music/playlist/playlist.vue'
const MusicToplist = r => require.ensure([], () => r(require('@/components/music/toplist/toplist.vue')), 'toplist')
// import MusicToplist from '@/components/music/toplist/toplist.vue'
const Me = r => require.ensure([], () => r(require('@/components/about/me/me.vue')), 'me')
// import Me from '@/components/me/me.vue'
const Suggest = r => require.ensure([], () => r(require('@/components/about/suggest/suggest.vue')), 'suggest')
// import Suggest from '@/components/suggest/suggest.vue'
const Contact = r => require.ensure([], () => r(require('@/components/about/contact/contact.vue')), 'contact')
// import Suggest from '@/components/contact/contact.vue'
const Friendship = r => require.ensure([], () => r(require('@/components/about/friendship/friendship.vue')), 'friendship')
// import Suggest from '@/components/friendship/friendship.vue'  友情链接
Vue.use(Router)

export default new Router({
  // mode: 'history',
  hashbang: true,
  history: false, // 这个参数改为false就可以了
  saveScrollPosition: true,
  suppressTransitionError: true,
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
          path: '/music/sheet/',
          redirect: store.getters.getMusicRouter,
          components: {
            listinfo: MusicSheet
          }
        },
        {
          path: '/music/playlist/',
          components: {
            listinfo: MusicPlayList
          }
        },
        {
          path: '/music/toplist/',
          components: {
            listinfo: MusicToplist
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
        },
        {
          path: '/about/me',
          component: Me
        },
        {
          path: '/about/suggest',
          component: Suggest
        },
        {
          path: '/about/contact',
          component: Contact
        },
        {
          path: '/about/friendship',
          component: Friendship
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
