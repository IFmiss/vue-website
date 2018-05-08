<template lang='pug'>
	div(class='user-info')
		.info-content
			el-select(v-model='value' placeholder='请选择')
				el-option(v-for='item in options', :key='item.value', :label='item.label', :value='item.value')
			.user-basic-info
				.user-avatar
					div(class='image-avatar', style='background-image: url(http://daiwei.org/vue/bg/avatar1.jpg)')
					span(class='change-avatar')
				.user-basic
					h3(class='user-nickname') 这是用户的nickname
					p(class='user-disc') 这是用户的描述描述描述
			.mode-music
			.user-detail-info
				ul.detail-title
					li(class='title-list') 音乐收藏
					li(class='title-list') 我的建议
					p
						= '这个代码被 <转义> 了！'
				.detail-content
					div(class='content-info music-list')
					div(class='content-info suggest-info')
</template>
<script>
	import {Storage} from 'common/js/Storage.js'
	export default {
		methods: {
			loginout () {
				Storage.deleteCookie('c_user_info')
				this.$router.push('/home')
			}
		},
		data () {
	      return {
	        options: [{
	          value: '选项1',
	          label: '黄金糕'
	        }, {
	          value: '选项2',
	          label: '双皮奶'
	        }, {
	          value: '选项3',
	          label: '蚵仔煎'
	        }, {
	          value: '选项4',
	          label: '龙须面'
	        }, {
	          value: '选项5',
	          label: '北京烤鸭'
	        }],
	        value: ''
	      }
	    }
	}
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import '~common/stylus/global.styl'
@import '~common/stylus/custom_input.styl'
$avatar_w = 160px
// .user-info
// 	width: 100%
// 	height: 100%
// 	display: flex
// 	align-items: center
// 	justify-content:center
// 	background: black
// 	flex-direction: column
// 	p
// 		text-algin:center
// 		font-weight: 400
// 		font-size: 24px
// 		color: $text_color
// 		letter-spacing: 10px
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