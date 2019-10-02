<template>
  <div class="fixedbg" ref="fixedbg" :style="{backgroundImage : 'url(' + imagepath + ')', backgroundSize:imagesize, backgroundPosition:imageposition}">
    <div class="mask-fixedbg" :style="maskType"></div>
  </div>
</template>
<script>
import SetMaskType from './../selectmask/selectmask.js'
import DGlobal from '@/common/js/global.js'
import {addClass, removeClass} from '@/common/js/Dom.js'

export default {
  data () {
    return {
      imagesize: 'cover',
      imageposition: 'center center',
      moveBg: true,
      alpha: '',
      beta: '',
      gamma: ''
    }
  },
  props: {
    imagepath: {
      type: String,
      default: ''
    },
    maskcolor: {
      type: String,
      default: 'transparent'
    },
    maskopacity: {
      type: String,
      default: '0.5'
    },
    masktype: {
      type: String,
      default: 'default'
    },
    maskglobainfo: {
      type: Object,
      default: {}
    }
  },
  computed: {
    maskType () {
      var styleCss = SetMaskType(this.masktype, this.maskglobainfo)
      return styleCss
    }
  },
  watch: {
    imagepath (cur, old) {
      this.$nextTick(() => {
        this.loadimgTrans()
      })
    }
  },
  methods: {
    fnMoveBg () {
      const _this = this
      if (this.moveBg && /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
        let sizeY = window.screen.height
        // let sizeX = window.screen.width
        _this.$refs.fixedbg.style.backgroundSize = `auto calc(${sizeY}px)`
        window.addEventListener('deviceorientation', function (event) {
          _this.alpha = Math.round(event.alpha)
          _this.beta = (Math.round(event.beta) > 50 ? 50 : Math.round(event.beta)) < -50 ? -50 : (Math.round(event.beta) > 50 ? 50 : Math.round(event.beta))
          _this.gamma = (Math.round(event.gamma) > 30 ? 30 : Math.round(event.gamma)) < -30 ? -30 : (Math.round(event.gamma) > 30 ? 30 : Math.round(event.gamma))
          _this.$refs.fixedbg.style.backgroundPosition = `calc(${_this.gamma} / 45 * 15px + 50%) calc(${_this.beta} / 45 * 15px + 50%) `
          // _this.$refs.fixedbg.style.WebkitTransform = `translate3d(${_this.gamma}px,${_this.beta}px,0)`
        })
      }
    },

    loadimgTrans () {
      addClass(this.$refs.fixedbg, 'load')
      let img = new Image()
      img.src = this.imagepath
      img.onload = () => {
        removeClass(this.$refs.fixedbg, 'load')
      }
    },

    initMoveBg () {
      // 设置背景色
      DGlobal.utils.moveImage().then(() => {
        this.fnMoveBg()
      }, () => {
        // this.fnMoveBg()
        this.$msg('让我猜一下,你一定是安卓手机,hahaha')
      })
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.loadimgTrans()
      this.initMoveBg()
    })
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import '~common/stylus/global.styl'
  .fixedbg
    position:fixed
    z-index:-2
    top:0
    left:0
    right:0
    bottom:0
    background-color:#000
    &:before
      content: ''
      position:absolute
      top: 0
      left: 0
      right: 0
      bottom:0
      background-color: $color_deep_gray
      opacity: 0
      visibility:hidden
      transition: all 0.5s
    &.load
      &:before
        content: ''
        position:absolute
        top: 0
        left: 0
        right: 0
        bottom:0
        opacity: 1
        visibility:visible
        background-color: $color_deep_gray
    .mask-fixedbg
      position:fixed
      z-index:111111111111
      top:0
      left:0
      right:0
      bottom:0
</style>
