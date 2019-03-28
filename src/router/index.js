import Vue from 'vue'
import Router from 'vue-router'
import store from './../store'
import Home from '@/components/home'
import DGlobal from 'common/js/global.js'
// const Pic = r => require.ensure([], () => r(require('@/components/pic/pic.vue')), 'pic')
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
const Updateinfo = r => require.ensure([], () => r(require('@/components/about/updateinfo/updateinfo.vue')), 'updateinfo')
// import Suggest from '@/components/updateinfo/updateinfo.vue'  更新记录
const Resources = r => require.ensure([], () => r(require('@/components/about/resources/resources.vue')), 'resources')
// import Suggest from '@/components/resources/resources.vue'  资源搜索
const DownloadAudio = r => require.ensure([], () => r(require('@/components/about/resources/audio/audio.vue')), 'audio')
// import Suggest from '@/components/resources/resources/audio.vue'  音频下载
const DownloadVideo = r => require.ensure([], () => r(require('@/components/about/resources/video/video.vue')), 'video')
// import Suggest from '@/components/resources/resources/video.vue'  视频下载
const News = r => require.ensure([], () => r(require('@/components/about/news/news.vue')), 'news')

const Login = r => require.ensure([], () => r(require('@/components/user/login/login.vue')), 'login')

// userInfo
const UserInfo = r => require.ensure([], () => r(require('@/components/user/info/info.vue')), 'info')

// user
const User = r => require.ensure([], () => r(require('@/components/user/user.vue')), 'user')

const Reward = r => require.ensure([], () => r(require('@/components/reward/reward.vue')), 'reward')

Vue.use(Router)

const myRouter = new Router({
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
    // {
    //   // 图片
    //   path: '/pic',
    //   component: Pic
    // },
    {
      // 音乐
      path: '/music',
      component: Music,
      children: [
        {
          path: '/',
          redirect: store.getters.getMusicRouter,
          meta: {
            auth: true
          },
          components: {
            listinfo: MusicSheet
          }
        },
        {
          path: '/music/search',
          meta: {
            auth: true
          },
          components: {
            fullscreen: MusicSearch
          }
        },
        {
          path: '/music/albumlist/:id',
          meta: {
            auth: true
          },
          name: 'albumlist',
          components: {
            listinfo: MusicAlbumList
          }
        },
        // 收藏的列表
        {
          path: '/music/collection',
          name: 'collection',
          meta: {
            auth: true
          },
          components: {
            listinfo: MusicCollection
          }
        },
        {
          path: '/music/sheet/:id',
          name: 'musicindex',
          meta: {
            auth: true
          },
          components: {
            listinfo: MusicSheet
          }
        },
        {
          path: '/music/sheet/',
          redirect: store.getters.getMusicRouter,
          meta: {
            auth: true
          },
          components: {
            listinfo: MusicSheet
          }
        },
        {
          path: '/music/playlist/',
          meta: {
            auth: true
          },
          components: {
            listinfo: MusicPlayList
          }
        },
        {
          path: '/music/toplist/',
          meta: {
            auth: true
          },
          components: {
            listinfo: MusicToplist
          }
        },
        {
          path: '/music/searchlist/:w',
          name: 'searchlist',
          meta: {
            auth: true
          },
          components: {
            listinfo: MusicSearchList
          }
        }
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
        },
        {
          path: '/about/updateinfo',
          component: Updateinfo
        },
        {
          path: '/about/news',
          component: News,
          children: [
            {
              path: '/about/news/:type',
              name: 'newstype',
              component: News
            }
          ]
        },
        {
          path: '/about/resources',
          component: Resources,
          children: [
            {
              path: '/about/resources/audio/',
              name: 'audiolist',
              components: {
                downloadlist: DownloadAudio
              },
              children: [
                {
                  path: '/about/resources/audio/:k',
                  components: {
                    downloadlist: DownloadAudio
                  }
                }
              ]
            },
            {
              path: '/about/resources/video/',
              name: 'videolist',
              components: {
                downloadlist: DownloadVideo
              },
              children: [{
                path: '/about/resources/video/:k',
                components: {
                  downloadlist: DownloadVideo
                }
              }]
            }
          ]
        }
      ]
    },
    {
      path: '/setting',
      component: Setting
    },
    {
      path: '/reward',
      component: Reward
    },
    {
      path: '/user',
      component: User,
      children: [
        {
          path: '/',
          redirect: '/user/login',
          component: UserInfo
        },
        {
          path: '/user/login',
          component: Login
        },
        {
          path: '/user/info',
          meta: {
            auth: true
          },
          component: UserInfo
        }
      ]
    }
  ]
})

myRouter.beforeEach((to, from, next) => {
  if (DGlobal.storage.getCookie('c_user_info') && !store.getters.getUserInfo) {
    DGlobal.storage.setCookie('c_user_info', unescape(DGlobal.storage.getCookie('c_user_info')), 60 * 60 * 1000 * 24)
    store.dispatch({
      type: 'set_UserInfo',
      data: JSON.parse(unescape(DGlobal.storage.getCookie('c_user_info')))
    })
  }

  if (to.meta && to.meta.auth) {
    if (store.getters.getUserInfo) {
      next()
    } else {
      const url = encodeURIComponent(to.fullPath)
      next(`/user/login?redirect_url=${url}`)
    }
  } else {
    next()
  }
})

export default myRouter
