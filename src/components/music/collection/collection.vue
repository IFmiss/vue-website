<template>
  <div class="music_collection">
  	<div class="list_content_info">
		<div class="music_list_title border-1px">
			<span class="music_index"></span>
			<span class="music_name">歌曲</span>
			<span class="music_singer">歌手</span>
			<span class="music_zhuanji">专辑</span>
			<span class="music_duration">时长</span>
		</div>
		<musiclist v-if="musicList" :musiclist = "musicList" showdelicon="false" @init = "initMusic"></musiclist>
	</div>
  </div>
</template>
<script>
  // import fecth from './../../utils/fecth.js'
  import store from 'store'
  import musicApi from 'components/music/music.js'
  // import axios from 'axios'
  // import qs from 'qs'
  import musiclist from 'components/common/musiclist/musiclist.vue'
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
  		searchMusic (e) {
  			this.$router.push({name: 'searchlist', params: { w: e.target.innerHTML }})
  		},
  		getAlbum (id) {
  			this.$router.push({name: 'albumlist', params: { id: id }})
  		},
  		getMusicDurationType (time) {
  			return musicApi.getMusicDurantionType(time, this)
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
  				list: store.getters.getMusicCollectList
  			}
  			musicApi.clickIndex(data, this)
  		},

  		// 删除收藏的音乐
  		deleteMusic (id) {
  			musicApi.deleteMusic.call(this, id)
  		},

  		// 初始化音乐播放器
		initMusic () {
			// 获取本地音乐
			// musicApi.getAlbum(this.params.id)
			musicApi.getLocalMusic.call(this)
  		}
  	},
  	computed: {
  		musicList () {
  			return store.getters.getMusicCollectList
  		},
  		getCurrentMusic () {
  			return store.getters.getCurrentAudio
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
			this.initMusic()
		})
  	}
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
	@import '~common/stylus/global.styl'
	@import '~common/stylus/border-1px/index.styl'
	.list_content_info
		height:calc(100% - 60px)
		box-sizing:border-box
		.music_list_content
			height:calc(100% - 50px)
			position:relative
			overflow:auto
			.list_empty
				width:100%
				display:block
				padding:10px 0
				text-align:center
				color:$text_before_color
				font-size:14px
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
