<template>
  <div id="app">
    <fixed-bg imagepath="http://www.daiwei.org/global/image/img1.jpg" maskcolor="#336699" maskopacity="0.42"></fixed-bg>
    <!-- <keep-alive>
      <router-view></router-view>
    </keep-alive> -->
    <!-- <main-content></main-content> -->
  </div>
</template>
<script>
import axios from 'axios'
import fixedbg from './components/common/fixedbg/fixedbg.vue'

export default {
  name: 'app',
  components: {
    'fixed-bg': fixedbg
  },
  created () {
    const getbingApi = 'http://www.daiwei.org/server.php?inAjax=1&do=getImageByBingJson'
    axios.get(getbingApi).then((res) => {
      alert(JSON.stringify(res))
    }, (err) => {
      alert(err)
    })
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
