<template>
  <div class="fixedbg" ref="fixedbg" :style="{backgroundImage : 'url(' + imagepath + ')', backgroundSize:imagesize, backgroundPosition:imageposition}">
    <div class="mask-fixedbg" :style="maskType"></div>
  </div>
</template>
<script>
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
      default: 'http://www.daiwei.org/global/image/img1.jpg'
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
    }
  },
  computed: {
    maskType () {
      if (this.masktype === 'default') {
        return {
          background: this.maskcolor,
          opacity: this.maskopacity
        }
      }
      if (this.masktype === 'radial-gradient-ellipse') {
        return {
          background: `-webkit-radial-gradient(50% 50%,ellipse closest-corner,rgba(0,0,0,0) 10%, ${this.maskcolor} 90%)`,
          opacity: this.maskopacity
        }
      }
    }
  },
  watch: {
    imagepath (cur, old) {
      this.$nextTick(() => {
        this.initMoveBg()
      })
    }
  },
  methods: {
    initMoveBg () {
      const _this = this
      if (this.moveBg && /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
        let sizeY = window.screen.height
        // let sizeX = window.screen.width
        _this.$refs.fixedbg.style.backgroundSize = `auto calc(${sizeY}px)`
        window.addEventListener('deviceorientation', function (event) {
          _this.alpha = Math.round(event.alpha)
          _this.beta = Math.round(event.beta)
          _this.gamma = Math.round(event.gamma)
          _this.$refs.fixedbg.style.backgroundPosition = `calc(${_this.gamma} / 45 * 15px + 50%) calc(${_this.beta} / 45 * 15px + 50%) `
          // _this.$refs.fixedbg.style.WebkitTransform = `translate3d(${_this.gamma}px,${_this.beta}px,0)`
        })
      }
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.initMoveBg()
    })
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .fixedbg
    position:fixed
    z-index:-2
    top:0
    left:0
    right:0
    bottom:0
    background-color:#000
    // transition:all 0.3s
    .mask-fixedbg
      position:fixed
      z-index:111111111111
      top:0
      left:0
      right:0
      bottom:0
</style>
