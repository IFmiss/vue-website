<template>
	<div class="audio_download">
		<div class="empty" v-if="!audioInfo.length">嘤嘤嘤,暂无搜索结果</div>
		<div class="audiolists" v-if="audioInfo.length">
			{{audioInfo}}
		</div>
	</div>
</template>

<script>
	import fecth from './../../../../utils/fecth.js'
	const SUCCESS_NO = 200
	export default {
		data () {
			return {
				audioInfo: {}
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
					let url = 'http://www.daiwei.org/vue/server/home.php?inAjax=1&do=getResourceAudio'
					fecth.get(url, {'keyword': this.keyword}).then((res) => {
						if (SUCCESS_NO === res.data.Code) {
							this.audioInfo = res.data.ResultData
						}
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
	@import './../../../../common/stylus/global.styl'
	@import './../../../../common/stylus/border-1px/index.styl'
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
</style>