<template>
  <div class="music_play">
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
  export default {
  	data () {
  		return {
  			// musicInfo: {},
  			currentMusic: {},
  			params: this.$route.params,
  			currentMusicLrcIndex: 0,
  			top_list_all: {
				0: ['云音乐新歌榜', '/discover/toplist?id=3779629'],
				1: ['云音乐热歌榜', '/discover/toplist?id=3778678'],
				2: ['网易原创歌曲榜', '/discover/toplist?id=2884035'],
				3: ['云音乐飙升榜', '/discover/toplist?id=19723756'],
				4: ['云音乐电音榜', '/discover/toplist?id=10520166'],
				5: ['UK排行榜周榜', '/discover/toplist?id=180106'],
				6: ['美国Billboard周榜', '/discover/toplist?id=60198'],
				7: ['KTV嗨榜', '/discover/toplist?id=21845217'],
				8: ['iTunes榜', '/discover/toplist?id=11641012'],
				9: ['Hit FM Top榜', '/discover/toplist?id=120001'],
				10: ['日本Oricon周榜', '/discover/toplist?id=60131'],
				11: ['韩国Melon排行榜周榜', '/discover/toplist?id=3733003'],
				12: ['韩国Mnet排行榜周榜', '/discover/toplist?id=60255'],
				13: ['韩国Melon原声周榜', '/discover/toplist?id=46772709'],
				14: ['中国TOP排行榜(港台榜)', '/discover/toplist?id=112504'],
				15: ['中国TOP排行榜(内地榜)', '/discover/toplist?id=64016'],
				16: ['香港电台中文歌曲龙虎榜', '/discover/toplist?id=10169002'],
				17: ['华语金曲榜', '/discover/toplist?id=4395559'],
				18: ['中国嘻哈榜', '/discover/toplist?id=1899724'],
				19: ['法国 NRJ EuroHot 30周榜', '/discover/toplist?id=27135204'],
				20: ['台湾Hito排行榜', '/discover/toplist?id=112463'],
				21: ['Beatport全球电子舞曲榜', '/discover/toplist?id=3812895']
			}
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
  			return store.getters.getMusicPlayList
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
		})
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
				&:hover
					background:$list_hover
				.music_name
					.hover_menu
						display:block
			.list_empty
				width:100%
				display:block
				padding:10px 0
				text-align:center
				color:$text_before_color
				font-size:14px
	video
		display:none	
</style>
