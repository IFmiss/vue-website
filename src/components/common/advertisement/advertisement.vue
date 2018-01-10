<template>
	<div class="advertisement" v-if="!navigatorinfo.mobile">
		<img src="http://oiq8j9er1.bkt.clouddn.com/zhifubaocode.png" title="扫码领红包，只是测试" alt="扫码领红包，只是测试">
	</div>
</template>

<script>
	import {Navigator} from '@/common/js/Navigator.js'
	export default{
		data () {
			return {
				navigatorinfo: Navigator.deviceVersion()
			}
		}
	}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '~common/stylus/global.styl'
	.advertisement
		position: absolute
		top: 50%
		transform: translate(0, -50%)
		right: 30px
		width: 210px
		height: auto
		// background: $mask_color_opacity
		img
			width:100%
			display:block
</style>