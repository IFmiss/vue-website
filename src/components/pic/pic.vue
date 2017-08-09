<template>
  <div class="div_pic" v-if="picinfo.length">
    <div class="pic_bg" v-if="globalInfo.contentInfo" :style="{backgroundColor:globalInfo.contentInfo.bgcolor, opacity : globalInfo.contentInfo.opacity}"></div>
    <div class="pic_content">
      <picList @showswiper = "showSwiper" v-for="(item, index) in picinfo" :key="item.id" :data-index="index" :data-info="item"></picList>
    </div>
    <transition name="fade-scale">
      <div class="image_detail" v-show="showImageDetail">
        <swiper :options="swiperOption"  ref="mySwiper" :not-next-tick="notNextTick" v-if="picListInfo.length && globalInfo.contentInfo">  
                <!-- 这部分放你要渲染的那些内容 -->  
                <swiper-slide v-for="(item, index) in picListInfo" :key="item.id">
                  <!-- <div class="swiper-lazy-preloader"></div> -->
                  <img class="image_info" :src="item.url" alt="">
                </swiper-slide>
                <!-- 这是轮播的小圆点 -->  
                <div class="swiper-pagination" slot="pagination"></div>  
            </swiper>
            <div class="colse_image_detail" @click.stop="hideSwiper">
              <i class="icon-close"></i>
              <div class="bg_colse_image_detail" :style="{backgroundColor:globalInfo.contentInfo.bgcolor,opacity:globalInfo.contentInfo.opacity}">
              </div>
            </div>
            <div class="bg_info" :style="{backgroundColor:globalInfo.contentInfo.bgcolor,opacity:'0.3'}"></div>
      </div>
    </transition>
  </div>
</template>
<script>
  import store from './../../store'
  import line from './../common/line/line.vue'
  import picList from './picList/picList.vue'
  import fecth from './../../utils/fecth.js'

  export default {
    data () {
      return {
        picinfo: {},
        showImageDetail: false,
        overflowType: 'initial',
        imageBg: '',
        currentPicLists: {},
        notNextTick: true,
        swiperOption: {
          // 是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
          autoplay: 3000,
          grabCursor: true,
          setWrapperSize: true,
          autoHeight: true,
          pagination: '.swiper-pagination',
          paginationClickable: true,
          mousewheelControl: true,
          autoplayDisableOnInteraction: false,
          observeParents: true,
          loop: false,
          initialSlide: 1,
          // lazyLoading: true,
          // lazyLoadingOnTransitionStart: true,
          onSlideChangeEnd: swiper => {
            // 这个位置放swiper的回调方法
            this.page = swiper.realIndex + 1
            this.index = swiper.realIndex
          },
          onClick: swiper => {
            // const index = swiper.activeIndex
            // alert(swiper.slides[index].getAttribute('songlist'))
          }
        }
      }
    },
    computed: {
      globalInfo () {
        return store.getters.getGlobalInfo
      },
      swiper () {
        return this.$refs.mySwiper.swiper
      },
      picListInfo () {
        return store.getters.getPicList
      }
    },
    methods: {
      fetchData () {
        const getImageConditions = 'http://www.daiwei.org/vue/server/home.php?inAjax=1&do=getImageCondition'
        fecth.get(getImageConditions).then((res) => {
          // alert(JSON.stringify(res))
          this.picinfo = res.data
        }, (err) => {
          alert(err)
        })
      },
      showSwiper (index) {
        this.swiperOption.initialSlide = index
        // console.log(this.swiperOption.initialSlide)
        this.showImageDetail = true
      },
      hideSwiper () {
        this.showImageDetail = false
      }
    },
    watch: {
      showImageDetail (val, oldVal) {
        if (val === true) {
          this.overflowType = `hidden`
        } else {
          this.overflowType = `initial`
        }
      }
      // picListInfo (val, oldval) {
      //   alert(JSON.stringify(val))
      // }
    },
    components: {
      'v-line': line,
      picList
    },
    mounted () {
      this.fetchData()
      // $('.picList_content').mCustomScrollbar({
      //    theme: 'minimal-dark'
      // })''
      // alert(store.getters.getGlobalInfo)
      // this.swiper.slideTo(3, 1000, false)
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/global.styl'
    // ::-webkit-scrollbar
    //   background:rgba(55,55,55,0.1)
    //   width:4px
    //   border-radius:2px
    //   margin-left:12px
    // ::-webkit-scrollbar-button    
    //   display:none
    // ::-webkit-scrollbar-track  
    //   border-radius:2px
    //   background:rgba(55,55,55,0.1)
    // ::-webkit-scrollbar-track-piece 
    //   border-radius:2px
    //   background:rgba(55,55,55,0.1)
    // ::-webkit-scrollbar-thumb  
    //   cursor:pointer
    //   border-radius:2px
    //   background:rgba(222,222,222,0.1)
    // ::-webkit-scrollbar-button      
    // ::-webkit-scrollbar-track       
    // ::-webkit-scrollbar-track-piece 
    // ::-webkit-scrollbar-thumb       
    // ::-webkit-scrollbar-corner      
    // ::-webkit-resizer               
  .div_pic
    position:fixed
    top:0
    left:0;
    bottom:0
    width:100%
    right:0
    border-radius:12px
    .pic_bg
      position:absolute
      top:0
      left:0;
      bottom:0
      width:100%
      right:0
      z-index:-1
    .pic_content
      position:fixed
      top:100px
      bottom:50px
      left:50%
      max-width:1240px
      width:100%
      transform:translate3d(-50%,0,0)
      margin:0 auto
      overflow-y:scroll
      box-sizing:border-box
      -webkit-overflow-scrolling: touch
      padding:15px;
      box-sizing:border-box
    .image_detail
      position:fixed
      top:100px
      bottom:50px
      left:50%
      max-width:1240px
      width:100%
      transform:translate3d(-50%,0,0) scale(1)
      transform-origin:center center
      &.fade-scale-enter-active,&.fade-scale-leave-active
        transition: all 0.5s 
      &.fade-scale-enter,&.fade-scale-leave-to
        opacity:0
        transform:translate3d(-50%,0,0) scale(0)
      .swiper-container
        height:100%
        .swiper-wrapper
          .swiper-slide
            width:100%
            height: 100%
            overflow:hidden
        .swiper-pagination
        .swiper-pagination-bullet
          margin:0 4px
          &.swiper-pagination-bullet-active
            background:$active_color!important
      .bg_info
        position:absolute
        top:0
        left:0
        bottom:0
        right:0
        z-index:-1
      .colse_image_detail
        position:absolute
        width:80px
        height:80px
        line-height:80px
        text-align:center
        top:0
        right:0
        z-index:2
        cursor:pointer
        i
          font-size:46px
          color:$text_color
          vertical-align: middle
        .bg_colse_image_detail
          width:100%
          height:100%
          z-index:-1
      .bg_image_info
        display:block
        width:100%
        height:100%
      .image_info
        height:100%
        display:block
        margin:0 auto
</style>
