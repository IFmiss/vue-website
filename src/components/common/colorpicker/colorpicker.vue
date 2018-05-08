<template>
  <div class="colorpicker">
    <div class="colorlist" v-for="(item, index) in getColor">
      <!-- <div class="color-detail" v-for="(detail, index) in item" :style="{backgroundColor:'#' + detail}" :data-color="'#' + detail" @click="changeBg($event)">
      </div> -->
      <div class="block">
        <span class="demonstration">有默认值</span>
        <el-color-picker v-model="color1"></el-color-picker>
      </div>
    </div>
  </div>
</template>
<script>
import store from 'store'
export default {
  data () {
    return {
      color: {
          // ['003366', '336699', '3366cc', '003399', '000099', '0000cc', '000066'],
          // ['006666', '006699', '0099cc', '0066cc', '0033cc', '0000ff', '3333ff', '333399'],
          // ['669999', '009999', '33cccc', '00ccff', '0099ff', '0066ff', '3366ff', '3333cc', '666699'],
          // ['339966', '00cc99', '00ffcc', '00ffff', '33ccff', '3399ff', '6699ff', '6666ff', '6600ff', '6600cc'],
          // ['339933', '00cc66', '00ff99', '66ffcc', '66ffff', '66ccff', '99ccff', '9999ff', '9966ff', '9933ff', '9900ff'],
          // ['006600', '00cc00', '00ff00', '66ff99', '99ffcc', 'ccffff', 'ccccff', 'cc99ff', 'cc66ff', 'cc33ff', 'cc00ff', '9900cc'],
          // ['003300', '009933', '33cc33', '66ff66', '99ff99', 'ccffcc', 'ffffff', 'ffccff', 'ff99ff', 'ff66ff', 'ff00ff', 'cc00cc', '660066'],
          // ['333300', '009900', '66ff33', '99ff66', 'ccff99', 'ffffcc', 'ffcccc', 'ff99cc', 'ff66cc', 'ff33cc', 'cc0099', '993399'],
          // ['336600', '669900', '99ff33', 'ccff66', 'ffff99', 'ffcc99', 'ff9999', 'ff6699', 'ff3399', 'cc3399', '990099'],
          // ['666633', '99cc00', 'ccff33', 'ffff66', 'ffcc66', 'ff9966', 'ff6666', 'ff0066', 'd60094', '993366'],
          // ['a58800', 'cccc00', 'ffff00', 'ffcc00', 'ff9933', 'ff6600', 'ff0033', 'cc0066', '660033'],
          // ['996633', 'cc9900', 'ff9900', 'cc6600', 'ff3300', 'ff0000', 'cc0000', '990033'],
          // ['663300', '996600', 'cc3300', '993300', '990000', '800000', '993333']
      },
      color1: '#409EFF'
    }
  },
  methods: {
    changeBg (e) {
      store.dispatch({
        type: 'set_GlobaBglColor',
        data: e.target.getAttribute('data-color')
      })
      localStorage.setItem('globalInfo', JSON.stringify(store.getters.getGlobalInfo))
      this.$emit('isclose')
    }
    // showColor () {
    //   alert(JSON.stringify(this.color))
    // }
  },
  computed: {
    getColor () {
      // alert(this.color.length)
      let color = []
      let hex = ['00', '33', '66', '99', 'cc', 'ff']
      let c = ''
      let n = 0
      for (let i = 0; i < 6; i++) {
        n++
        color[n] = []
        for (let j = 0; j < 6; j++) {
          for (let k = 0; k < 6; k++) {
            c = hex[j] + hex[k] + hex[i]
            // this.color[n] = []
            // this.color[n].push(color)
            // console.log(n)
            color[n].push(c)
          }
        }
      }
      return color
    }
  },
  mounted () {
    // this.$nextTick(() => {

    // })
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import '~common/stylus/global.styl'
  .colorpicker
    position:relative
    width:80%
    max-width:720px
    height:auto
    margin: 0 auto
    font-size:0
    overflow:auto
    .colorlist
      // display:flex
      // justify-content:center
      display:inline-block
      width:100%
      height:auto
      margin: 0 auto
      line-height:10px
      .color-detail
        width:20px
        height:20px
        display:inline-block
        border-radius:50%
        box-sizing:border-box
        cursor:pointer
        &:hover
          border:1px solid $text_color
</style>
