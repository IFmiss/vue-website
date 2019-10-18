<template>
  <div class="contact">
  	<div class="div_back" @click="back"><i class="icon-back"></i></div>
  	<div class="contact_content">
  		<div class="contact_list dw-boot-col-lg-3 dw-boot-col-md-4 dw-boot-col-sm-6">
  			<img :src="qq" crossorigin="anonymous" alt="未曾遗忘的青春">
  			<p class="disc">Q Q (<a class="chat" href="http://wpa.qq.com/msgrd?v=3&uin=185098535&site=qq&menu=yes" target="_black">点击直接聊天</a>)</p>
  		</div>
  		<div class="contact_list dw-boot-col-lg-3 dw-boot-col-md-4 dw-boot-col-sm-6">
  			<img :src="wx" crossorigin="anonymous" alt="未曾遗忘的青春">
  			<p class="disc">微 信</p>
  		</div>
  	</div>
  </div>
</template>
<script>
// import store from '../../../store'
// import axios from 'axios'
import API from 'config/api'
export default {
	data () {
		return {
			qq: `${API.HOST}/web_v2/818741753301018324.jpg`,
			wx: `${API.HOST}/web_v2/101920356445396365.jpg`
		}
	},
	methods: {
		back () {
			this.$router.go(-1)
		}
	},
	mounted () {
		// this.getTipsInfo()
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
	.contact_content
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
		padding:30px
		display:flex
		align-items: center
		justify-content: space-around
		flex-wrap:wrap
		.contact_list
			display:flex
			align-items: center
			flex-direction:column
			justify-content: center
			img
				width:236px
				height:236px
				box-shadow:1px 1px 20px 1px #eee
				border-radius:4px
			.disc
				text-align:center
				color:#fff
				font-weight:600
				.chat
					color: $active_color
					font-size: 14px
					text-decoration: underline
				

</style>
