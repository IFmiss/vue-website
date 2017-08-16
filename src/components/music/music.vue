<template>
  <div class="music">
  	<div class="music_bg"></div>
  	<div class="music_content">
  		<div class="music_body">
  			<div class="left_list">
  				<div class="select_button">
		  			<span class="playing_btn">正在播放</span>
		  			<span class="sheet_btn">歌单列表</span>
		  			<span class="search_btn">搜索列表</span>
		  		</div>
		  		<div class="list_content"></div>
  			</div>
  			<div class="right_info">
  				
  			</div>
  		</div>
  		<div class="music_ctrl"></div>
  	</div>
  </div>
</template>
<script>
  import fecth from './../../utils/fecth.js'
  // import axios from 'axios'
  // import qs from 'qs'
  export default {
  	methods: {
  		searchMusic () {
  			const apiUrl = 'http://www.daiwei.org/vue/server/music.php?inAjax=1&do=searchMusic'
  			const data = {
  				word: '周杰伦',
  				limit: 10
  			}
  			fecth.post(apiUrl, data, {
  				headers: {
					'Content-Type': 'application/x-www-form-urlencoded'
				}
  			}).then((res) => {
  				console.log(JSON.stringify(res))
  			}, (err) => {
  				console.log(err)
  			})
  		}
  	},
  	mounted () {
  		this.searchMusic()
  	}
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
	@import '../../common/stylus/global.styl'
	@import '../../common/stylus/border-1px/index.styl'
	.music
		position:fixed
		top:0
		left:0;
		bottom:0
		width:100%
		right:0
		border-radius:12px
		.music_bg
			position:absolute
			top:0
			left:0;
			bottom:0
			width:100%
			right:0
			z-index:-1
		.music_content
			position:fixed
			top:100px
			bottom:50px
			left:50%
			max-width:1240px
			width:100%
			transform:translate3d(-50%,0,0)
			margin:0 auto
			overflow-y:scroll
			box-sizing:border-box
			-webkit-overflow-scrolling: touch
			padding:15px;
			box-sizing:border-box
			background:rgba(0,0,0,0.5)
			overflow:hidden
			.music_body
				width:100%
				height: calc(100% - 80px)
				background:red
				// font-size:0
				display:flex
				.left_list
					// display:inline-block
					flex: 1 1 auto
					width:100%
					height:100%
					background:#A99E9E
					vertical-align:top
					.select_button
						width:100%
						height:60px
						background:red
					.list_content{
						height:calc(100% - 60px)
						background:#3C4EEE
					}
					
				.right_info
					// display:inline-block
					flex: 0 0 410px
					width:410px
					max-width:100%
					height:100%
					background:#6ED367
					vertical-align:top
			.music_ctrl
				width:100%;
				height:80px
				background:blue
</style>
