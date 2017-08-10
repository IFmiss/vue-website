<template>
  <div class="works">
  	<div class="works_content">aaaa</div>
  </div>
</template>
<script>
// import store from '../../store'
export default {
	computed: {
	}
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/global.styl'
	.works
	  	position:fixed
	    top:0
	    left:0
	    bottom:0
	    width:100%
	    right:0
	    border-radius:12px
		.works_content
			position:fixed
			top:0
			bottom:0
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
			opacity:1
			transition: all 0.5s 0.3s
</style>
