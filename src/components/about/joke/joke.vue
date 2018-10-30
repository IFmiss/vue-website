<template>
  <div class="joke">
  	<div class="div_back" @click="back"><i class="icon-back"></i></div>
  	<div class="joke_content">
  		<jokeList v-if="jokeInfo" v-for="(list, index) in jokeInfo" :key="list.id" :disc="list.content"></jokeList>
  		<a class="href_right" href="http://www.laifudao.com/" target="_black">每日一笑数据由来福岛提供</a>
  	</div>
  </div>
</template>
<script>
import API from 'config/api'
import fecth from 'utils/fecth.js'
import jokeList from 'components/about/joke/jokeList/jokeList.vue'
// import axios from 'axios'
export default {
	data () {
		return {
			jokeInfo: {}
		}
	},
	computed: {
	},
	methods: {
		back () {
			this.$router.go(-1)
		},
		getJokeData () {
			const apiUrl = API.GET_JOKE
			fecth.get(apiUrl).then((res) => {
				this.jokeInfo = res.data
			})
		}
	},
	components: {
		'jokeList': jokeList
	},
	mounted () {
		this.getJokeData()
	}
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import '~common/stylus/global.styl'
	.div_back
		position:absolute
		top:0
		left:20px
		width:40px
		height:40px
		color:$text_color
		text-align:center
		line-height:42px
		font-size:20px
		border-radius:50%
		transition: all 0.3s
		&:hover
			background:rgba(0,0,0,0.3)
	.href_right
		height:60px
		color:$text_color
		text-align:center
		line-height:60px
		float: right;
	.joke_content
		position:fixed
		top:50px
		bottom:0
		left:50%
		max-width:1240px
		width:100%
		transform:translate3d(-50%,0,0)
		margin:0 auto
		overflow-y:auto
		box-sizing:border-box
		-webkit-overflow-scrolling: touch
		padding:15px
		box-sizing:border-box
		opacity:1
		transition: all 0.5s 0.3s
</style>
