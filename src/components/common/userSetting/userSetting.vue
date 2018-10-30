<template lang="pug">
  <transition name="fade">
    div(class="user-setting", v-if="userSetting.isShow")
      div.content
        div(class="useravatar")
          img(:src="newavatar || userSetting.avatar")
          .upload
            .text 点击上传
            input(type="file", @change="getPicUrl($event)", accept="image/*")
          .avatarname {{newavatarname}}
        div(class="nickname setting-list")
          .lable 昵称：
          input(v-model="userSetting.nickname")
        div(class="userdisc setting-list")
          .lable 用户描述：
          textarea(v-model="userSetting.desc")
      div.div-exit
        span.exit(@click="exit") 退出
        span.save(@click="save") 保存
  </transition>
</template>
<script>
import fecth from 'utils/fecth.js'
import API from 'config/api'
export default {
  data () {
    return {
      newUserInfo: this.userSetting,
      newavatarname: '',
      newavatar: ''
    }
  },
  props: {
    userSetting: {
      type: Object,
      default: {
        isShow: false,
        id: 0,
        username: '',
        avatar: '',
        nickname: '',
        desc: '',
        sex: 0
      }
    }
  },
  methods: {
    getPicUrl (e) {
      this.newavatarname = e.target.files[0].name + '正在上传中...'
      let file = e.target.files[0]
      let formdata = new FormData()
      formdata.append('file', file)
      formdata.append('userId', this.userSetting.id)
      fecth.upload(API.UPLOAD, formdata).then((res) => {
        if (res.data.code === '1') {
          this.newUserInfo.avatar = res.data.imageUrl + '?data=' + Math.random()
          this.newavatar = res.data.imageUrl + '?data=' + Math.random()
          this.newavatarname = '头像上传成功，请完善其他信息并保存'
          this.$msg(res.data.msg)
        } else {
          this.newavatarname = res.data.msg
          this.$msg(res.data.msg)
        }
      }).catch((err) => {
        console.log(err)
      })
    },
    exit () {
      this.$emit('exit', this.newUserInfo)
    },
    save () {
      fecth.post(API.UPDATE_USER_INFO, {
        userid: this.userSetting.id,
        nickname: this.userSetting.nickname,
        desc: this.userSetting.desc
      }).then((res) => {
        this.newUserInfo = {
          isShow: false,
          ...res.data.data,
          avatar: res.data.data.avatar + '?data=' + Math.random()
        }
        this.$emit('save', this.newUserInfo)
      }, (err) => {
        console.log(err)
      })
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '~common/stylus/global.styl'
@import '~common/stylus/border-1px/index.styl'
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
    padding: 80px 30px 30px 30px
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
      width 100%
      overflow auto
      --webkit-overflow-scrolling touch
      .useravatar
        display flex
        align-items center
        justify-content center
        flex-direction column
        img 
          width 100px
          height 100px
          border-radius: 50%
          margin 10px 0
          border 5px solid rgba(255,255,255,0.2)
        .upload
          width 80px
          height 30px
          display flex
          align-items center
          justify-content center
          position relative
          input[type="file"]
            width 100%
            height 100%
            position absolute 
            top 0
            left 0
            right 0
            bottom 0
            display block
            opacity 0
            cursor pointer
        .avatarname
          font-size 12px
          height 40px
      // background blue
      .setting-list
        width 98%
        max-width 320px
        display flex
        align-items center
        margin-bottom 20px
        .lable
          flex: 0 0 90px
          overflow hidden
          text-overflow ellipsis
          white-space nowrap
        input 
          flex 1 1 auto
          background transparent
          color $text_color
          text-indent 5px
          border: 1px solid $text_color_active
          outline none 
          height 30px
        &.userdisc
          align-items flex-start
          textarea
            background transparent
            color $text_color
            text-indent 5px
            border: 1px solid $text_color_active
            outline none 
            resize none
            flex 1 1 auto
            height 80px
            line-height 1.5
    .div-exit
      flex 0 0 80px
      display flex
      width 100%
      align-items center
      justify-content center
      span
        padding 10px 30px
        cursor pointer
        color: $text_color
        &:hover
          color: $text_color_active
    .content
      color $text_color
      align-items center
      justify-content flex-start
      flex-direction column
      display flex
</style>
