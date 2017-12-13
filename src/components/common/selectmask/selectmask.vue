<template>
  <div class="selectmask" v-if="getIsShow">
    <div class="list_content">
      <div class="selectmask_list dw-boot-col-lg-3 dw-boot-col-md-4 dw-boot-col-xs-12 dw-boot-col-sm-6" v-if="getMaskTypeData" v-for="item in getMaskTypeData">
        <div class="mask_list_info" :masktype="item.type">
          <div class="demo_info">
            <img class="demo_img" src=""  alt="">
            <div class="demo_bg"></div>
          </div>
          <span>{{item.title}}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      maskoption: {
        isShow: {
          type: Boolean,
          default: false
        },
        data: {
          type: Array,
          default: []
        }
      }
    },
    computed: {
      getIsShow () {
        return this.maskoption.isShow
      },
      getMaskTypeData () {
        return this.maskoption.data
      },
      getGlobalInfo () {
        return this.maskoption.globalInfo
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import '../../../common/stylus/global.styl'
.selectmask
  position: fixed
  width: 100%
  height: 100%
  top: 0
  left: 0
  border-radius: 8px
  z-index: 1
  background: rgba(0,0,0,0.3)
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
    background:red
    .selectmask_list
      padding: 15px
      box-sizing:border-box
</style>
