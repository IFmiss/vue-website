<template>
  <div class="jokeList border-1px" v-html="disc">
  </div>
</template>
<script>
  export default{
  	props: {
  		disc: {
  			type: String
  		}
  	}
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import '~common/stylus/global.styl'
  @import '~common/stylus/border-1px/index.styl'
  .jokeList
    position:relative
    font-size:16px
    color:#fff
    padding:20px 10px
    cursor:default
    transition:all 0.3s
    line-height: 1.8;
    &:hover
      background:rgba(0,0,0,0.3)
    &.border-1px
      border-1px($border_bottom_color_deep, bottom)
</style>
