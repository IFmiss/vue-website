<template>
	<div class="coverhistory">
		<div class="container">
			<scroll :data ="imageList" :needPullUp="isNeedPull" @pullingUp="pullingUp">
				<div class="content" v-if="imageList">
					<div class="cover-list" v-for="item in imageList">
						<div class="image-info" :style="{backgroundImage : 'url(' + item.url + ')', backgroundSize:'cover', backgroundPosition:'content content'}"></div>
						<div class="image-desc">
							<li class="desc">{{item.url}}</li>
						</div>
					</div>
				</div>
			</scroll>
		</div>
	</div>
</template>
<script>
	import fecth from 'utils/fecth.js'
	import Scroll from 'components/common/bscroll/bscroll.vue'
	export default {
		data () {
			return {
				imageList: [],
				isNeedPull: true,
				imageIndex: 0
			}
		},
		components: {
			scroll: Scroll
		},
		methods: {
			initImageList () {
				let fecthUrl = 'http://www.daiwei.org/vue/server/home.php?inAjax=1&do=getAllImage'
				fecth.post(fecthUrl, {
					index: this.imageIndex
				}).then((res) => {
					this.imageList = res.data
				}, (err) => {
					console.log(`数据请求错误${err}`)
				})
			},
			pullingUp () {
				this.imageIndex = this.imageIndex + 8
				this.initImageList()
			}
		},
		mounted () {
			this.$nextTick(() => {
				this.initImageList()
			})
		}
	}
</script>
<style lang="stylus" rel="stylesheet/stylus">
	@import '../../../common/stylus/global.styl'
	.coverhistory
		position: absolute
		top: 0
		left: 0
		right: 0
		bottom: 0
		box-sizing:border-box
		padding: 48px 20px
		.container
			position: absolute
			top: 48px
			bottom:48px
			left:50%
			transform: translate(-50%, 0)
			max-width: 768px
			margin: 0 auto
			height: 100%
			overflow: hidden
			.content
				.cover-list
					.image-info
						border: 3px solid rgba(244,244,244,0.8)
						padding-top: 60%
						box-shadow: 0 0 30px 0 rgba(244,244,244,0.5)
					.image-desc
						.desc
							width: 100%
							padding: 5px
							color: $text_color
							margin: 0
							box-sizing: border-box
							
</style>