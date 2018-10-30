<template>
	<div class="video_download">
		<div class="empty" v-if="!videoInfo.length || searching">{{tips}}</div>
		<div class="resultlists" v-if="videoInfo.length">
			<h3 class="name">
				关键词: {{keyword}}	
			</h3>
			<span class="downloadtip">复制地址在迅雷中打开即可下载 !</span>
			<div class="resultlist" v-for="(item, index) in videoInfo">
				<ul class="itemlists">
					<li class="itemlist" v-for="(list, listindex) in item">
						<p class="itemname">{{list.VideoName}}</p>
						<p class="itemdisc">{{list.EpisodeName}}</p>
						<a :href="list.MovieUrl">{{list.MovieUrl}}</a>
					</li>
				</ul>
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
				videoInfo: {},
				tips: 'search movie, do it, just do it',
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
					this.searching = true
					this.tips = '数据查询中，请稍候...'
					fecth.get(API.GET_RESOURCE_VIDEO, {'keyword': this.keyword}).then((res) => {
						if (res.data && res.data.ResultData) {
							this.videoInfo = res.data.ResultData
							this.searching = false
							return
						}
						this.$msg('暂无搜索结果，建议重试一次!')
						this.videoInfo = {}
						this.tips = '嘤嘤嘤,暂无搜索结果'
						this.searching = false
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
	.video_download
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
			user-select: text
			color:$text_color
			.name
				color:$text_color
			.downloadtip
				font-size:14px
			.resultlist
				width:100%
				height:auto
				padding: 15px 0
				border-bottom:1px solid $border_bottom_color_deep
				.itemlists
					.itemlist
						color: $text_color
						border-bottom: 1px solid $border_bottom_color
						p
							margin:0
							padding: 2px 0
							&.itemname
								font-size:16px
							&.itemdisc
								font-size:14px
								color: $text_color_opacity
								padding-left:10px
						a
							text-decoration: underline
							padding-left:10px
							color: $text_link_color
							font-size:14px
						    word-break: break-word
					
				
				
</style>