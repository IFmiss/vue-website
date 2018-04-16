<template>
	<div class="musiclist music_list_content" @scroll="searchMoreMusic">
		<span class="list_empty" v-if="!musiclist.length">暂无音乐列表哦 !</span>
		<div class="music_list border-1px" v-if="musiclist && musiclist[0].music_id" v-for="(list, index) in musiclist" :key="list.music_id" :data-musicid="list.music_id" :data-pic="list.music_picurl" @click="clickPlayList(list.music_id, list.music_name, list.music_picurl, list.singer_name, getMusicDurationType(list.music_dur),index), musiclist">
			<span class="music_index">
				<span v-show="getCurrentMusic.id !== list.music_id">{{index + 1}}</span>
				<img v-show="getCurrentMusic.id === list.music_id" src="http://www.daiwei.org/vue/bg/wave.gif" alt="未曾遗忘的青春">
			</span>
			<div class="music_name">
				<span class="span_name">{{list.music_name}}</span>
				<div class="hover_menu">
					<i class="icon-delete" v-if="showdelicon" @click.stop="deleteMusic(list.music_id)"></i>
					<i class="icon-add" v-if="!showdelicon" @click.stop="collectMusic(index)"></i>
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
		<div class="music_list border-1px" v-if="musiclist && musiclist[0].al"v-for="(list, index) in musiclist" :key="list.id" :data-musicid="list.id" :data-pic="list.al.picUrl" @click="clickPlayList(list.id, list.name, list.al.picUrl, list.ar[0].name, getMusicDurationType(list.dt),index), musiclist">
			<span class="music_index">
				<span v-show="getCurrentMusic.id !== list.id">{{index + 1}}</span>
				<img v-show="getCurrentMusic.id === list.id" src="http://www.daiwei.org/vue/bg/wave.gif" alt="未曾遗忘的青春">
			</span>
			<div class="music_name">
				<span class="span_name">{{list.name}}</span>
				<div class="hover_menu">
					<i class="icon-delete" v-if="showdelicon" @click.stop="deleteMusic(list.music_id)"></i>
					<i class="icon-add" v-if="!showdelicon" @click.stop="collectMusic(index)"></i>
				</div>
			</div>
			<span class="music_singer" v-if="list.ar">
				<span @click.stop="searchMusic($event)">{{list.ar[0].name}}</span>
			</span>
			<span class="music_zhuanji" v-if="list.al">
				<span @click.stop="getAlbum(list.al.id)">{{list.al.name}}</span>
			</span>
			<span class="music_duration">{{getMusicDurationType(list.dt)}}</span>
		</div>
	</div>
</template>

<script>
import store from 'store'
import musicApi from 'components/music/music.js'
export default {
	data () {
		return {
			// musicInfo: {},
			currentMusic: {},
			params: this.$route.params,
			currentMusicLrcIndex: 0,
			searchMusicIndex: 1
		}
	},
	methods: {
		searchMusic (e) {
			this.$router.push({name: 'searchlist', params: { w: e.target.innerHTML }})
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
		getAlbum (id) {
			this.$router.push({name: 'albumlist', params: { id: id }})
		},
		getMusicDurationType (time) {
			return musicApi.getMusicDurantionType(time, this)
		},
		// 点击播放音乐
		clickPlayList (id, name, pic, singer, duration, index, list) {
			// alert(JSON.stringify(this.$route.params))
			let data = {
				id: id,
				name: name,
				pic: pic,
				singer: singer,
				duration: duration,
				index: index,
				list: this.musiclist,
				type: this.musictype
			}
			musicApi.clickIndex(data, this)
		},

		// 删除收藏的音乐
		deleteMusic (id) {
			musicApi.deleteMusic.call(this, id)
		},

		// list.id, list.al.picUrl, list.ar[0].name, list.al.id, list.al.name, getMusicDurationType(list.dt)
		collectMusic (index) {
			const musiccollect = store.getters.getMusicList[index]
			musicApi.collectMusic.call(this, musiccollect)
		}
	},

	props: {
		musiclist: {
			stype: Array,
			default: []
		},
		// 是否显示删除操作  不显示默认都是添加操作
		showdelicon: {
			stype: Boolean,
			default: false
		},
		musictype: {
			type: String,
			default: ''
		}
	},
	computed: {
		// musicList () {
		// 	return store.getters.getMusicCollectList
		// },
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
				height: 100%
				position:relative
				// &:hover
				// 	background:$list_hover
				.music_name
					.hover_menu
						display:block
	video
		display:none	
</style>