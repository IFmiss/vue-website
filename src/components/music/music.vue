<template>
  <div class="music">
  	<div class="music_bg"></div>
  	<div class="music_content">
  		<video :src="getCurrentMusic.url" ref="myVideo"></video>
  		<div class="music_body">
  			<div class="left_list">
  				<div class="select_button">
		  			<span class="todo_btn playing_btn">正在播放</span>
		  			<span class="todo_btn sheet_btn">歌单列表</span>
		  			<span class="todo_btn search_btn">搜索列表</span>
		  		</div>
		  		<div class="list_content">
		  			<div class="music_list_title border-1px">
		  				<span class="music_index"></span>
		  				<span class="music_name">歌曲</span>
		  				<span class="music_singer">歌手</span>
		  				<span class="music_zhuanji">专辑</span>
		  				<span class="music_duration">时长</span>
		  			</div>
		  			<div class="music_list_content">
		  				<div class="music_list border-1px" v-if="musiclist" v-for="(list, index) in musiclist" :key="list.id" :data-musicid="list.id" :data-pic="list.al.picUrl" @click="clickPlayList(list.id, $event, getMusicType(list.dt))">
		  					<span class="music_index">{{index + 1}}</span>
		  					<div class="music_name">
		  						<span class="span_name">{{list.name}}</span>
		  						<div class="hover_menu"></div>
		  					</div>
			  				<span class="music_singer" v-if="list.ar">{{list.ar[0].name}}</span>
			  				<span class="music_zhuanji" v-if="list.al">{{list.al.name}}</span>
			  				<span class="music_duration">{{getMusicType(list.dt)}}</span>
		  				</div>
		  			</div>
		  		</div>
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
  import store from '../../store'
  // import axios from 'axios'
  // import qs from 'qs'
  export default {
  	data () {
  		return {
  			musicInfo: {}
  		}
  	},
  	methods: {
  		searchMusic () {
  			const apiUrl = 'http://www.daiwei.org/vue/server/music.php?inAjax=1&do=search&count=20&pages=1&name=%E5%91%A8%E6%9D%B0%E4%BC%A6'
  			fecth.get(apiUrl, {
  				headers: {
					'Content-Type': 'application/x-www-form-urlencoded'
				}
  			}).then((res) => {
  				// console.log(JSON.stringify(res.data.result.songs))
  				this.musicInfo = res.data.result.songs
  			}, (err) => {
  				console.log(err)
  			})
  		},
  		clickPlayList (id, e, duration) {
  			const pic = e.target.getAttribute('data-pic')
  			const apiUrl = `http://www.daiwei.org/vue/server/music.php?inAjax=1&do=musicInfo&id=${id}`
  			fecth.get(apiUrl).then((res) => {
  				const currentMusic = {
					url: res.data.data[0].url,
					duration: duration,
					picurl: pic
  				}
  				store.commit({
					type: 'setCurrentAudio',
					data: currentMusic
				})
				this.$nextTick(() => {
					this.$refs.myVideo.load()
					this.$refs.myVideo.play()
				})
  				// console.log(JSON.stringify(res.data.result.songs))
  				// this.musicInfo = res.data.result.songs
  			}, (err) => {
  				console.log(err)
  			})
  		},
  		// 音乐时长格式
  		getMusicType (time) {
  			const minT = Math.floor(time / 1000 / 60) >= 10 ? Math.floor(time / 1000 / 60) : '0' + Math.floor(time / 1000 / 60)
  			const minS = Math.floor(time / 1000 % 60) >= 10 ? Math.floor(time / 1000 % 60) : '0' + Math.floor(time / 1000 % 60)
  			return minT + ':' + minS
  		}
  	},
  	computed: {
  		musiclist () {
  			return this.musicInfo
  		},
  		getCurrentMusic () {
  			return store.getters.getCurrentAudio
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
			top:80px
			bottom:30px
			left:50%
			right:100px
			left:100px
			// max-width:1240px
			// width:100%
			// transform:translate3d(-50%,0,0)
			margin:0 auto
			overflow-y:scroll
			box-sizing:border-box
			-webkit-overflow-scrolling: touch
			padding:15px;
			box-sizing:border-box
			// background:rgba(0,0,0,0.5)
			overflow:hidden
			.music_body
				width:100%
				height: calc(100% - 80px)
				// background:red
				// font-size:0
				display:flex
				position: relative;
				.left_list
					// display:inline-block
					flex: 1 1 auto
					width:100%
					height:100%
					// background:#A99E9E
					vertical-align:top
					.select_button
						width:100%
						height:60px
						display:flex
						align-items:center
						.todo_btn
							width:auto
							height:32px
							line-height:32px
							color:$text_before_color
							border:1px solid $border_bottom_color_deep
							border-radius:2px
							padding:0 15px
							margin:10px
							font-size:14px
							cursor:pointer
							&:hover,&.active
								color:$text_color
								border:1px solid $text_color								
					.list_content
						height:calc(100% - 60px)
						padding:10px
						box-sizing:border-box
						.music_list_title,.music_list
							height:50px
							line-height:50px
							// background:red
							font-size:0
							span
								display:inline-block
								font-size:14px
								color:$text_color
								text-overflow:ellipsis
								overflow:hidden
								white-space:nowrap
								&.music_name
									width:calc(50% - 50px)
									font-size:14px
								&.music_singer
									width:20%
									padding:0 5px
									box-sizing:border-box
								&.music_zhuanji
									width:20%
									padding:0 5px
									box-sizing:border-box
								&.music_duration
									width:10%
									padding:0 5px
									box-sizing:border-box
								&.music_index
									width:50px
									height:100%
									text-align: center;
							.music_name
								width:calc(50% - 50px)
								display:inline-block
								font-size:14px
								height:50px
								line-height:50px
								color:$text_color
								text-overflow:ellipsis
								overflow:hidden
								white-space:nowrap
								font-size:0
								position:relative
								.span_name
									display:inline-block
									width: 100% 
									height:100%
									// background:red
									font-size:14px
								.hover_menu
									position:absolute
									width:140px
									height:100%
									right:0
									top:0
									background:red
									display:none
							&.border-1px
								border-1px($border_bottom_color,bottom)
						.music_list_content
							height:calc(100% - 50px)
							position:relative
							overflow:auto
							.music_list
								position:relative
								&:hover
									background:$list_hover
									.music_name
										.hover_menu
											display:block
				.right_info
					// display:inline-block
					flex: 0 0 310px
					width:310px
					max-width:100%
					height:100%
					background:#6ED367
					vertical-align:top
			.music_ctrl
				width:100%;
				height:80px
				background:blue
		@media screen and (max-width: 1440px) 
			.music_content
				top:40px
				bottom:20px
				right:20px
				left:20px
		@media screen and (max-width: 1200px)
			.music_content
				.music_body
					.left_list
						.list_content
							.music_list_content
								.music_list
									position:relative
									&:hover
										background:$list_hover
										.music_name
											.hover_menu
												display:none
		@media screen and (max-width: 998px)
			.music_content
				.music_body
					.left_list
						.list_content
							.music_list
								.music_name
									width:calc(60% - 50px)
								.music_zhuanji
									display:none
								.music_singer
									width:30%!important
							.music_list_title
								span
									&.music_name
										font-size:14px
										width:calc(60% - 50px)
									&.music_zhuanji
										display:none
									&.music_singer
										width:30%									
		@media screen and (max-width: 922px)
			.music_content
				.music_body
					.left_list
						
						// .list_content
						// 	.music_list
						// 		.music_name
						// 			width:calc(60% - 50px)
						// 		.music_zhuanji
						// 			display:none
						// 		.music_singer
						// 			width:30%!important
						// 	.music_list_title
						// 		span
						// 			&.music_name
						// 				font-size:14px
						// 				width:calc(60% - 50px)
						// 			&.music_zhuanji
						// 				display:none
						// 			&.music_singer
						// 				width:30%										
					.right_info
						position:absolute
						top:0
						left:0
						right:0
						bottom:0
						width:100%
						background:red
						display:none
		@media screen and (max-width: 525px)
			.music_content
				top: 40px
				bottom: 0px
				right: 0px
				left: 0px
				padding:0
				.music_body
					.left_list
						.select_button
							.todo_btn
								padding:0 10px
								overflow:hidden
								text-overflow:ellipsis
								overflow:hidden
								font-size:14px
								height:32px
								line-height:32px
						.list_content
							.music_list
								.music_duration
									display:none
								.music_singer
									display:none
								.music_name
									width:calc(100% - 50px)				
							.music_list_title
								display:none
						.music_list_content
							height:100%!important
	video
		display:none	
</style>
