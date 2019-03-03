<template>
	<div class="tips_info">
		<!-- <a href="//shang.qq.com/wpa/qunwpa?idkey=221f0b1b4c54bc2197a11f994a77e6333dd97377a748c40cf600013e131cf739" target="_black"></a> -->
	</div>
</template>
<script>
	export default{
	}
</script>

<style lang="stylus" rel="stylesheet/stylus">
	@import '~common/stylus/global.styl'
	.tips_info
		display:inline-block
		position: absolute
		bottom: 0
		left: 30px
		height: 40px
		line-height: 40px
		text-align: left
		color: $text_color
		font-size: 12px
		user-select:text
		z-index: 1;
		a
			color: $text_color
			font-size: 12px
			user-select:text
	
</style>