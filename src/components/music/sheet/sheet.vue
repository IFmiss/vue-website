<template>
  <div class="music_sheet">
  	<div class="list_content_info">
		<div class="music_list_title border-1px">
			<span class="music_index"></span>
			<span class="music_name">歌曲</span>
			<span class="music_singer">歌手</span>
			<span class="music_zhuanji">专辑</span>
			<span class="music_duration">时长</span>
		</div>
		<musiclist v-if="musicList" :musiclist = "musicList"></musiclist>
	</div>
  </div>
</template>
<script>
  // import fecth from './../../utils/fecth.js'
  import store from 'store'
  import musicApi from 'components/music/music.js'
  import musiclist from 'components/common/musiclist/musiclist.vue'
  // import axios from 'axios'
  // import qs from 'qs'
  // import $ from 'jquery'
  // import 'jquery-mousewheel'
  // import 'malihu-custom-scrollbar-plugin'
  export default {
  	data () {
  		return {
  			// musicInfo: {},
  			currentMusic: {},
  			params: this.$route.params,
  			currentMusicLrcIndex: 0
  		}
  	},
  	props: {
  		lrccontent: {}
  	},
  	methods: {
  		// 初始化音乐播放器
		initMusic () {
			musicApi.getMusicSheet(this.params.id, this)
  		}
  	},
  	computed: {
  		musicList () {
  			return store.getters.getMusicList
  		}
  	},
  	watch: {
  		// currentMusic (newval, oldval) {
  		// 	alert(newval.lyric)
  		// }
  		'$route' (to, from) {
  			this.params = this.$route.params
  		}
  	},
  	components: {
  		musiclist
  	},
  	mounted () {
  		this.$nextTick(() => {
			// alert(JSON.stringify(this.params))
			this.initMusic()
			// musicApi.musicEvent(this)
		})
		// setTimeout(() => {
		// 	$('.list_content_info').mCustomScrollbar()
		// }, 100)
  	}
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
	@import '~common/stylus/global.styl'
	@import '~common/stylus/border-1px/index.styl'
	.list_content_info
		height:100%
		box-sizing:border-box
		.music_list_title,.music_list
			height:50px
			line-height:50px
			// background:red
			font-size:0
			span
				display:inline-block
				font-size:14px
				color:$text_before_color
				text-overflow:ellipsis
				overflow:hidden
				white-space:nowrap
				vertical-align:middle
				cursor:pointer
				&.music_name
					width:calc(50% - 50px)
					font-size:14px
				&.music_singer
					width:20%
					padding:0 5px
					box-sizing:border-box
					&:hover
						text-decoration:underline
				&.music_zhuanji
					width:20%
					padding:0 5px
					box-sizing:border-box
					&:hover
						text-decoration:underline
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
				color:$text_before_color
				text-overflow:ellipsis
				overflow:hidden
				white-space:nowrap
				font-size:0
				position:relative
				vertical-align: middle;
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
					display:none
			&.border-1px
				border-1px($border_bottom_color,bottom)
		.music_list_content
			height:calc(100% - 50px)
			position:relative
			overflow:auto
			.music_list
				position:relative
				.music_name
					.hover_menu
						display:block
	video
		display:none	
</style>
