<template>
  <div class="div_pic">
    <div class="pic_bg" v-if="picBg" :style="{backgroundColor:picBg.contentInfo.bgcolor, opacity : picBg.contentInfo.opacity}"></div>
    <div class="pic_content">
      <picList></picList>
    </div>
  </div>
</template>
<script>
  import store from './../../store'
  import line from './../common/line/line.vue'
  import picList from './picList/picList.vue'
  import fecth from './../../utils/fecth.js'
  export default {
    computed: {
      picBg () {
        return store.getters.getGlobalInfo
      }
    },
    methods: {
      fetchData () {
        const getImageConditions = 'http://www.daiwei.org/vue/server/home.php?inAjax=1&do=getImageCondition'
        fecth.get(getImageConditions).then((res) => {
          alert(JSON.stringify(res))
        }, (err) => {
          alert(err)
        })
      }
    },
    components: {
      'v-line': line,
      picList
    },
    mounted () {
      this.fetchData()
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/global.styl'
    ::-webkit-scrollbar
      background:rgba(55,55,55,0.1)
      width:4px
      border-radius:2px
      margin-left:12px
    ::-webkit-scrollbar-button    
      display:none
    ::-webkit-scrollbar-track  
      border-radius:2px
      background:rgba(55,55,55,0.1)
    ::-webkit-scrollbar-track-piece 
      border-radius:2px
      background:rgba(55,55,55,0.1)
    ::-webkit-scrollbar-thumb  
      cursor:pointer
      border-radius:2px
      background:rgba(222,222,222,0.1)
      
    ::-moz-scrollbar
      background:rgba(55,55,55,0.1)
      width:15px
      border-radius:2px
      margin-left:12px
    ::-moz-scrollbar-button    
      display:none
    ::-moz-scrollbar-track  
      border-radius:2px
      background:rgba(55,55,55,0.1)
    ::-moz-scrollbar-track-piece 
      border-radius:2px
      background:rgba(55,55,55,0.1)
    ::-moz-scrollbar-thumb  
      cursor:pointer
      border-radius:2px
      background:rgba(222,222,222,0.1)
    // ::-webkit-scrollbar-button      
    // ::-webkit-scrollbar-track       
    // ::-webkit-scrollbar-track-piece 
    // ::-webkit-scrollbar-thumb       
    // ::-webkit-scrollbar-corner      
    // ::-webkit-resizer               
  .div_pic
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
    .pic_content
      position:fixed
      top:100px
      bottom:50px
      left:50%
      max-width:1200px
      width:100%
      transform:translate(-50%,0)
      margin:0 auto
      overflow-y:scroll
      box-sizing:border-box
      padding:15px;    
</style>
