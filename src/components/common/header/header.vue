<template>
  <section class="header">
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
    </ul>
    <p class="border-1px"></p>
  </section>
</template>
<script>
export default {
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import '../../../common/stylus/border-1px/index.styl'
@import '../../../common/stylus/global.styl'
  .header
    position:fixed
    top:0
    left:0
    right:0
    height:40px
    line-height:40px
    .ul-header
      height:100%
      margin:0
      font-size:0
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
          
</style>
