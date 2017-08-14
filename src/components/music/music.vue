<template>
  <div class="music">
  	<div class="music_bg"></div>
  	<div class="music_content"></div>
  </div>
</template>
<script>
  import fecth from './../../utils/fecth.js'
  export default {
  	methods: {
  		searchMusic () {
  			const apiUrl = 'http://www.daiwei.org/vue/server/music.php?inAjax=1&do=searchMusic'
  			const data = {
  				word: '周杰伦',
  				limit: 10
  			}
  			fecth.post(apiUrl, data).then((res) => {
  				console.log(JSON.stringify(res))
  			}, (err) => {
  				console.log(err)
  			})
  		}
  	},
  	mounted () {
  		this.searchMusic()
  	}
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
</style>
