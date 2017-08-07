<template>
  <div id="app" @resize="isApp">
    <div class="maincontent">
      <fixed-bg v-if="imageInfo && imageSetting" :imagepath="imagePrevPath +'' + imageInfo.url" :maskcolor="imageSetting.bgcolor" :maskopacity="imageSetting.opacity"></fixed-bg>
    </div>
    <v-content></v-content>
  </div>
</template>
<script>
// import axios from 'axios'
import store from './store'
import fecth from './utils/fecth.js'
import home from './components/home.vue'
import fixedbg from './components/common/fixedbg/fixedbg.vue'
import content from './components/common/content/content.vue'
import pic from './components/pic/pic.vue'
// import $ from 'jquery'

export default {
  data () {
    return {
      isgetimagebybing: store.getters.getShowBingImage
    }
  },
  name: 'app',
  components: {
    home,
    'v-content': content,
    'fixed-bg': fixedbg,
    pic
  },
  methods: {
    fetchData () {
      const isShowBingImage = store.getters.getShowBingImage
      const getbingApi = isShowBingImage ? 'http://www.daiwei.org/vue/server/home.php?inAjax=1&do=getImageByBingJson' : 'http://www.daiwei.org/vue/server/home.php?inAjax=1&do=getHomeImage'
        fecth.get(getbingApi).then((res) => {
          const imageInfo = {}
          imageInfo.url = res.data.url
          imageInfo.title = res.data.title
          imageInfo.disc = res.data.disc
          store.dispatch({
            type: 'set_FixedImageInfo',
            data: imageInfo
          })
        }, (err) => {
          alert(err)
        })
    },
    isApp () {
      let isTrue = false
      if (document.body.clientWidth < 768) {
        isTrue = false
      } else {
        isTrue = true
      }
      store.commit({
        type: 'setIsHigher768',
        data: isTrue
      })
      console.log(isTrue)
    }
  },
  watch: {
    getIsBingBg (nowval, oldval) {
      this.fetchData()
    }
  },
  computed: {
    imagePrevPath () {
      return store.getters.getShowBingImage ? 'http://www.bing.com' : ''
    },
    getGlobalStyle () {
      return store.getters.getGlobalInfo
    },
    imageInfo () {
      return store.getters.getFixedImageInfo
    },
    imageSetting () {
      return store.getters.getFixedBgInfo
    },
    getIsBingBg () {
      return store.getters.getShowBingImage
    }
  },
  mounted () {
    this.fetchData()
    // 挂载 onresize事件
    window.onresize = () => {
      this.isApp()
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import 'common/stylus/border-1px/index.styl'
@import 'common/font-icon/style.css'
  body,html
    margin:0
    padding:0
    box-sizing:border-box
    background:#f0f0f0f0
    user-select:none
    -webkit-tap-highlight-color: transparent
  #app 
    position: fixed
    top: 0
    left: 0
    bottom: 0
    right:0
    background:transparent
</style>
