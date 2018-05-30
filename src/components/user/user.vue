	<template>
	<div class="user">
		<router-view></router-view>
	</div>
</template>
<script>
	export default {
	}
</script>
<style lang="stylus" rel="stylesheet/stylus">
	@import '~common/stylus/global.styl'
	@import '~common/stylus/custom_input.styl'
	.user
		position:fixed
		top:0
		left:0;
		bottom:0
		width:100%
		right:0
</style>
