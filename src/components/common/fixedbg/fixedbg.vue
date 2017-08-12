<template>
  <div class="fixedbg" :style="{backgroundImage : 'url(' + imagepath + ')', backgroundSize:imagesize, backgroundPosition:imageposition}">
    <div class="mask-fixedbg" :style="{background:maskcolor,opacity:maskopacity}"></div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      imagesize: 'cover',
      imageposition: 'center center'
    }
  },
  props: {
    imagepath: {
      type: String,
      default: 'http://www.daiwei.org/global/image/img1.jpg'
    },
    maskcolor: {
      type: String,
      default: 'transparent'
    },
    maskopacity: {
      type: String,
      default: '0.5'
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .fixedbg
    position:fixed
    z-index:-2
    top:0
    left:0
    right:0
    bottom:0
    background-color:#000
    // transition:all 0.3s
    .mask-fixedbg
      position:fixed
      z-index:-1
      top:0
      left:0
      right:0
      bottom:0
</style>
