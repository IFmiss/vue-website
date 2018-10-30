<template>
	<div class="news">
		<div class="div_back" @click="back"><i class="icon-back"></i></div>
		<div class="news_content">
			<div class="selectNewsType" ref="scrollType">
				<div class="content_type">
					<span v-for="(item, index) in defaultType" @click="getNewsInfoByType()" class="news_type_list" :activeindex="index" :class="type === item.type ? 'active' : ''" :type="item.type">{{item.name}}</span>
				</div>
			</div>
			<div class="newsLists">
				<a v-if="newsData.length" v-for="(item, index) in newsData" :href="item.url">
					<p class="newstitle">{{item.title}}</p>
					<div v-if="newsData" class="image_lists">
						<img v-if="item.thumbnail_pic_s" v-lazy="item.thumbnail_pic_s" :alt="item.title">
						<img v-if="item.thumbnail_pic_s02" v-lazy="item.thumbnail_pic_s02" :alt="item.title">
						<img v-if="item.thumbnail_pic_s03" v-lazy="item.thumbnail_pic_s03" :alt="item.title">
					</div>
					<span class="tips author_name">{{item.author_name}}</span>
					<span class="tips data">{{item.date}}</span>
				</a>
			</div>
		</div>
	</div>
</template>
<script>
	import fecth from 'utils/fecth.js'
	import Bscroll from 'better-scroll'
	import API from 'config/api'
	export default {
		data () {
			// top(头条，默认),shehui(社会),guonei(国内),guoji(国际),yule(娱乐),tiyu(体育)junshi(军事),keji(科技),caijing(财经),shishang(时尚)
			return {
				type: this.$route.params.type || 'top',
				newsData: {},
				activeIndex: 0,
				defaultType: [
						{
							type: 'top',
							name: '头条'
						},
						{
							type: 'shehui',
							name: '社会'
						},
						{
							type: 'keji',
							name: '科技'
						},
						{
							type: 'tiyu',
							name: '体育'
						},
						{
							type: 'guonei',
							name: '国内'
						},
						{
							type: 'guoji',
							name: '国际'
						},
						{
							type: 'junshi',
							name: '军事'
						},
						{
							type: 'caijing',
							name: '财经'
						},
						{
							type: 'shishang',
							name: '时尚'
						}
				]
			}
		},
		methods: {
			getNewsInfo () {
				fecth.post(API.GET_NEWS_INFO, {
					type: this.type
				}).then((res) => {
					if (res.data && res.data.result && res.data.result.stat === '1') {
						this.newsData = res.data.result.data
					}
				}, (err) => {
					console.log(`数据加载错误${err}`)
				})
			},
			getNewsInfoByType (e) {
				let event = e || window.event
				this.activeIndex = event.target.getAttribute('activeindex') || 0
				this.type = event.target.getAttribute('type') || 'top'
				this.getNewsInfo()
			},
			back () {
				this.$router.go(-1)
			},
			initBscroll () {
				this.scroll = new Bscroll(this.$refs.scrollType, {
					scrollX: true,
					scrollY: false,
					click: true
				})
			}
		},
		mounted () {
			this.getNewsInfo()
			this.$nextTick(() => {
				this.initBscroll()
			})
		}
	}
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import '~common/stylus/global.styl'
	.news
		position:fixed
		top:0
		left:0
		bottom:0
		width:100%
		right:0
		border-radius:12px
		.div_back
			position:absolute
			top:0
			left:15px
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
		.news_content
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
			.selectNewsType
				position:fixed
				top:15px
				left:55px
				right:0
				height:36px
				line-height:36px
				overflow-x: hidden
				.content_type
					width:max-content
					height:100%
					overflow-y:hidden
					.news_type_list
						color:#fff
						font-weight:500
						margin-right:20px
						float:left
						cursor:pointer
						&.active
							color:$active_color
			.newsLists
				position:fixed
				top:50px
				bottom:0
				left: calc(50% + 25px)
				max-width:calc(1240px - 50px)
				width:100%
				transform:translate3d(-50%,0,0)
				margin:0 auto
				overflow-y:auto
				box-sizing:border-box
				-webkit-overflow-scrolling: touch
				padding:15px 5px
				box-sizing:border-box
				opacity:1
				transition: all 0.5s 0.3s
				
				a
					display:block
					border-bottom: 1px solid $border_bottom_color
					padding: 10px
					&:hover
						background:$list_hover
					.newstitle
						margin:5px 0
						line-height:1.5
					.image_lists
						img
							width:150px
							margin-right: 10px
					.tips
						margin-right:10px
						font-size:14px

		@media screen and (max-width: 525px)
			.news_content
				padding: 5px 0
				.selectNewsType
					left: 15px
					top:0
					.content_type
						.news_type_list
							margin-right:10px
				.newsLists
					left: 50%
					max-width:1240px
					width:100%
					padding:0
					a
						.image_lists
							width:100%
							font-size:0
							img
								display:inline-block
								width:30%
								margin:1.5%
</style>