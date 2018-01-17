<template>
	<div class="weather">
		<transition name="fade-up">
			<div class="weather-content" v-if="isShow">
          <span class="weather-tips" v-if="!getWeather.length">暂时没有天气信息哦，请刷新页面重试！</span>
          <div class="bg-info" :style="{backgroundColor:getGlobalInfo.contentInfo.bgcolor,opacity:(getGlobalInfo.contentInfo.opacity * 1 + 0.3 > 0.5 ? 0.5 : getGlobalInfo.contentInfo.opacity * 1 + 0.2)}"></div>
          <div class="weather-detail" v-if="getWeather">
            <div class="weather-today" v-if="getWeather[0]">
              <div class="top-today">
                <span class="left-info">
                  今天
                </span>
                <span class="right-info" :title="getWeather[0].date">
                  {{getWeather[0].date}}
                </span>
              </div>
              <span class="type-today" :title="getWeather[0].type">{{getWeather[0].type}}</span>
              <span class="wendu-today" :title="getRightWendu(getWeather[0].low, getWeather[0].high)">{{getRightWendu(getWeather[0].low, getWeather[0].high)}}</span>
              <span class="wind-today" :title="getWeather[0].fx + ' ' + getWeather[0].fl">{{getWeather[0].fx}} {{getWeather[0].fl}}</span>
              <span class="notice-today" :title="getWeather[0].notice">{{getWeather[0].notice}}</span>
            </div>
            <div class="weather-other" v-if="getWeather" v-for="(item, index) in getWeather" v-show="index > 0 && index < 4">
              <span class="weather-time">{{index === 1 ? '明天:' : (index === 2 ? '后天:' : '大后天:')}}</span>
              <span class="weather-type" :title="item.type">{{item.type}}</span>
              <span class="weather-wendu" :title="getRightWendu(item.low, item.high)">{{getRightWendu(item.low, item.high)}}</span>
            </div>
          </div>
      </div>
		</transition>
	</div>
</template>
<script>
  import store from 'store'
  let t
  export default {
  props: {
  	isShow: false
  },
  methods: {
    // 显示天气信息
    showWeatherInfo () {
      clearTimeout(t)
      this.isShow = true
    },
    // 隐藏天气信息
    hideWeatherInfo () {
      const _that = this
      t = setTimeout(function () {
          _that.isShow = false
      }, 800)
    },
    getRightWendu (l, h) {
      return l.split(' ')[l.split(' ').length - 1] + ' ~ ' + h.split(' ')[l.split(' ').length - 1]
    }
  },
  computed: {
    getGlobalInfo () {
      return store.getters.getGlobalInfo
    },
    getPlace () {
      // alert(JSON.stringify(store.getters.getPlace))
      return store.getters.getPlace
    },
    getWeather () {
      return store.getters.getWeatherInfo
    }
  }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import '~common/response.css'
@import '~common/stylus/global.styl'
@import '~common/stylus/style.styl'
.weather
  width:auto
  height:auto
  .weather-content
    border-radius:4px
    position:absolute
    height:auto
    right:0
    width:260px
    overflow:hidden
    padding:15px
    &.fade-up-enter-to
      transition:all 0.3s
    &.fade-up-leave-to
      transition:all 0.2s 0.1s
    &.fade-up-enter,&.fade-up-leave-to
      opacity:0
      transform:translate3d(0,50px,0)
    .weather-tips
      font-size:12px
      color:$text_color_opacity
      display:inline-block
      text-align:center
      width:100%
    .bg-info
      position:absolute
      top:0
      left:0
      right:0
      bottom:0
      z-index:-1
    .weather-detail
      width:100%
      height:100%
      box-sizing:border-box
      .weather-today
        width:100%
        height:auto
        padding-bottom:5px
        border-bottom:1px solid $border_bottom_color
        .top-today
          width:100%
          height:50px
          font-size:0
          .left-info
            display:inline-block
            width:100px
            font-size:28px
          .right-info
            display:inline-block
            width:auto;
            font-size:14px
        span
          display:block
          margin:0
          padding:4px 0
          font-size:12px
          height:auto
          line-height:1.5 
      .weather-other
        width:100%;
        overflow:hidden
        height:40px
        border-bottom:1px dashed $border_bottom_color
        padding:4px 0
        font-size:0
        .weather-wendu,.weather-type,.weather-time
          display:inline-block
          height:100%
          overflow:hidden
          text-overflow:ellipsis
          white-space:nowrap
          font-size:12px
        .weather-wendu
          width:40%
        .weather-time
          width:20%
        .weather-type
          width:40%
</style>