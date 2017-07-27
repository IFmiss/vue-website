<template>
  <div class="maincontent">
    <fixed-bg v-if="imageInfo && imageSetting" :imagepath="'http://www.bing.com' + imageInfo.url" :maskcolor="imageSetting.bgcolor" :maskopacity="imageSetting.opacity"></fixed-bg>
    <div v-if="getGlobalStyle.contentInfo" class="content" ref="homecontent" :style="{background: getGlobalStyle.contentInfo.bgcolor,opacity: getGlobalStyle.contentInfo.opacity}">
    </div>
  </div>
</template>

<script>
import store from '../store'
import fixedbg from './common/fixedbg/fixedbg.vue'
export default {
  computed: {
    imageInfo () {
      return store.getters.getFixedImageInfo
    },
    imageSetting () {
      return store.getters.getFixedBgInfo
    },
    getGlobalStyle () {
      return store.getters.getGlobalInfo
    }
  },
  methods: {
  },
  mounted () {
  },
  components: {
    'fixed-bg': fixedbg
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .maincontent
    position:relative
    .content
      position:fixed
      top:120px
      left:50%;
      bottom:40px
      width:1200px
      border-radius:12px
      transform:translate3d(-50%,0,0)
</style>
