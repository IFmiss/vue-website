<template>
    <div class="home">
      <div class="home_center">
        <div class="home_content">
          <h1 class="title" key="title">{{imageInfo.title}} <span v-if="imageInfo.date">{{(imageInfo.date).split(' ')[0]}}</span></h1>
          <p class="disc" key="disc">{{imageInfo.disc}}</p>
        </div>
        <div class="home_set">
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
    </div>
</template>

<script>
import store from '../store'
export default {
  data () {
    return {
      showHomeContent: false,
      isFullScreen: false
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
      var eventList = ['webkitfullscreenchange', 'mozfullscreenchange', 'fullscreenchange', 'msfullscreenchange']
        for (var i = 0; i < eventList.length; i++) {
          document.addEventListener(eventList[i], function () {
            // 全屏显示的网页元素
            var fullscreenElement = document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement

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
  mounted () {
    this.showHomeContent = true
    this.screenChangeEvent()
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
            vertical-align:inherit
      .tips
        position:absolute
        right:30px
        left:30px
        bottom:0
        color:$text_color
        height:40px
        line-height:40px
        font-size:12px
        text-overflow:ellipsis
        overflow:hidden
        white-space:nowrap
        text-align: right;
</style>
