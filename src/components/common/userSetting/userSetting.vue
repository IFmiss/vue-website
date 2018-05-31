<template lang="pug">
  <transition name="fade">
    div(class="user-setting", v-if="defaultStatus.isShow")
      div.content
      div.div-exit
        span.exit(@click="exit") 退出
        span.save 保存
  </transition>
</template>
<script>
export default {
  data () {
    return {
      defaultStatus: {}
    }
  },
  props: {
    userSetting: {
      type: Object,
      default: {
        isShow: false,
        userId: 0,
        userName: '',
        userAvatar: '',
        userDisc: ''
      }
    }
  },
  methods: {
    exit () {
      this.$emit('colseSetting', this.userSetting)
    }
  },
  created () {
    this.defaultStatus = this.userSetting
  }
}
</script>
<style lang="stylus" scoped>
  .user-setting
    position absolute
    top 0
    left 0
    right 0
    bottom 0
    background rgba(0,0,0,0.8)
    z-index 1
    -webkit-backdrop-filter blur(15px)
    backdrop-filter blur(15px)
    padding: 80px 10px 30px 10px
    display flex
    justify-content center
    align-items center
    flex-direction column
    &.fade-enter-active, &.fade-leave-active
      transition opacity 0.5s
    &.fade-enter, &.fade-leave-to
      opacity 0
    .content
      flex:1 1 auto
      overflow hidden
      width 100%
      background blue
    .div-exit
      flex 0 0 80px
      background red
      display flex
      width 100%
</style>
