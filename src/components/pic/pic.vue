<template>
  <div class="pic">
    <div class="pic_bg" v-if="picBg" :style="{backgroundColor:picBg.contentInfo.bgcolor, opacity : picBg.contentInfo.opacity}"></div>
    <div class="pic_content">
      <img src="http://oiq8j9er1.bkt.clouddn.com/music_%E5%A5%B9%E8%AF%B4.jpg" alt="">
    </div>
  </div>
</template>
<script>
  import store from './../../store'
  export default {
    computed: {
      picBg () {
        return store.getters.getGlobalInfo
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .pic
    position:fixed
    top:0
    left:0;
    bottom:0
    width:100%
    right:0
    border-radius:12px
    .pic_bg
      position:absolute
      top:0
      left:0;
      bottom:0
      width:100%
      right:0
      z-index:-1
</style>
