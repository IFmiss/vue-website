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
	video
		display:none	
</style>
