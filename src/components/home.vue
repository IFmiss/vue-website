<template>
    <div class="home">
      <div class="home_center">
        <div class="home_content">
          <h1 class="title" key="title">{{imageInfo.title}}</h1>
          <p class="disc" key="disc">{{imageInfo.disc}}</p>
        </div>
        <span class="tips">每日一图由 bing 提供</span>
      </div>
      <div class="pic_bg" v-if="picBg" :style="{backgroundColor:picBg.contentInfo.bgcolor, opacity : picBg.contentInfo.opacity}"></div>
    </div>
</template>

<script>
import store from '../store'
export default {
  data () {
    return {
      showHomeContent: false
    }
  },
  computed: {
    imageInfo () {
      return store.getters.getFixedImageInfo
    },
    picBg () {
      return store.getters.getGlobalInfo
    }
  },
  methods: {
  },
  mounted () {
    this.showHomeContent = true
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
        padding: 0 0 50px 0
        position:relative
        .title
          font-size:22px
          color:#fff
        .disc
          font-size:14px
          color:#fff
      .tips
        position:absolute
        right:30px
        bottom:0
        color:$text_color
        font-size:12px
</style>
