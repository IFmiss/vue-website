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
		<!-- <div class="music_list_content">
			<span class="list_empty" v-if="!musicList.length">暂无收藏的音乐哦 !</span>
			<div class="music_list border-1px" v-if="musicList" v-for="(list, index) in musicList" :key="list.music_id" :data-musicid="list.music_id" :data-pic="list.music_picurl" @click="clickPlayList(list.music_id, list.music_name, list.music_picurl, list.singer_name, getMusicDurationType(list.music_dur),index), musicList">
				<span class="music_index">
					<span v-show="getCurrentMusic.id !== list.music_id">{{index + 1}}</span>
					<img v-show="getCurrentMusic.id === list.music_id" src="http://www.daiwei.org/vue/bg/wave.gif" alt="未曾遗忘的青春">
				</span>
				<div class="music_name">
					<span class="span_name">{{list.music_name}}</span>
					<div class="hover_menu">
						<i class="icon-delete" @click.stop="deleteMusic(list.music_id)"></i>
					</div>
				</div>
				<span class="music_singer" v-if="list.singer_name">
					<span @click.stop="searchMusic($event)">{{list.singer_name}}</span>
				</span>
				<span class="music_zhuanji" v-if="list.album_name">
					<span @click.stop="getAlbum(list.album_id)">{{list.album_name}}</span>
				</span>
				<span class="music_duration">{{getMusicDurationType(list.music_dur)}}</span>
			</div>
		</div> -->
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
  			console.log(store.getters.getCurrentAudio)
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
