<template>
  <section class="div_content">
    <ul class="ul-header border-1px">
      <router-link tag="a" to="/home">
        <li>首页</li>
      </router-link>
      <router-link tag="a" to="/pic">
        <li>图片</li>
      </router-link>
      <router-link tag="a" to="/music">
        <li>音乐</li>
      </router-link>
      <router-link tag="a" to="/blog">
        <li>博客</li>
      </router-link>
      <router-link tag="a" to="/about">
        <li>关于</li>
      </router-link>
      <router-link tag="a" to="/setting" class="a-icon">
        <li class="li-icon"><i class="icon-setting"></i></li>
      </router-link>
    </ul>
    <transition name="fade">
      <keep-alive>
        <router-view class="li_list"></router-view>
      </keep-alive>
    </transition>
  </section>
</template>
<script>
import store from './../../../store'
export default {
  computed: {
    getGlobalStyle () {
      return store.getters.getGlobalInfo
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import '../../../common/stylus/border-1px/index.styl'
@import '../../../common/stylus/global.styl'
  .div_content
    position:fixed
    top:0
    left:0
    right:0
    height:40px
    line-height:40px
    .ul-header
      position:fixed
      top:0
      left:0
      right:0
      height:40px
      line-height:40px
      z-index:111
      margin:0
      font-size:0
      padding:0 20px
      a
        list-style:none
        display:inline-block
        font-size:14px
        padding:0 14px
        margin:0
        color:$text_color
        cursor:pointer
        font-family:"Segoe UI",Segoe,Tahoma,Arial,Verdana,sans-serif
        text-decoration:none
        &.router-link-active
          li
            color:$text_color_active
            border-bottom:1px solid $border_color
        &.a-icon
          position:absolute
          right:10px
          top:0
          li
            // border-bottom:none
            i
              font-size:18px
              vertical-align: middle
              
    .li_list
      transform:translate3d(0,0,0)
      &.fade-enter-to,&.fade-leave-to
        transition: all 0.8s
      &.fade-enter,&.fade-leave-to
        opacity:0
        transform:translate3d(0,50px,0)
</style>
