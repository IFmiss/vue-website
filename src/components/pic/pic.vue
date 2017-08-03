<template>
  <div class="div_pic">
    <div class="pic_bg" v-if="picBg" :style="{backgroundColor:picBg.contentInfo.bgcolor, opacity : picBg.contentInfo.opacity}"></div>
    <div class="pic_content">
      <div class="box" ref="box">
        <div class="pic">
          <img src="http://oiq8j9er1.bkt.clouddn.com/music_%E5%A5%B9%E8%AF%B4.jpg" alt="">
        </div>
      </div>
      <div class="box" ref="box">
        <div class="pic">
          <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=190749879,1758335090&fm=26&gp=0.jpg" alt="">
        </div>
      </div>
      <div class="box" ref="box">
        <div class="pic">
          <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4007804111,2303444572&fm=26&gp=0.jpg" alt="">
        </div>
      </div>
      <div class="box" ref="box">
        <div class="pic">
          <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3965895917,3845310417&fm=26&gp=0.jpg" alt="">
        </div>
      </div>
      <div class="box" ref="box">
        <div class="pic">
          <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1946568060,4220016253&fm=11&gp=0.jpg" alt="">
        </div>
      </div>
      <div class="box" ref="box">
        <div class="pic">
          <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3689751919,2543434411&fm=26&gp=0.jpg" alt="">
        </div>
      </div>
      <div class="box" ref="box">
        <div class="pic">
          <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3963232422,3913229073&fm=26&gp=0.jpg" alt="">
        </div>
      </div><div class="box" ref="box">
        <div class="pic">
          <img src="http://oiq8j9er1.bkt.clouddn.com/music_%E5%A5%B9%E8%AF%B4.jpg" alt="">
        </div>
      </div>
      <div class="box" ref="box">
        <div class="pic">
          <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3120971618,2088939442&fm=26&gp=0.jpg" alt="">
        </div>
      </div>
      <div class="box" ref="box">
        <div class="pic">
          <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1946568060,4220016253&fm=11&gp=0.jpg" alt="">
        </div>
      </div>
      <div class="box" ref="box">
        <div class="pic">
          <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3120971618,2088939442&fm=26&gp=0.jpg" alt="">
        </div>
      </div>
      <div class="box" ref="box">
        <div class="pic">
          <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=4039520080,1420114353&fm=26&gp=0.jpg" alt="">
        </div>
      </div>
      <div class="box" ref="box">
        <div class="pic">
          <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3654962827,264612721&fm=26&gp=0.jpg" alt="">
        </div>
      </div>
      <div class="box" ref="box">
        <div class="pic">
          <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2340339531,698154077&fm=26&gp=0.jpg" alt="">
        </div>
      </div>
      <div class="box" ref="box">
        <div class="pic">
          <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3689751919,2543434411&fm=26&gp=0.jpg" alt="">
        </div>
      </div>
      <div class="box" ref="box">
        <div class="pic">
          <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3963232422,3913229073&fm=26&gp=0.jpg" alt="">
        </div>
      </div><div class="box" ref="box">
        <div class="pic">
          <img src="http://oiq8j9er1.bkt.clouddn.com/music_%E5%A5%B9%E8%AF%B4.jpg" alt="">
        </div>
      </div>
      <div class="box" ref="box">
        <div class="pic">
          <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3120971618,2088939442&fm=26&gp=0.jpg" alt="">
        </div>
      </div>
      <div class="box" ref="box">
        <div class="pic">
          <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1946568060,4220016253&fm=11&gp=0.jpg" alt="">
        </div>
      </div>
      <div class="box" ref="box">
        <div class="pic">
          <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3120971618,2088939442&fm=26&gp=0.jpg" alt="">
        </div>
      </div>
      <div class="box" ref="box">
        <div class="pic">
          <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=4039520080,1420114353&fm=26&gp=0.jpg" alt="">
        </div>
      </div>
      <div class="box" ref="box">
        <div class="pic">
          <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3654962827,264612721&fm=26&gp=0.jpg" alt="">
        </div>
      </div>
      <div class="box" ref="box">
        <div class="pic">
          <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2340339531,698154077&fm=26&gp=0.jpg" alt="">
        </div>
      </div>
      <div class="box" ref="box">
        <div class="pic">
          <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3689751919,2543434411&fm=26&gp=0.jpg" alt="">
        </div>
      </div>
      <div class="box" ref="box">
        <div class="pic">
          <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3963232422,3913229073&fm=26&gp=0.jpg" alt="">
        </div>
      </div><div class="box" ref="box">
        <div class="pic">
          <img src="http://oiq8j9er1.bkt.clouddn.com/music_%E5%A5%B9%E8%AF%B4.jpg" alt="">
        </div>
      </div>
      <div class="box" ref="box">
        <div class="pic">
          <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3120971618,2088939442&fm=26&gp=0.jpg" alt="">
        </div>
      </div>
      <div class="box" ref="box">
        <div class="pic">
          <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1946568060,4220016253&fm=11&gp=0.jpg" alt="">
        </div>
      </div>
      <div class="box" ref="box">
        <div class="pic">
          <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3120971618,2088939442&fm=26&gp=0.jpg" alt="">
        </div>
      </div>
      <div class="box" ref="box">
        <div class="pic">
          <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=4039520080,1420114353&fm=26&gp=0.jpg" alt="">
        </div>
      </div>
      <div class="box" ref="box">
        <div class="pic">
          <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3654962827,264612721&fm=26&gp=0.jpg" alt="">
        </div>
      </div>
      <div class="box" ref="box">
        <div class="pic">
          <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2340339531,698154077&fm=26&gp=0.jpg" alt="">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import store from './../../store'
  export default {
    computed: {
      picBg () {
        return store.getters.getGlobalInfo
      }
    },
    methods: {
      initPic () {
        // this.$nextTick(function () {
          const box = document.getElementsByClassName('box')
          const parent = document.querySelector('.pic_content')
          const boxW = box[0].offsetWidth
          console.log(boxW)
          const cols = Math.floor(parent.offsetWidth / boxW)
          // parent.style.width = `${boxW * cols}px`
          parent.style.margin = `0 auto`
          let hArr = []
          console.log(hArr)
          // box.forEach((item) => {
          //   // if ()
          //   alert(item)
          // })
          for (let i = 0; i < box.length; i++) {
            if (i < cols) {
              hArr.push(box[i].offsetHeight)
            } else {
              let minH = Math.min.apply(null, hArr)
              let index = this.getMinIndex(hArr, minH)
              box[i].style.position = 'absolute'
              box[i].style.top = `${minH}px`
              box[i].style.left = `${boxW * index}px`
              hArr[index] += box[i].offsetHeight
            }
          }
        // })
      },
      getMinIndex (arr, min) {
        for (let i in arr) {
          if (arr[i] === min) {
            return i
          }
        }
      }
    },
    mounted () {
      const that = this
      setTimeout(function () {
        that.initPic()
      }, 300)
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
    ::-webkit-scrollbar
      background:rgba(55,55,55,0.1)
      width:15px
      border-radius:2px
      margin-left:12px
    ::-webkit-scrollbar-button    
      display:none
    ::-webkit-scrollbar-track  
      border-radius:2px
      background:rgba(55,55,55,0.1)
    ::-webkit-scrollbar-track-piece 
      border-radius:2px
      background:rgba(55,55,55,0.1)
    ::-webkit-scrollbar-thumb  
      cursor:pointer
      border-radius:2px
      background:rgba(222,222,222,0.1)
      
    ::-moz-scrollbar
      background:rgba(55,55,55,0.1)
      width:15px
      border-radius:2px
      margin-left:12px
    ::-moz-scrollbar-button    
      display:none
    ::-moz-scrollbar-track  
      border-radius:2px
      background:rgba(55,55,55,0.1)
    ::-moz-scrollbar-track-piece 
      border-radius:2px
      background:rgba(55,55,55,0.1)
    ::-moz-scrollbar-thumb  
      cursor:pointer
      border-radius:2px
      background:rgba(222,222,222,0.1)
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
      max-width:1200px
      width:100%
      transform:translate(-50%,0)
      margin:0 auto
      font-size:0
      overflow-y:scroll
      .box
        width:20%
        float:left
        padding:12px 0 0 12px
        box-sizing:border-box
        .pic
          padding:8px
          border:1px solid rgba(200,200,200,0.4)
          border-radius:5px 
          box-sizing: border-box
          box-shadow: 0 0 5px rgba(200,200,200,0.4)
        
      img
        border-radius:5px 
        width:100%
        display: block;
      
</style>
