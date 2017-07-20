<template>
  <div id="app">
    <home></home>
  </div>
</template>
<script>
// import axios from 'axios'
import store from './store'
import fecth from './utils/fecth.js'
import home from './components/home.vue'

export default {
  name: 'app',
  components: {
    home
  },
  methods: {
    fetchData () {
      // bing 的壁纸图片
      const getbingApi = 'http://www.daiwei.org/server.php?inAjax=1&do=getImageByBingJson'
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
    }
  },
  created () {
    this.fetchData()
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
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
