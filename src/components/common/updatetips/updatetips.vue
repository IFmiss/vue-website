<template>
	<div class="updatetips" ref="updatetips">
		<transition name="fade" @after-leave="hideUpdate" @before-enter="showUpdate">
			<div class="update_mask" v-show="showInfo"></div>
		</transition>
		<transition name="scale">
			<div class="updatetips_info" v-show="showInfo">
				<div class="img_bg">
					<img src="http://oiq8j9er1.bkt.clouddn.com/update_bg.jpg" alt="未曾遗忘的青春">
					<span class="update_version">V 2.1.0</span>
				</div>
				<div class="content">
					1.顶顶顶的更新</br>
					2.顶顶顶的更新</br>
					3.顶顶顶的更新</br>
					4.顶顶顶的更新</br>
				</div>
				<div class="update_select">
					<input type="button" @click="unUpdate" class="giveup_update" value="暂不体验">
					<input type="button" @click="update" class="go_update" value="体验新版">
				</div>
			</div>
		</transition>
	</div>
</template>

<script>
  import {Cookie} from '@/common/js/global.js'
  import fecth from './../../../utils/fecth.js'
  export default {
  	data () {
  		return {
  			showInfo: false,
  			updateInfo: {}
  		}
  	},
  	methods: {
  		unUpdate () {
  			this.showInfo = false
  			// 添加cookie方便以后过期再弹窗
  			Cookie.setCookie('update', this.updateInfo.version, 60 * 60 * 2 * 1000)
  		},

  		// 更新网页  包括默认配置  以及 清除缓存刷新页面
  		update () {
  			this.showInfo = false
  			window.localStorage.setItem('web_version', this.updateInfo.version)
  			console.log(this.updateInfo)
  			Cookie.setCookie('update', this.updateInfo.version, 60 * 60 * 2 * 1000)
  			console.log(Cookie.getCookie('update'))
  			location.href = location.href + (location.href.indexOf('?') > -1 ? '&' : '?') + 'v=' + this.updateInf.version
  		},

  		showUpdate () {
  			this.$refs.updatetips.style.display = 'block'
  		},

  		hideUpdate () {
  			this.$refs.updatetips.style.display = 'none'
  		},

  		isNeedUpdate () {
  			const _this = this
  			const url = 'http://www.daiwei.org/vue/server/home.php?inAjax=1&do=isNeedUpdate'
			fecth.get(url).then((res) => {
				_this.updateInfo = res.data[0]
				let versionStorage = window.localStorage.getItem('web_version')
				// 本地无存储号  必须弹窗提示更新
				// 本地有存储的版本号  和 线上的不一样  弹窗
				// 如果设置2小时之后再弹窗  则超出之后再弹窗更新
				// 如果在2小时内又更新了一个版本   则还是需要弹窗更新
				if (versionStorage !== null) {
					console.log('有versionStorage')
					if (Cookie.getCookie('update') !== null) {
						console.log('有cookie')
						if (Cookie.getCookie('update') !== _this.updateInfo.version) {
							console.log('cookie版本不同 --- 弹窗')
							_this.showInfo = true
						} else {
							console.log('cookie版本相同 --- 不弹窗')
							_this.showInfo = false
						}
					} else {
						if (versionStorage !== _this.updateInfo.version) {
							console.log('没有cookie时候  versionStorage版本不同 --- 弹窗')
							_this.showInfo = true
						} else {
							console.log('versionStorage版本相同')
							_this.showInfo = false
						}
					}
				} else {
					console.log('没有versionStorage')
					// if (Cookie.getCookie('update') !== null) {
					// 	console.log('如果有cookie')
					// 	if (Cookie.getCookie('update') !== _this.updateInfo.version) {
					// 		console.log('cookie版本不同')
					// 		_this.showInfo = true
					// 	} else {
					// 		console.log('cookie版本相同')
					// 		_this.showInfo = false
					// 	}
					// } else {
					// 	console.log('如果没有cookie')
					// 	_this.showInfo = true
					// }
					window.localStorage.setItem('web_version', this.updateInfo.version)
					Cookie.setCookie('update', this.updateInfo.version, 60 * 60 * 2 * 1000)
				}
				// if (versionStorage !== null && versionStorage !== _this.updateInfo.version && Cookie.getCookie('update') === null) {
				// 	_this.showInfo = true
				// }
			}, (err) => {
				alert(err)
			})
  		}
  	},
  	mounted () {
  		this.isNeedUpdate()
  	}
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
	$update_primary_color = orange
	.updatetips
		position:fixed
		top:0
		left:0
		bottom:0
		right:0
		z-index:11
		font-weight:500
		display:none
		.update_mask
			position:absolute
			top:0
			left:0
			bottom:0
			right:0
			background:rgba(7,17,27,0.6)
			&.fade-enter-to,&.fade-leave-to
				transition:all 0.5s
			&.fade-enter,&.fade-leave-to
				opacity:0
		.updatetips_info
			position:absolute
			top:50%
			left:50%
			bottom:0
			right:0
			background:#fff
			width:260px
			height:280px
			transform:translate(-50%,-50%) scale(1)
			border-radius: 4px
			overflow:hiden
			&.scale-enter-to,&.scale-leave-to
				transition:all 0.3s
			&.scale-enter
				transform:translate(-50%, -30%)
				opacity:0
			&.scale-leave-to
				opacity:0
			.img_bg
				width:100%
				height:auto
				min-height:80px
				position:relative
				border-radius: 4px 4px 0 0
				img
					width:100%
					height:auto
					border-radius: 4px
				.update_version
					position:absolute
					right:30px
					top:50px
					color:#fff
					font-size:16px
					font-weight:600
			.content
				width:100%
				height:120px
				padding: 0 15px
				line-height:30px
				font-size: 14px
				color:#333
			.update_select
				width:100%
				height:36px
				font-size:0
				position:absolute
				bottom:0
				border-radius:0 0 4px 4px
				border-top:1px solid $update_primary_color
				input
					width:50%
					height:100%
					font-size:14px
					height:36px
					line-height:36px
					border:0 none
					outline:0 none
					background:#fff
					cursor:pointer
					&.giveup_update
						border-radius:0 0 0 4px
						color: $update_primary_color
					&.go_update
						border-radius:0 0 4px 0
						color: #fff
						background:$update_primary_color
</style>