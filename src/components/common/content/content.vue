<template>
  <section class="div_content">
    <ul class="ul-header border-1px">
      <!-- pc 页面菜单 -->
      <div class="left-menu" v-show="getGlobalInfo.isHigher768">
        <router-link tag="a" to="/home">
          <li>首页</li>
          </router-link>
          <router-link tag="a" to="/pic">
            <li>图片</li>
          </router-link>
          <router-link tag="a" to="/music">
            <li>音乐</li>
          </router-link>
          <router-link tag="a" to="/about">
            <li>关于</li>
          </router-link>
          <a href="http://www.daiwei.org">
            <li>回归旧版</li>
          </a>
        </div>
        <!-- 移动端菜单按钮 -->
        <transition name="fade">
          <div class="fixed-fade-menu" v-show="showLeftMenu" @click="hideLeftContent">
            <div class="fixed-menu-content" @click="hideLeftContent">
              <router-link tag="a" to="/home">
              <li>首页</li>
              </router-link>
              <router-link tag="a" to="/pic">
                <li>图片</li>
              </router-link>
              <router-link tag="a" to="/music">
                <li>音乐</li>
              </router-link>
              <router-link tag="a" to="/about">
                <li>关于</li>
              </router-link>
              <a href="http://www.daiwei.org">
                <li>回归旧版</li>
              </a>
            </div>
          </div>
        </transition>
      </div>
      <div class="fixed-menu" v-show="!getGlobalInfo.isHigher768" @click="toggleMenuContent">
        <i class="icon-menu"></i>
      </div>
      <!-- pc 移动端设置按钮 -->
      <div class="right-menu">
        <span class="place" :data-place="getPlace.region">{{getPlace.city}}</span>
        <router-link tag="a" to="/setting" class="a-icon">
          <li class="li-icon" @click="hideLeftContent"><i class="icon-setting"></i></li>
        </router-link>
      </div>
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
  data () {
    return {
      showLeftMenu: false
    }
  },
  methods: {
    toggleMenuContent () {
      this.showLeftMenu = !this.showLeftMenu
    },
    hideLeftContent () {
      this.showLeftMenu = false
    }
  },
  computed: {
    getGlobalInfo () {
      return store.getters.getGlobalInfo
    },
    getPlace () {
      // alert(JSON.stringify(store.getters.getPlace))
      return store.getters.getPlace
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
      .left-menu
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
      .right-menu
        position:absolute
        right:10px
        height:40px
        top:0
        font-size:0
        .place
          display:inline-block
          font-size: 14px
          height:100%
          vertical-align: middle
          color:$text_color
          vertical-align:top
          cursor:pointer
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
          li
            // border-bottom:none
            display:flex
            height:40px
            align-items:center
            i
              font-size:18px
              vertical-align: middle
      .fixed-menu
        position:absolute
        left:0
        top:0
        width:50px
        height:40px
        line-height:40px
        text-align:center
        i
          display: inline-block
          font-size: 20px
          vertical-align: middle
          color:$text_color
        &.active
          i
            color:$text_color_active
      .fixed-fade-menu
        position:fixed
        top: 0
        left: 0
        bottom: 0
        right: 0
        background:$mask_color
        &.fade-enter-to,&.fade-leave-to
          transition: all 0.5s
        &.fade-enter,&.fade-leave-to
          opacity:0
        // .fixed-list
        //   position:fixed
        //   top: 0
        //   left: 0
        //   bottom: 0
        //   width:280px
        //   height:100%
        //   background:red
        //   z-index:101
        //   transform:translate3d(0,0,0)
        //   &.slide-left-enter-to,&.slide-left-leave-to
        //     transition: all 0.8s
        //   &.slide-left-enter,&.slide-left-leave-to
        //     transform:translate3d(0,-280px,0)
        .fixed-menu-content
          width:100%
          height:100%
          padding:10px
          box-sizing:border-box
          font-size:14px
          display:flex
          flex-direction:column
          justify-content: center
          a 
            text-decoration:none
            li
              color:#fff
              width:100%
              height:40px
              line-height:40px
              text-align:center
            &.router-link-active
              li
                color:$border_color
                // border-bottom:1px solid $border_color
    .li_list
      transform:translate3d(0,0,0)
      &.fade-enter-to,&.fade-leave-to
        transition: all 0.8s
      &.fade-enter,&.fade-leave-to
        opacity:0
        transform:translate3d(0,50px,0)
</style>