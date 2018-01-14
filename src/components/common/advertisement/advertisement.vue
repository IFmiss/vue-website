<template>
	<div class="advertisement" ref="advertisement" v-if="!navigatorinfo.mobile">
		<div class="image_adv" style="background:url('http://oiq8j9er1.bkt.clouddn.com/zhifubaocode.png');background-size:cover"></div>
	</div>
</template>

<script>
	import {Navigator} from '@/common/js/Navigator.js'
	import {dragElement} from 'utils/dragElement.js'
	export default{
		data () {
			return {
				navigatorinfo: Navigator.deviceVersion()
			}
		},
		mounted () {
			dragElement(this.$refs.advertisement)
		}
	}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '~common/stylus/global.styl'
	.advertisement
		position: absolute
		top: 50%
		transform: translateZ(0)
		right: 30px
		width: 210px
		height: auto
		background: red
		.image_adv
			width: 210px
			height: 210px
		img
			width:100%
			display:block
			user-select:none
</style>