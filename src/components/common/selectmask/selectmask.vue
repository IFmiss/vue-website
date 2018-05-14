<template>
  <transition name="fade">
    <div class="selectmask" v-if="getIsShow">
      <div class="list_content">
        <div class="selectmask_list dw-boot-col-lg-3 dw-boot-col-md-4 dw-boot-col-xs-12 dw-boot-col-sm-6" v-if="getMaskTypeData" v-for="item in getMaskTypeData">
          <div class="mask_list_info" :masktype="item.type" :class="getGlobalInfo.contentInfo.type === item.type ? 'active' : ''" @click="fnSetMaskType(item.type)">
            <div class="demo_info">
              <img class="demo_img" :src="getFixImageInfo"  alt="">
              <div class="demo_bg" :style="getMaskTypeCss(item.type)"></div>
            </div>
            <span class="title">{{item.title}}</span>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
  import SetMaskType from './selectmask.js'
  export default {
    props: {
      isshow: {
        type: Boolean,
        default: false
      },
      maskdata: {
        type: Array,
        default: []
      },
      maskimage: {
        type: String,
        default: ''
      },
      maskglobainfo: {
        type: Object,
        default: {}
      }
    },
    methods: {
      getMaskTypeCss (type) {
        let style = SetMaskType(type, this.maskglobainfo)
        return style
      },
      // 将type数据存到store本地且关闭页面
      fnSetMaskType (type) {
        this.maskglobainfo.contentInfo.type = type
        this.$emit('setmasktype', type)
      }
    },
    computed: {
      getIsShow () {
        return this.isshow
      },
      getMaskTypeData () {
        return this.maskdata
      },
      getGlobalInfo () {
        return this.maskglobainfo
      },
      getFixImageInfo () {
        return this.maskimage
      }
    },
    created () {
      // alert(JSON.stringify(this.maskoption))
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import '~common/stylus/global.styl'
.selectmask
  position: fixed
  width: 100%
  height: 100%
  top: 0
  left: 0
  border-radius: 8px
  z-index: 1
  background: $com_bg
  &.fade-enter-to,&.fade-leave-to
    transition:all 0.5s
  &.fade-enter,&.fade-leave-to
    opacity:0
  .list_content
    position:fixed
    top:80px
    bottom:50px
    left:50%
    max-width:1240px
    width:100%
    transform:translate3d(-50%,0,0)
    margin:0 auto
    overflow-y:auto
    box-sizing:border-box
    -webkit-overflow-scrolling: touch
    padding:15px
    box-sizing:border-box
    opacity:1
    transition: all 0.5s 0.3s
    .selectmask_list
      padding: 15px
      box-sizing:border-box
      .mask_list_info
        position:relative
        outline: 5px solid $border_bottom_color
        cursor:pointer
        width:90%
        margin:0 auto
        &:hover
          outline-color:$border_bottom_color_deep
        &.active
          outline-color:$check_color
          &:hover
            outline-color:$check_active_color
        .title
          color:$text_color
          text-align:center
          display:block
          font-size:14px
        .demo_info
          width:100%
          position:relative
          .demo_img
            width:100%
            display:block
            outline:none 0
          .demo_bg
            position:absolute
            top:0
            left:0
            right:0
            bottom:0
            width:100%
            height:100%
</style>
