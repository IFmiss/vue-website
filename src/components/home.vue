<template>
    <div class="home">
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
          <div class="set_list" v-if="globalInfo.isHigher768" @click="toggleFullScreen">
            <i :class="isFullScreen ? 'icon-canclefullscreen' : 'icon-fullscreen'" :title="isFullScreen ? '取消全屏' : '全屏'"></i>
          </div>
<!--           <div class="set_list" @click="exitFullscreen">
            <i class="icon-music"></i>
          </div> -->
        </div>
        <span class="tips" :title="bingImageDisc">{{bingImageDisc}}</span>
      </div>
      <!-- <div class="pic_bg" v-if="globalInfo" :style="{backgroundColor:globalInfo.contentInfo.bgcolor, opacity : globalInfo.contentInfo.opacity}"></div> -->
      <audio v-if="imageInfo.musicUrl" ref="homeAudio" style="display:none" loop="" :src="imageInfo.musicUrl"></audio>
    </div>
</template>

<script>
import store from '../store'
import fecth from '../utils/fecth.js'
export default {
  data () {
    return {
      showHomeContent: false,
      isFullScreen: false,
      isPlay: false,
      index: 0
    }
  },
  computed: {
    bingImageDisc () {
      return store.getters.getGlobalInfo.showBingImage ? '每日一图由 bing 提供 | Copyright © 2016~2017 DAIWEI.ORG' : '每日一图由 未曾遗忘的青春 提供 | Copyright © 2016~2017 DAIWEI.ORG'
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
  methods: {
    toggleFullScreen () {
      if (this.isFullScreen) {
        this.exitFullscreen()
      } else {
        this.fullScreen()
      }
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
        this.defaultData(0)
      } else {
        this.bingData()
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

      const url = 'http://www.daiwei.org/vue/server/home.php?inAjax=1&do=getHomeImage'
      fecth.post(url, {index: index}).then((res) => {
        let imageInfo = {}
        imageInfo.type = 'home'
        imageInfo.url = res.data.url
        imageInfo.title = res.data.title
        imageInfo.disc = res.data.disc
        imageInfo.date = res.data.date
        imageInfo.musicName = res.data.musicName
        imageInfo.musicUrl = res.data.musicUrl
        imageInfo.index = index

        store.dispatch({
          type: 'set_FixedImageInfo',
          data: imageInfo
        })

        var globalData = store.getters.getGlobalInfo
        globalData.showBingImage = false
        // alert(JSON.stringify(globalData))
        store.dispatch({
          type: 'set_GlobalInfo',
          data: globalData
        })

        // 设置图片索引
        store.getters.getFixedBgIndex

        localStorage.setItem('globalInfo', JSON.stringify(store.getters.getGlobalInfo))
        localStorage.setItem('fixedImageBg', JSON.stringify(store.getters.getFixedImageInfo))
      })
    },

    bingData () {
      var getbingApi = 'http://www.daiwei.org/vue/server/home.php?inAjax=1&do=getImageByBingJson'
      fecth.get(getbingApi).then((res) => {
          let imageInfo = {}
          imageInfo.type = 'bing'
          imageInfo.url = res.data.url
          imageInfo.title = res.data.title
          imageInfo.disc = res.data.disc
          imageInfo.date = this.formatDate(new Date(), 'yyyy-MM-dd hh:mm:ss')
          imageInfo.index = 0
          store.dispatch({
            type: 'set_FixedImageInfo',
            data: imageInfo
          })

          var globalData = store.getters.getGlobalInfo
          globalData.showBingImage = true
          // alert(JSON.stringify(globalData))
          store.dispatch({
            type: 'set_GlobalInfo',
            data: globalData
          })

          localStorage.setItem('fixedImageBg', JSON.stringify(store.getters.getFixedImageInfo))
          localStorage.setItem('globalInfo', JSON.stringify(store.getters.getGlobalInfo))
        }, (err) => {
          alert(err)
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
              console.log('全屏')
            } else {
              _this.isFullScreen = false
              console.log('不是全屏')
            }
          })
        }
    }
  },
  watch: {
    '$route': 'getRoutePath'
  },
  mounted () {
    this.$toast({text: 'hahahaah', duration: 3000})
    this.showHomeContent = true
    this.screenChangeEvent()
    const fixedImageBg = localStorage.getItem('fixedImageBg')
    this.index = fixedImageBg ? JSON.parse(fixedImageBg).index : store.getters.getFixedImageInfo.index
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import './common/toast/toast.styl'
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
        text-align: right;
</style>
