<template>
  <div class="workslist border-1px">
  	<p class="title">{{title}}</p>
  	<a class="link_info" :href="linkdemo" target="_black">演示地址</a>
  	<a class="link_info" :href="linkproject" target="_black">项目地址</a>
  </div>
</template>
<script>
  export default{
  	props: {
  		title: {
  			type: String
  		},
  		linkdemo: {
  			type: String
  		},
  		linkproject: {
  			type: String
  		}
  	}
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import '~common/stylus/global.styl'
  @import '~common/stylus/border-1px/index.styl'
	.workslist
	  	position:relative
	  	display:flex
	  	width:100%
	  	height:46px
	  	line-height:46px
	  	// cursor:pointer
	  	box-sizing:border-box
	  	padding: 0 0 0 30px;
	  	// &:hover
	  	// 	background:rgba(0,0,0,0.3)
	  	&.border-1px
	  		border-1px($border_bottom_color, bottom)
	  	.title
	  		flex:(1 1 auto)
	  		text-overflow:ellipsis
	  		overflow:hidden
	  		white-space:nowrap
	  		color:#f0f0f0
	  		margin:0
	  		height:46px
	  		line-height:46px
	  		font-size:14px
	  		cursor:default
		.link_info
			flex:(0 0 80px)
			font-size:12px
			text-align:center
			width:40px
			text-decoration:underline
</style>
