<template>
	<div class="resources">
		<div class="div_back" @click="back"><i class="icon-back"></i></div>
		<div class="resources_content">
		</div>
	</div>
</template>

<script>
	// import fecth from './../../../utils/fecth.js'
	export default {
		data () {
			return {
				searchKey: ''
			}
		},
		methods: {
			back () {
				this.$router.go(-1)
			}
		},
		created () {
		}
	}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '../../../common/stylus/global.styl'
	.resources
	  	position:fixed
	    top:0
	    left:0
	    bottom:0
	    width:100%
	    right:0
	    border-radius:12px
		.div_back
			position:absolute
			top:0
			left:15px
			width:40px
			height:40px
			color:$text_color
			text-align:center
			line-height:42px
			font-size:20px
			border-radius:50%
			transition: all 0.3s
			&:hover
				background:rgba(0,0,0,0.3)
		.resources_content
			position:fixed
			top:50px
			bottom:0
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
					
</style>