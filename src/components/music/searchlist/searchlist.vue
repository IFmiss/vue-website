<template>
  <div class="music_searchlist">
	<div class="music_list_title border-1px">
		<span class="music_index"></span>
		<span class="music_name">歌曲</span>
		<span class="music_singer">歌手</span>
		<span class="music_zhuanji">专辑</span>
		<span class="music_duration">时长</span>
	</div>
	<musiclist v-if="musicList" :musiclist = "musicList"></musiclist>
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
  			searchMusicIndex: 1,
  			searchMusicList: [],
  			currentMusic: {},
  			params: this.$route.params,
  			currentMusicLrcIndex: 0
  		}
  	},
  	props: {
  		lrccontent: {}
  	},
  	methods: {
  		getAlbum (id) {
  			this.$router.push({name: 'albumlist', params: { id: id }})
  		},

  		// 点击播放音乐
  		clickPlayList (id, name, pic, singer, duration, index, list) {
  			// alert(JSON.stringify(this.$route.params))
  			const data = {
  				id: id,
  				name: name,
  				pic: pic,
  				singer: singer,
  				duration: duration,
  				index: index,
  				list: store.getters.getMusicList
  			}
  			musicApi.clickIndex(data, this)
  		},

  		// 获取歌词
  		getMusicLrc (id) {
  			musicApi.getMusicLrc(id, this)
  		},

  		// 音乐时长格式
  		getMusicDurationType (time) {
  			return musicApi.getMusicDurantionType(time, this)
  		},
  		// 初始化音乐播放器
		initMusic () {
			musicApi.searchMusic(this.params.w, this.searchMusicIndex, this)
  		},
  		searchMusic (e) {
  			this.searchMusicIndex = 1
  			this.searchMusicList = []
  			musicApi.searchMusic(e.target.innerHTML, this.searchMusicIndex, this)
  		},
  		searchMoreMusic (e) {
			const mContent = e.target

			// // 滚动的高加可视化的高 的 和   应该等于 元素的scrollHeight  才加载数据
			const mContentSH = mContent.scrollTop + mContent.offsetHeight
			if (mContent.scrollHeight === mContentSH) {
				this.searchMusicIndex ++
				musicApi.searchMusic(this.params.w, this.searchMusicIndex, this)
			} else {
				return
			}
  		},
  		AudiEle () {
  			return store.getters.getAudioEle
  		},
  		// collectMusic (...items) {
  		// 	const musiccollect = {
  		// 		id: items[0],
  		// 		name: items[1],
  		// 		pic: items[2],
  		// 		singer: items[3],
  		// 		albumid: items[4],
  		// 		albumname: items[5],
  		// 		dt: items[6]
  		// 	}
  		// 	musicApi.collectMusic(musiccollect)
  		// }
  		collectMusic (index) {
  			const musiccollect = store.getters.getMusicList[index]
  			musicApi.collectMusic.call(this, musiccollect)
  		}
  	},
  	computed: {
  		musicList () {
  			return store.getters.getMusicList
  		},
  		getCurrentMusic () {
  			return store.getters.getCurrentAudio
  		},
  		getMusicLrcLists () {
  			return store.getters.getCurrentAudio.lyric
  		},
  		getCurrentMusicLrcIndex () {
			return this.currentMusicLrcIndex
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
  		// this.searchMusic()
  // 		this.$router.push({
		// 	path: '/music',
		// 	query: {
		// 		sheetid: '124995419'
		// 	}
		// })
  	}
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
	@import '~common/stylus/global.styl'
	@import '~common/stylus/border-1px/index.styl'
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
					// background:red
					display:none
			&.border-1px
				border-1px($border_bottom_color,bottom)
		.music_list_content
			height:calc(100% - 50px)
			position:relative
			overflow:auto
			.music_list
				position:relative
				// &:hover
				// 	background:$list_hover
				.music_name
					.hover_menu
						display:block
	video
		display:none	
</style>
