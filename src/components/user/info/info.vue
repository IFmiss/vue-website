<template>
	<div class="user-info">
		<p class="desc">敬请期待...</p>
		<span class="loginout" @click="loginout">退出登录</span>
		<!-- <div class="info-content">
			<div class="user-basic-info">
				<div class="user-avatar">
					<div class="image-avatar" style="background-image: url('http://daiwei.org/vue/bg/avatar1.jpg')"></div>
					<span class="change-avatar"></span>
				</div>
				<div class="user-basic">
					<h3 class="user-nickname">这是用户的nickname</h3>
					<p class="user-disc">这是用户的描述描述描述</p>
				</div>
			</div>
			<div class="mode-music">
				
			</div>
			<div class="user-detail-info"> -->
				<!-- 用户的具体信息。音乐收藏。评价 点赞 互相评论的功能 -->
				<!-- <ul class="detail-title">
					<li class="title-list">音乐收藏</li>
					<li class="title-list">我的建议</li>
				</ul>
				<div class="detail-content">
					<div class="content-info music-list">
						
					</div>
					<div class="content-info suggest-info">
						
					</div>
				</div>
			</div>
		</div> -->
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
$avatar_w = 160px
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
.user-info
	position: fixed
	top: 0
	left: 0
	right:0
	bottom: 0
	.loginout
		font-size: 14px
		margin-top: 2px
		color: #fff
		text-decoration: underline
		cursor:pointer
	.info-content
		max-width: 1200px
		width: 100%
		position: absolute
		top: calc(50% + 50px)
		left: calc(50% + 50px)
		transform: translate(-50%, -50%)
		height: calc(100% - 100px)
		.user-basic-info
			display:flex
			align-items: flex-start
			.user-avatar
				flex: 0 0 $avatar_w
				width: $avatar_w
				height:$avatar_w
				border-radius: 50%
				overflow: hidden
				position: relative
				border: 5px solid $mask_color_opacity
				.image-avatar
					width: 100%
					height: 100%
				.change-avatar
					position: absolute
					top: 0
					left:0
					right:0
					bottom:0
					opacity: 0
					visibility: hidden
					transition: all 0.3s ease
					display: flex
					align-items:center
					justify-content:center
					background: $mask_color_opacity
					&:before
						content: '更换图片'
						color: $text_color
						position:relative
				&:hover
					.change-avatar
						opacity: 1
						visibility: visible
			.user-basic
				flex: 1 1 auto
				overflow: hidden
				padding: 10px
				box-sizing:border-box
				color: $text_color
				.user-nickname
					// color: $text_color
					margin:0 auto
				.user-disc
					// color: $text_color
					margin:0 auto
</style>