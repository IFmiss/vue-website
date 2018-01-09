<template>
    <div class="search" @click="back">
      <transition name="fade">
        <div class="bg_search" v-show="showSearch"></div>
      </transition>
      <transition name="silde-top">
        <div class="search_content" v-show="showSearch">
          <input class="search_input" @click.stop ref="searchVal" type="text" @keyup.enter="searchMusic" @keyup.esc="back">
          <div class="search-btn" @click.stop="searchMusic">搜索</div>
        </div>
      </transition>
      <transition name="silde-bottom">
        <div class="search_select" v-show="showSearch">
          <div class="select_type">
            <p class="select_title">热门歌曲</p>
            <span class="select_span" @click.stop="clickSearchMusic($event)">爱的故事(上)</span>
            <span class="select_span" @click.stop="clickSearchMusic($event)">Fly Away</span>
            <span class="select_span" @click.stop="clickSearchMusic($event)">Autumn (Original Mix) </span>
            <span class="select_span" @click.stop="clickSearchMusic($event)">Far Away</span>
            <span class="select_span" @click.stop="clickSearchMusic($event)">七里香</span>
            <span class="select_span" @click.stop="clickSearchMusic($event)">China-X</span>
            <span class="select_span" @click.stop="clickSearchMusic($event)">我以为我可以</span>
            <span class="select_span" @click.stop="clickSearchMusic($event)">再见了单纯</span>
            <span class="select_span" @click.stop="clickSearchMusic($event)">Endless</span>
            <span class="select_span" @click.stop="clickSearchMusic($event)">Think Again</span>
            <span class="select_span" @click.stop="clickSearchMusic($event)">PneumaticTokyo</span>
            <span class="select_span" @click.stop="clickSearchMusic($event)">采茶纪</span>
          </div>
          <div class="select_type">
            <p class="select_title">热门歌手</p>
            <span class="select_span" @click.stop="clickSearchMusic($event)">周杰伦</span>
            <span class="select_span" @click.stop="clickSearchMusic($event)">徐梦圆</span>
            <span class="select_span" @click.stop="clickSearchMusic($event)">Alan Walker</span>
            <span class="select_span" @click.stop="clickSearchMusic($event)">张国荣</span>
            <span class="select_span" @click.stop="clickSearchMusic($event)">Kozoro</span>
            <span class="select_span" @click.stop="clickSearchMusic($event)">Taylor Swift</span>
            <span class="select_span" @click.stop="clickSearchMusic($event)">郑国锋</span>
            <span class="select_span" @click.stop="clickSearchMusic($event)">双笙</span>
            <span class="select_span" @click.stop="clickSearchMusic($event)">Owl City</span>
            <span class="select_span" @click.stop="clickSearchMusic($event)">陈奕迅</span>
            <span class="select_span" @click.stop="clickSearchMusic($event)">许嵩</span>
            <span class="select_span" @click.stop="clickSearchMusic($event)">王若琳</span>
          </div>
        </div>
      </transition>
    </div>
</template>
<script>
  // import musicApi from './../music.js'
  // import store from './../../../store'
  export default {
    data () {
      return {
        showSearch: false
      }
    },
    methods: {
      searchMusic () {
        // alert(this.$refs.searchVal.value)
        const val = this.$refs.searchVal.value
        if (val === '') {
          alert('请输入你想搜的歌曲或歌手信息')
        } else {
          this.$router.push({name: 'searchlist', params: { w: val }})
        }
      },
      back () {
        this.$router.go(-1)
      },
      clickSearchMusic (e) {
        this.$router.push({name: 'searchlist', params: { w: e.target.innerHTML }})
      }
    },
    mounted () {
      this.showSearch = true
      this.$nextTick(() => {
        this.$refs.searchVal.focus()
      })
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import '~common/response.css'
@import '~common/stylus/global.styl'
@import '~common/stylus/style.styl'
.search
  position:fixed
  left:0
  right:0
  bottom:0
  top:0
  padding:20px
  box-sizing:border-box
  z-index:11
  .bg_search
    background:rgba(0,0,0,0.8)
    position:absolute
    left:0
    right:0
    bottom:0
    top:0
    opacity:1
    &.fade-enter-to,&.fade-leave-to
      transition: all 0.3s
    &.fade-enter,&.fade-leave-to
      opacity:0
  .search_content
    width:500px
    max-width:100%
    margin:0 auto
    position:relative
    margin-top:30px
    &.silde-top-enter-to,&.silde-top-leave-to
      transition: all 0.3s
    &.silde-top-enter,&.silde-top-leave-to
      opacity:0
      transform:translate3d(0,-50px,0)
    .search_input
      display:block
      width:100%
      height:40px
      text-indent:4px
      font-size:14px
      margin:0
      padding:0
      box-sizing:border-box
      background:transparent
      color:$text_before_color
      border:1px solid $text_before_color
      outline:none
    .search-btn
      position:absolute
      right:0
      top:0
      width:60px
      height:100%
      color:#fff
      border-left:1px solid $text_before_color
      text-align:center
      cursor:pointer
  .search_select
    width:500px
    max-width:100%
    margin:0 auto
    position:relative
    margin-top:50px
    font-size:0
    height: calc(100% - 140px)
    overflow:auto
    &.silde-bottom-enter-to,&.silde-bottom-leave-to
      transition: all 0.8s 0.2s
    &.silde-bottom-enter,&.silde-bottom-leave-to
      opacity:0
      transform:translate3d(0,50px,0)
    .select_type
      width:100%
      height:auto
      margin-bottom:20px
      .select_title
        width:100%
        height:50px
        line-height:50px
        margin:0
        font-size:18px
        color:$text_color
        text-indent:5px
        border-bottom:1px solid $border_bottom_color
        margin-bottom:10px
      .select_span
        display:inline-block
        width:auto
        padding:2px 10px
        height:20px
        line-height:20px
        border-radius:2px
        cursor:pointer
        margin:15px 8px
        font-size:14px
        color:$text_before_color
        border:1px solid $text_before_color
        &:hover
          color:$text_color
          border:1px solid $text_color
</style>
