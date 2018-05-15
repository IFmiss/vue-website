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
			musicApi.searchMusic(this.params.w, this.searchMusicIndex, this)
  		},
  		searchMusic (e) {
  			this.searchMusicIndex = 1
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
  		}
  	},
  	components: {
  		musiclist
  	},
  	watch: {
  		// currentMusic (newval, oldval) {
  		// 	alert(newval.lyric)
  		// }
  		'$route' (to, from) {
  			this.params = this.$route.params
  		}
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
	video
		display:none	
</style>
