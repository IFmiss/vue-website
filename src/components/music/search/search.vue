<template>
  <div class="search" v-show="showSearch">
    <div class="search_content">
      <input class="search_input" ref="searchVal" type="text" @keyup.enter="searchMusic">
      <div class="search-btn" @click="searchMusic">搜索</div>
    </div>
    <div class="list_content">
      <div class="music_list_title border-1px">
        <span class="music_index"></span>
        <span class="music_name">歌曲</span>
        <span class="music_singer">歌手</span>
        <span class="music_zhuanji">专辑</span>
        <span class="music_duration">时长</span> 
      </div>
      <div class="music_list_content">
        <div class="music_list border-1px" v-if="getMusicSearchList" v-for="(list, index) in getMusicSearchList" :key="list.id" :data-musicid="list.id" :data-pic="list.al.picUrl" @click="clickPlayList(list.id, list.al.picUrl, getMusicDurationType(list.dt),index)">
          <span class="music_index">
            <span>{{index + 1}}</span>
            <!-- <span v-show="getCurrentMusic.index !== index">{{index + 1}}</span> -->
            <!-- <img v-show="getCurrentMusic.index === index" src="static/wave.gif" alt="未曾遗忘的青春"> -->
          </span>
          <div class="music_name">
            <span class="span_name">{{list.name}}</span>
            <div class="hover_menu"></div>
          </div>
          <span class="music_singer" v-if="list.ar">{{list.ar[0].name}}</span>
          <span class="music_zhuanji" v-if="list.al">{{list.al.name}}</span>
          <span class="music_duration">{{getMusicDurationType(list.dt)}}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import musicApi from './../music.js'
  import store from './../../../store'
  export default {
    data () {
      return {
        showSearch: true
      }
    },
    computed: {
      getMusicSearchList () {
        return store.getters.getMusicSearchList
      }
    },
    methods: {
      searchMusic () {
        // alert(this.$refs.searchVal.value)
        const val = this.$refs.searchVal.value
        if (val === '') {
          alert('请输入你想搜的歌曲或歌手信息')
        } else {
          musicApi.searchMusic(val, 1, this)
          // this.$router.go(-1)
        }
      },
      // 音乐时长格式
      getMusicDurationType (time) {
        return musicApi.getMusicDurantionType(time, this)
      },
      // 点击播放音乐
      clickPlayList (id, pic, duration, index) {
        const data = {
          id: id,
          pic: pic,
          duration: duration,
          index: index,
          lrcContent: this.$refs.lrcContent
        }
        musicApi.clickIndex(data, this)
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import '../../../common/response.css'
@import '../../../common/stylus/global.styl'
@import '../../../common/stylus/style.styl'
.search
  background:#333
  position:absolute
  left:0
  right:0
  bottom:0
  top:0
  padding:20px
  box-sizing:border-box
  z-index:11
  .search_content
    width:500px
    max-width:100%
    margin:0 auto
    position:relative
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
  .list_content
    height:calc(100% - 60px)
    padding:10px
    box-sizing:border-box
    .music_list_title,.music_list
      height:50px
      line-height:50px
      // background:red
      font-size:0
      span
        display:inline-block
        font-size:14px
        color:$text_before_color
        text-overflow:ellipsis
        overflow:hidden
        white-space:nowrap
        &.music_name
          width:calc(50% - 50px)
          font-size:14px
        &.music_singer
          width:20%
          padding:0 5px
          box-sizing:border-box
        &.music_zhuanji
          width:20%
          padding:0 5px
          box-sizing:border-box
        &.music_duration
          width:10%
          padding:0 5px
          box-sizing:border-box
        &.music_index
          width:50px
          height:100%
          text-align: center;
      .music_name
        width:calc(50% - 50px)
        display:inline-block
        font-size:14px
        height:50px
        line-height:50px
        color:$text_before_color
        text-overflow:ellipsis
        overflow:hidden
        white-space:nowrap
        font-size:0
        position:relative
        .span_name
          display:inline-block
          width: 100% 
          height:100%
          // background:red
          font-size:14px
        .hover_menu
          position:absolute
          width:140px
          height:100%
          right:0
          top:0
          // background:red
          display:none
      &.border-1px
        border-1px($border_bottom_color,bottom)
    .music_list_content
      height:calc(100% - 50px)
      position:relative
      overflow:auto
      .music_list
        position:relative
        &:hover
          background:$list_hover
          .music_name
            .hover_menu
              display:block
</style>
