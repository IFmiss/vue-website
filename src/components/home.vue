<template>
    <div class="home" v-if="imageInfo">
      <!-- <advertisement></advertisement> -->
      <div class="home_center">
        <div class="home_content">
          <h1 class="title" key="title">
            {{imageInfo.title}}
            <span v-if="imageInfo.date">{{(imageInfo.date).split(' ')[0]}}</span> 
            <span class="playpause" @click="playpause" v-if="imageInfo.musicUrl" :title="imageInfo.musicName">
              <i class="icon-volume-medium"></i>{{isPlay ? '暂停' : '播放'}}
            </span>
          </h1>
          <p class="disc" key="disc">{{imageInfo.disc}}</p>
        </div>
        <tips v-if="globalInfo.isHigher768"></tips>
        <div class="home_set">
          <div class="set_list" v-if="imageInfo.type === 'home'" :class="index === 4 ? 'disabled' : ''" title="上一张壁纸" @click="defaultData(2)">
            <i class="icon-left"></i>
          </div>
          <div class="set_list" :title="isBingImage ? '设置默认壁纸' : '设置为Bing壁纸'" @click="getHomeImage">
            <i :class="isBingImage ? 'icon-imgsetting' : 'icon-bing'"></i>
          </div>
          <div class="set_list" v-if="imageInfo.type === 'home'" :class="index === 0 ? 'disabled' : ''" title="下一张壁纸" @click="defaultData(1)">
            <i class="icon-right"></i>
          </div>
          <div class="set_list" v-if="imageInfo.type === 'home'" @click="showAllList">
            <i class="text">图</i>
          </div>
          <div class="set_list" v-if="globalInfo.isHigher768" @click="toggleFullScreen">
            <i :class="isFullScreen ? 'icon-canclefullscreen' : 'icon-fullscreen'" :title="isFullScreen ? '取消全屏' : '全屏'"></i>
          </div>
        </div>
        <span class="tips" :title="bingImageDisc">每日一图由 {{bingImageDisc}} 提供 | Copyright © 2016~{{new Date().getFullYear()}} DAIWEI.SITE
          <span v-if="globalInfo.isHigher768">
            <router-link tag="a" to="/about/suggest" title="请提出你的意见">
              <span>意见建议</span>
            </router-link>
            <router-link tag="a" to="/about/friendship" title="希望能互换友链">
              <span>友情链接</span>
            </router-link>
            <a href="http://www.miitbeian.gov.cn/" target="_black" title="皖ICP备16011217号" style="width:100%;height:auto">皖ICP备16011217号</a>
          </span>
        </span>
      </div>
      <audio v-if="imageInfo.musicUrl" ref="homeAudio" style="display:none" loop="" :src="imageInfo.musicUrl"></audio>
      <coverhistory v-if="isShowAllList" @setStatus="hideAllList"></coverhistory>
    </div>
</template>

<script>
import store from 'store'
import tips from 'components/common/tips/tips.vue'
import coverhistory from 'components/common/coverhistory/coverhistory'
import API from 'config/api'
// import advertisement from 'components/common/advertisement/advertisement'

// 引入背景请求的api  getBingInfo
import {getBingInfo, getMineBgByIndex} from 'common/api/background.js'

export default {
  data () {
    return {
      showHomeContent: false,
      isFullScreen: false,
      isPlay: false,
      index: 0,
      isShowAllList: false
    }
  },
  computed: {
    bingImageDisc () {
      return store.getters.getGlobalInfo.showBingImage ? 'bing' : '未曾遗忘的青春'
    },
    imageInfo () {
      return store.getters.getFixedImageInfo
    },
    globalInfo () {
      return store.getters.getGlobalInfo
    },
    getAudioIsPlay () {
      return store.getters.getAudioIsPlay
    },
    isBingImage () {
      return store.getters.getGlobalInfo.showBingImage
    }
  },
  // components: {
  //   advertisement
  // },
  methods: {
    toggleFullScreen () {
      if (this.isFullScreen) {
        this.exitFullscreen()
      } else {
        this.fullScreen()
      }
    },

    hideAllList () {
      this.isShowAllList = false
    },

    showAllList () {
      this.isShowAllList = true
    },

    playpause () {
      var globalAudioEle = store.getters.getAudioEle
      if (!globalAudioEle.paused) {
        globalAudioEle.pause()
        store.commit('setAudioIsPlay', !globalAudioEle.paused)
      }

      var musicEle = this.$refs.homeAudio
      if (musicEle.paused) {
        musicEle.play()
        this.isPlay = true
      } else {
        musicEle.pause()
        this.isPlay = false
      }
    },

    getHomeImage () {
      if (this.isBingImage) {
        this.$msg('切换至自定义壁纸...')
        this.defaultData(0)
      } else {
        this.$msg('切换至Bing每日壁纸...')
        this.getBingImageInfo()
      }
    },

    // 设置壁纸的信息   0 则是默认的壁纸  索引为0  1 则是索引 --     2 则是 ++    根据 limit(index, 1) 来获取数据
    defaultData (type) {
      // 如果有播放器 需要设置暂停状态
      this.isPlay = false
      if (type === 1) {
        this.index--
        if (this.index < 0) {
          this.index = 0
          return
        }
      }

      if (type === 2) {
        this.index++
        if (this.index > 4) {
          this.index = 4
          return
        }
      }

      if (type === 0) {
        this.index = 0
      }

      var index = this.index

      getMineBgByIndex(API.GET_MINE_IMAGE, index).then((res) => {
        var globalData = store.getters.getGlobalInfo
        globalData.showBingImage = false
        // 全局设置
        store.dispatch({
          type: 'set_GlobalInfo',
          data: globalData
        })

        // 设置图片索引
        store.getters.getFixedBgIndex
        localStorage.setItem('globalInfo', JSON.stringify(store.getters.getGlobalInfo))
      })
    },

    getBingImageInfo () {
      getBingInfo(API.GET_BING_IMAGE, 0).then((res) => {
        var globalData = store.getters.getGlobalInfo
          globalData.showBingImage = true
          store.dispatch({
            type: 'set_GlobalInfo',
            data: globalData
          })
          localStorage.setItem('globalInfo', JSON.stringify(globalData))
      })
    },

    formatDate (data, fmt) {
      var o = {
        'M+': data.getMonth() + 1,                 // 月份
        'd+': data.getDate(),                    // 日
        'h+': data.getHours(),                   // 小时
        'm+': data.getMinutes(),                 // 分
        's+': data.getSeconds(),                 // 秒
        'q+': Math.floor((data.getMonth() + 3) / 3), // 季度
        'S': data.getMilliseconds()             // 毫秒
      }
      if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (data.getFullYear() + '').substr(4 - RegExp.$1.length))
      }
      for (var k in o) {
        if (new RegExp('(' + k + ')').test(fmt)) {
          fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
        }
      }
      return fmt
    },

    getRoutePath () {
      // return this.$route.path
      // if (this.$route.path.indexOf('/about'))
      // 进入子页面的时候  路由路径的长度  来判断实在子路由还是父路由中
      if (this.$route.path === '/home') {
        // 进入home
        return
      } else {
        this.isPlay = false
      }
    },

    fullScreen () {
      // W3C
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen()
      }
      // FireFox
      if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen()
      }
      // Chrome等
      if (document.documentElement.webkitRequestFullScreen) {
        document.documentElement.webkitRequestFullScreen()
      }
      // IE11
      if (document.documentElement.msRequestFullscreen) {
        document.documentElement.msRequestFullscreen()
      }
      this.isFullScreen = true
    },
    exitFullscreen () {
      if (document.exitFullscreen) {
        document.exitFullscreen()
      }
      if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen()
      }
      if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen()
      }
      if (document.msExitFullscreen) {
        document.msExitFullscreen()
      }
      this.isFullScreen = false
    },
    screenChangeEvent () {
      const _this = this
      const eventList = ['webkitfullscreenchange', 'mozfullscreenchange', 'fullscreenchange', 'msfullscreenchange']
        for (let i = 0; i < eventList.length; i++) {
          document.addEventListener(eventList[i], function () {
            // 全屏显示的网页元素
            const fullscreenElement = document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement

            if (fullscreenElement) {
              _this.isFullScreen = true
            } else {
              _this.isFullScreen = false
            }
          })
        }
    }
  },
  components: {
    tips,
    coverhistory
  },
  watch: {
    '$route': 'getRoutePath'
  },
  mounted () {
    this.showHomeContent = true
    this.screenChangeEvent()
    const fixedImageBg = localStorage.getItem('fixedImageBg')
    this.index = fixedImageBg ? JSON.parse(fixedImageBg).index : store.getters.getFixedImageInfo.index
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import '../common/stylus/global.styl'
  .home
    position:fixed
    top:0
    left:0;
    bottom:0
    width:100%;
    display:flex
    align-items:center
    .pic_bg
      position:absolute
      top:0
      left:0;
      bottom:0
      width:100%
      right:0
      z-index:-1
    .home_center
      max-width:1240px
      border-radius:12px
      backgoround:#fff
      margin:0 auto;
      display:flex
      justify-content:center
      flex-direction: column
      .home_content
        padding: 0 20px 50px 20px
        position:relative
        .title
          font-size:22px
          color:#fff
          span
            font-size:14px
            vertical-align: bottom
            font-weight:normal
            margin-left:20px
            &.playpause
              background:#fff
              display:inline-block
              color:#F55021
              width:auto
              vertical-align:middle
              height:24px
              font-weight:600
              font-size:12px
              line-height:24px
              padding: 0 8px
              border-radius:4px
              cursor:pointer
              i{
                vertical-align:middle
                display: inline-table
                padding-bottom:2px
              }
        .disc
          font-size:14px
          color:#fff
      .home_set
        position:absolute
        right:30px
        bottom:60px
        color:$text_color
        width:auto
        font-size:0
        .set_list
          display:inline-block
          width:40px
          height:40px
          font-size:16px
          vertical-align:top
          border:2px solid #fff
          border-radius:50%
          text-align:center
          box-sizing:border-box
          margin-left:25px
          cursor:pointer
          i
            color:#fff
            vertical-align:baseline
            &.text
              display: flex
              align-items:center
              justify-content:center
              font-style:normal
              width: 100%
              height: 100%
          &.disabled
            cursor:default
            border:2px solid rgba(233,233,233,0.46)
            i
              color:rgba(233,233,233,0.46)
      .tips
        position:absolute
        right:30px
        left:30px
        bottom:0
        color:$text_color
        height:40px
        line-height:40px
        font-size:10px
        text-overflow:ellipsis
        overflow:hidden
        white-space:nowrap
        text-align: right
        a
          color:$text_color
          margin-left:10px
          text-decoration:none
      @media screen and (min-width: 992px)
        .home_content
          padding: 0 80px 50px 80px
          position:relative
</style>
