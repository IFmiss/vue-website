<template>
	<div class="user-info">
		<!-- <p class="desc">敬请期待...</p>
		<span class="loginout" @click="loginout">退出登录</span> -->
		<div class="info-content">
			<div class="user-basic-info">
				<div class="user-avatar">
					<img src="" alt="user-name">
					<span class="change-avatar">更换图片</span>
				</div>
				<div class="user-basic">
					<h3 class="user-nickname">这是用户的nickname</h3>
					<p class="user-disc">这是用户的描述描述描述</p>
					<!-- <div class=""></div> -->
				</div>
			</div>
			<div class="mode-music">
				
			</div>
			<div class="user-detail-info">
				<!-- 用户的具体信息。音乐收藏。评价 点赞 互相评论的功能 -->
				<ul class="detail-title">
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
		</div>
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