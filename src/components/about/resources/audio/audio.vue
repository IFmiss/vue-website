<template>
	<div class="audio_download">
		<div class="empty" v-if="!audioInfo.length || searching">{{tips}}</div>
		<div class="resultlists" v-if="audioInfo.length">
			<h3 class="name">
				关键词: {{keyword}}	
			</h3>
			<p class="downloadtip">点击下载图标即可下载到本地</p>
			<div class="resultlist">
				<li class="list" v-for="(item, index) in audioInfo" v-if="item.AAcUrl">
					<img class="singerimg" v-lazy="item.SingerImg" :alt="item.SongName">
					<span class="name">{{item.SongName}}</span>
					<span class="download">
						<a class="bz" target="_black" :href="item.AAcUrl">标准</a>
						<a class="hi" target="_black" v-if="item.SongUrl320" :href="`http://www.hcc11.cn/Mp3/Music/DownLoad/${item.SongName}/?url=${item.SongUrl320}`">极高</a>
						<a class="no" target="_black" v-if="item.SongUrlSq" :href="`http://www.hcc11.cn/Mp3/Music/DownLoad/${item.SongName}/?url=${item.SongUrlSq}`">无损</a>
					</span>
				</li>
			</div>
		</div>
	</div>
</template>

<script>
	import fecth from 'utils/fecth.js'
	import API from 'config/api'
	export default {
		data () {
			return {
				audioInfo: {},
				tips: 'search music, do it, just do it',
				searching: false
			}
		},
		props: {
			selectedvalue: {
				type: String,
				default: 'A'
			},
			keyword: {
				type: String,
				default: ''
			}
		},
		methods: {
			getListData () {
				if (this.keyword !== '') {
					this.tips = '数据查询中，请稍候...'
					this.searching = true
					fecth.get(API.GET_RESOURCE_AUDIO, {'keyword': this.keyword}).then((res) => {
						if (res.data && res.data.ResultData) {
							this.audioInfo = res.data.ResultData
							this.searching = false
							return
						}
						this.$msg('暂无搜索结果，建议重试一次!')
						this.tips = '嘤嘤嘤,暂无搜索结果'
						this.searching = false
						this.audioInfo = {}
					}, (err) => {
						alert(JSON.stringify(err))
					})
				} else {
					this.$msg('请输入您需要搜索的视频关键字')
				}
			}
		},
		mounted () {
			this.getListData()
		}
	}
</script>

<style lang="stylus" rel="stylesheet/stylus">
	@import '~common/stylus/global.styl'
	@import '~common/stylus/border-1px/index.styl'
	.audio_download
		max-width: 768px
		margin: 0 auto
		overflow-y: auto
		overflow-x: hidden
		.empty
			margin: 20px auto
			color:$text_color
			text-align:center
			display:block
			width: 100%
			font-size: 14px
		.resultlists
			user-select:text
			.name
				color:$text_color
			.downloadtip
				font-size:14px
				color:$text_color
			.resultlist
				width:100%
				height:auto
				padding: 15px 0
				.list
					width:100%
					height:auto
					font-size:0
					padding: 5px 0
					box-sizing: border-box
					border-bottom:1px solid $border_bottom_color
					.singerimg
						width:50px
						display:inline-block
						vertical-align:middle
						border:none 0
					.name
						display:inline-block
						color:$text_color
						font-size:14px
						width:calc(100% - 201px)
						vertical-align:middle
						box-sizing:border-box
						padding:0 10px
					.download
						display:inline-block
						width:150px
						height: 50px
						line-height:50px
						vertical-align:middle
						font-size: 0
						cursor:pointer
						color:$text_color_opacity
						.bz,.hi,.no
							display:inline-block
							height: auto
							font-size: 12px
							padding: 2px 5px
							cursor:pointer
							margin-right: 10px
							height:20px
							vertical-align:middle
							line-height:20px
						.bz
							color: $text_color_opacity
							border: 1px solid $text_color_opacity
						.hi
							color: $text_color_opacity
							border: 1px solid $text_color_opacity
						.no
							color: $text_color_opacity
							border: 1px solid $text_color_opacity
				
</style>