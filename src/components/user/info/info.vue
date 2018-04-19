<template>
	<div class="user-info">
		<p class="desc">敬请期待...</p>
		<span class="loginout" @click="loginout">退出登录</span>
	</div>
</template>
<script>
	import {Storage} from 'common/js/Storage.js'
	export default {
		methods: {
			loginout () {
				Storage.deleteCookie('c_user_info')
				this.$router.push('/home')
			}
		}
	}
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import '~common/stylus/global.styl'
@import '~common/stylus/custom_input.styl'
.user-info
	width: 100%
	height: 100%
	display: flex
	align-items: center
	justify-content:center
	background: black
	flex-direction: column
	p
		text-algin:center
		font-weight: 400
		font-size: 24px
		color: $text_color
		letter-spacing: 10px
	.loginout
		font-size: 14px
		margin-top: 2px
		color: #fff
		text-decoration: underline
		cursor:pointer
</style>