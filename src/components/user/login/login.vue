<template>
	<div class="login">
		<div class="login_content">
			<div class="login_select">
				<span class="s_singin" :class="{ active: status === 0 }" @click="loginMode">登录</span>
				<span class="s_register" :class="{ active: status !== 0 }" @click="registerMode">注册</span>
			</div>
			<div class="content_info">
				<div class="login_div" v-show="!status">
					<div class="block_area">
						<label for="userName">username</label>
						<input type="text" id="userName" v-model="username" placeholder="登陆用户名">
					</div>
					<div class="block_area">
						<label for="userPwd" >password</label>
						<input type="password" id="userPwd" v-model="password" placeholder="登陆密码">
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
						<input type="password" id="suserPwd" v-model="spassword" placeholder="注册密码">
					</div>
					<input type="button" value="注册" @click="singin">
				</div>
			</div>
		</div>
		<div class="singin_then">
			<div class="then_content">
				<h3 class="title">请完善以下流程</h3>
				<div class="select_menu">
					<div class="menu_list">完善信息</div>
					<div class="menu_list">个人设置</div>
					<div class="menu_list">完成注册</div>
				</div>
				<div class="select_content">
					<div class="content_list">
						完善信息
					</div>
					<div class="content_list">
						个人信息的设置
					</div>
					<div class="content_list">
						完成注册
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import fecth from 'utils/fecth.js'
	import {Utils} from 'common/js/Utils.js'
	export default{
		data () {
			return {
				// 0 是登录  1是注册
				status: 0,
				username: '',
				password: '',
				susername: '',
				spassword: ''
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
				var fecthUrl = 'http://www.daiwei.org/vue/server/user.php?inAjax=1&do=login'
				fecth.post(fecthUrl, {
					username: this.username,
					password: this.password
				}).then((res) => {
					// if (res.data.code === '1') {
					// 	alert('登陆成功')
					// } else {
					// 	this.$msg(res.data.msg)
					// }res
					console.log(res)
				}, (err) => {
					alert(`数据请求错误: ${JSON.stringfy(err)}`)
				})
			},
			// 显示注册之后的后续信息填充
			singinThen () {

			},
			singin () {
				var fecthUrl = 'http://www.daiwei.org/vue/server/user.php?inAjax=1&do=singin'
				fecth.post(fecthUrl, {
					username: this.susername,
					password: this.spassword,
					regtime: Utils.formatDate(new Date(), 'yyyy-MM-dd hh:mm:ss')
				}).then((res) => {
					this.$msg(res.data.msg)
					if (res.data.code === '1') {
						// 显示后续的操作
						this.singinThen()
					}
				}, (err) => {
					alert(`数据请求错误: ${JSON.stringfy(err)}`)
				})
			}
		},
		mounted () {
			// console.log(Utils.formatDate(new Date(), 'MM-dd hh:mm:ss'))
			// console.log()
			console.log(this.router)
		}
	}
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import '~common/stylus/global.styl'
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
						&:hover
							background: $com_button_active_color
	input:-webkit-autofill
		-webkit-box-shadow: 0 0 0px 1000px black inset;
		border: 1px solid #CCC!important;
		height: 36px!important;
		border-radius: 2px;
		-webkit-text-fill-color: #fff;
</style>