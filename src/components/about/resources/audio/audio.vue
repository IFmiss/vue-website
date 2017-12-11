<template>
	<div class="audio_download">
		aaa
	</div>
</template>

<script>
	export default {
		data () {
			return {
				keywords: ''
			}
		},
		props: ['keyword'],
		method: {
			getAudioDownloadInfo () {
				// this.$router.push({name: 'videolist', params: { k: this.keyword }})
				alert(1)
			}
		},
		mounted () {
			this.getAudioDownloadInfo()
		}
	}
</script>

<style lang="stylus" rel="stylesheet/stylus">
	@import './../../../../common/stylus/global.styl'
	@import './../../../../common/stylus/border-1px/index.styl'
</style>