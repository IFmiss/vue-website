<template>
	<div class="login">
		<div class="login_content" v-if="!showSinginThen">
			<div class="login_select">
				<span class="s_singin" :class="{ active: status === 0 }" @click="loginMode">登录</span>
				<span class="s_register" :class="{ active: status !== 0 }" @click="registerMode">注册</span>
			</div>
			<div class="content_info" @keyup.enter="enterSingin">
				<div class="login_div" v-show="!status">
					<div class="block_area">
						<label for="userName">username</label>
						<input type="text" id="userName" v-model="username" placeholder="登陆用户名">
					</div>
					<div class="block_area">
						<label for="userPwd" >password</label>
						<input type="password" id="userPwd" ref="usePwd" v-model="password" placeholder="登陆密码">
					</div>
					<input type="button" value="登录" @click="subInfo">
				</div>
				<div class="singin_div" v-show="status">
					<div class="block_area">
						<label for="suserName">username</label>
						<input type="text" id="suserName" v-model="susername" placeholder="注册用户名">
					</div>
					<div class="block_area">
						<label for="suserPwd" >password</label>
						<input type="password" id="suserPwd" ref="susePwd" v-model="spassword" placeholder="注册密码">
					</div>
					<input type="button" value="注册" @click="singin">
				</div>
			</div>
		</div>
		<usercompletion :username="rightSigninName" v-if="showSinginThen" @hidesingin="hideSingIn"></usercompletion>
	</div>
</template>
<script>
	import fecth from 'utils/fecth.js'
	import {Utils} from 'common/js/Utils.js'
	import {Storage} from 'common/js/Storage.js'
	import API from 'config/api'
	import usercompletion from 'components/common/usercompletion/usercompletion.vue'
	export default{
		data () {
			return {
				// 0 是登录  1是注册
				status: 0,
				showSinginThen: false,
				username: '',
				password: '',
				susername: '',
				spassword: '',
				rightSigninName: ''
			}
		},
		methods: {
			loginMode () {
				this.status = 0
			},
			registerMode () {
				this.status = 1
			},
			subInfo () {
				if (this.status === 0) {
					this.login()
					return
				}
				this.singin()
			},
			login () {
				if (this.username === '') {
					this.$msg('请输入用户名')
					return
				}
				fecth.post(API.LOGIN, {
					username: this.username,
					password: this.password,
					lastlogin: Utils.formatDate(new Date(), 'yyyy-MM-dd hh:mm:ss'),
					path: process.env.NODE_ENV
				}).then((res) => {
					if (res.data.code === '1') {
						Storage.setCookie('c_user_info', JSON.stringify(res.data), 60 * 60 * 1000 * 24)
						this.$store.dispatch('set_UserInfo', res.data)
						const url = decodeURIComponent(this.$route.query['redirect_url'])
						if (url) {
							this.$router.push(url)
						} else {
							this.$router.push('/home')
						}
					} else {
						this.$msg(res.data.msg)
					}
				}, (err) => {
					alert(`数据请求错误: ${JSON.stringify(err)}`)
				})
			},
			// 显示注册之后的后续信息填充
			singinThen () {
				this.showSinginThen = true
			},
			hideSingIn () {
				this.status = 0
				this.showSinginThen = false
			},
			enterSingin () {
				if (this.$refs.usePwd === document.activeElement || this.$refs.suserPwd === document.activeElement) {
					if (this.status) {
						this.singin()
					} else {
						this.login()
					}
				}
			},
			singin () {
				if (this.susername === '') {
					this.$msg('请输入用户名')
					return
				}
				if (!this.testPassword(this.spassword)) {
					this.$msg({text: '密码最少6位，包括至少1个大写字母，1个小写字母，1个数字', background: 'red'})
					return
				}
				fecth.post(API.SINGIN, {
					username: this.susername,
					password: this.spassword,
					regtime: Utils.formatDate(new Date(), 'yyyy-MM-dd hh:mm:ss'),
					path: process.env.NODE_ENV
				}).then((res) => {
					this.$msg(res.data.msg)
					if (res.data.code === '1') {
						this.rightSigninName = res.data.username
						// 显示后续的操作
						this.singinThen()
					}
				}, (err) => {
					alert(`数据请求错误: ${JSON.stringify(err)}`)
				})
			},
			testPassword (password) {
				// 密码强度正则，最少6位，包括至少1个大写字母，1个小写字母，1个数字
				let pPattern = /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z]).*$/
				return pPattern.test(password)
			}
		},
		components: {
			usercompletion
		}
	}
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import '~common/stylus/global.styl'
@import '~common/stylus/custom_input.styl'
	.login
		position: fixed
		top: 0
		left: 0
		bottom: 0
		right: 0
		background: rgba(0,0,0,0.6);
		.login_content
			position:absolute
			top: 50%
			left:50%
			width: 90%
			min-height: 300px
			max-width: 340px
			padding: 5px 0px
			transform: translate3d(-50%,-50%,0)
			background: rgba(0,0,0,0.4)
			.login_select
				width: 100%
				height: 48px
				line-height: 48px
				font-size: 0
				padding: 0 5px
				box-sizing: border-box
				span
					display:inline-block
					font-size: 16px
					color: #fff
					width: 50%
					text-align:center
					vertical-align:middle
					position:relative
					cursor: pointer
					&.active
						&:before
							content: ''
							width: 30%
							height: 2px 
							background: #fff
							position: absolute
							bottom: 0
							left: 50%
							transform: translate3d(-50%,0,0)
			.content_info
				position:relative
				box-sizing: border-box
				padding: 20px 20px
				.singin_div,.login_div
					.block_area
						margin: 10px 0 20px 0
					label,input
						display: block
					label
						color: #aaa
						font-size:14px
					input[type='text'],input[type='password'],input[type='email']
						background: transparent
						// border: 1px solid #eee
						outline:none
						height: 36px
						width: 100%
						color: #fff
						text-indent: 4px
						font-size:14px
						border: none
						border-bottom: 1px solid #aaa
						box-sizing: border-box;
						&:focus
							border-bottom: 1px solid #fff
					input[type='button']
						background: $com_button_color
						border: 1px solid $com_button_color
						height: 32px
						width: 100%
						border-radius: 2px
						color: #fff
						height: 36px
						line-height: 36px
						margin-top: 30px
						margin-bottom: 10px
						outline:none
						cursor: pointer
						-webkit-appearance:none
						&:hover
							background: $com_button_active_color
		.singin_then
			position:absolute
			top: 50%
			left:50%
			width: 90%
			min-height: 300px
			max-width: 340px
			padding: 5px 0px
			transform: translate3d(-50%,-50%,0)
			z-index: 3
			background: rgba(0,0,0,0.4)
			color: #fff
			.title
				text-align:center
				font-size: 16px
				margin:0 auto;
				padding: 5px 0;
			.select_menu
				width: 100%
				height: 48px
				line-height: 48px
				font-size: 0
				padding: 0 5px
				box-sizing: border-box
				.menu_list
					display:inline-block
					font-size: 16px
					color: #fff
					width: 33.33333%
					text-align:center
					vertical-align:middle
					position:relative
					cursor: pointer
					font-size: 14px
					&.active
						&:before
							content: ''
							width: 30%
							height: 2px 
							background: $border_color
							position: absolute
							bottom: 0
							left: 50%
							transform: translate3d(-50%,0,0)
			.select_content
				position:relative
				box-sizing: border-box
				padding: 0 20px
				.content_list
					.block_area
						margin: 10px 0 20px 0
						.div_check
							display:inline-block
					input[type='button']
						margin-top:0
						-webkit-appearance:none
					textarea
						width: 100%
						color: #fff
						background:transparent
						border: 1px solid $text_active
						outline:none 0
						resize: none
						padding: 4px
						box-sizing:border-box
						-webkit-appearance:none
						margin-top: 20px
					.tips
						display:flex
						align-items:center
						justify-content:center
						padding: 30px 0 10px 0
						font-size:14px
						i
							margin-right: 10px
							font-size: 20px
	input:-webkit-autofill
		-webkit-box-shadow: 0 0 0px 1000px black inset;
		border: 1px solid #CCC!important;
		height: 36px!important;
		border-radius: 2px;
		-webkit-text-fill-color: #fff;
	label
		color: #aaa
		font-size:14px
		display: block
		&.inline
			display:inline
	input[type='text'],input[type='password'],input[type='email']
		background: transparent
		// border: 1px solid #eee
		outline:none
		height: 36px
		width: 100%
		color: #fff
		text-indent: 4px
		font-size:14px
		border: none
		border-bottom: 1px solid #aaa
		box-sizing: border-box;
		display: block
		&:focus
			border-bottom: 1px solid #fff
	input[type='button']
		background: $com_button_color
		border: 1px solid $com_button_color
		height: 32px
		width: 100%
		border-radius: 2px
		color: #fff
		height: 36px
		line-height: 36px
		margin-top: 30px
		margin-bottom: 10px
		outline:none
		cursor: pointer
		&:hover
			background: $com_button_active_color
</style>