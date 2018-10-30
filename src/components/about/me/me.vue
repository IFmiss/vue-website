<template>
  <div class="me">
  	<div class="div_back" @click="back"><i class="icon-back"></i></div>
  	<div class="me_content">
  		<p class="title">个人标签</p>
  		<div class="personal_tips">
  			<span class="tip_list" v-for="(list, index) in personal_tips" @click.stop="clickTips(list.biaoQianName)">
				<span class="name">{{list.biaoQianName}}</span>
				<span class="count">{{list.biaoQianValue}}</span>
  				<span class="bg-content" :style="{backgroundColor:getGlobalInfo.contentInfo.bgcolor, opacity : (getGlobalInfo.contentInfo.opacity * 1 + 0.4 > 0.88 ? 0.88 : getGlobalInfo.contentInfo.opacity * 1 + 0.4) - index * 0.05}">
  				</span>
  			</span>
  		</div>
		<p class="title">技术标签</p>
  		<div class="technology_tips">
  			<span class="tip_list" v-for="(list, index) in technology_tips" @click.stop="clickTips(list.biaoQianName)">
				<span class="name">{{list.biaoQianName}}</span>
				<span class="count">{{list.biaoQianValue}}</span>
  				<span class="bg-content" :style="{backgroundColor:getGlobalInfo.contentInfo.bgcolor, opacity : (getGlobalInfo.contentInfo.opacity * 1 + 0.4 > 0.88 ? 0.88 : getGlobalInfo.contentInfo.opacity * 1 + 0.4) - index * 0.05}">
  				</span>
  			</span>
  		</div>
  	</div>
  </div>
</template>
<script>
import store from 'store'
import fecth from 'utils/fecth.js'
import API from 'config/api'
export default {
	data () {
		return {
			personal_tips: [],
			technology_tips: []
		}
	},
	computed: {
		getGlobalInfo () {
			return store.getters.getGlobalInfo
		}
	},
	methods: {
		back () {
			this.$router.go(-1)
		},
		getTipsInfo () {
			const _this = this
			fecth.get(API.GET_TIPS_INFO).then((res) => {
				let arrPersonal = []
				let arrTechnology = []
				for (let i = 0; i < res.data.length; i++) {
					if (res.data[i].isPerson === '1') {
						arrPersonal.push(res.data[i])
					}
					if (res.data[i].isPerson === '0') {
						arrTechnology.push(res.data[i])
					}
				}
				_this.personal_tips = arrPersonal
				_this.technology_tips = arrTechnology
			}, (err) => {
				alert(err)
			})
		},
		clickTips (name) {
			const _this = this
			fecth.post(API.UPDATE_TIPS_INFO, {tipsName: name}).then((res) => {
				_this.getTipsInfo()
			}, (err) => {
				console.log(`数据加载错误${err}`)
			})
		}
	},
	mounted () {
		this.getTipsInfo()
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
	.me_content
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
		.title
			font-size:20px
			color:$text_color
		.personal_tips,.technology_tips
			font-size:0
			width:100%
			height:auto
			box-sizing:border-box
			.tip_list
				display:inline-block
				height:30px
				line-height:30px
				padding: 2px 18px
				font-size:14px
				color:$text_color
				position:relative
				margin: 20px
				border-radius:17px
				cursor:pointer
				transition:all 0.3s
				&:hover
					box-shadow:1px 1px 10px 0 rgba(255,255,255,0.24)
					color:$text_before_color
				.bg-content
					position:absolute
					top:0
					left:0
					right:0
					bottom:0
					border-radius:17px
					z-index: -1
				.name
					margin-right:6px
			
</style>
