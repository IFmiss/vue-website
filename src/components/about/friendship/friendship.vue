<template>
  <div class="friendship">
  	<div class="div_back" @click="back"><i class="icon-back"></i></div>
  	<div class="friendship_content dw-boot-container">
  		<div class="friendship_list dw-boot-col-lg-3 dw-boot-col-md-3 dw-boot-col-sm-4" v-if="friendShipList" v-for="item in friendShipList">
			<a :href="item.url" target="_black">
				<li :title="item.disc">{{item.name}}</li>
			</a>
  		</div>
  	</div>
  </div>
</template>
<script>
import API from 'config/api'
import fecth from 'utils/fecth.js'
export default {
	data () {
		return {
			friendShipList: {}
		}
	},
	computed: {
		// getGlobalInfo () {
		// 	return store.getters.getGlobalInfo
		// }
	},
	methods: {
		back () {
			this.$router.go(-1)
		},
		initData () {
			const _this = this
			const apiUrl = API.GET_LINKS
			fecth.get(apiUrl).then((res) => {
				this.friendShipList = res.data
				_this.$msg('想互换友链的朋友可以给我留言哦!')
			})
		}
	},
	mounted () {
		// this.getTipsInfo
		this.initData()
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
	.friendship_content
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
		// padding:30px
		.friendship_list
			padding:0
			a
				text-decoration:underline!important
				font-size:14px
				.disc
					text-align:center
					color:#fff
					text-decoration:underline
				

</style>
