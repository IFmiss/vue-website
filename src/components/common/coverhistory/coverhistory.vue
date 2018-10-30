<template>
	<div class="coverhistory" @click="hideAllList">
		<div class="container">
			<scroll class="coverhistory_content" :data ="imageList" :needPullUp="isNeedPull" @pullingUp="pullingUp">
				<div class="content">
					<div class="cover-list" v-if="imageList" v-for="item in imageList">
						<div class="image-info" v-if="item && item.url" :style="{backgroundImage : 'url(' + item.url + ')', backgroundSize:'cover', backgroundPosition:'center center'}">
							<div class="date" v-if="item.date">{{item.date.split(' ')[0]}}</div>
							<div class="image-desc" v-if="item.disc">
								<li class="desc">{{item.disc}}</li>
							</div>
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
	import API from 'config/api'
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
				fecth.post(API.GET_ALL_MINE_IMAGE, {
					index: this.imageIndex
				}).then((res) => {
					this.imageIndex = this.imageIndex + 8
					this.imageList = this.imageList.concat(res.data)
				}, (err) => {
					console.log(`数据请求错误${err}`)
				})
			},
			pullingUp () {
				this.initImageList()
			},
			hideAllList () {
				this.$emit('setStatus')
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
		position: fixed
		top: 0
		left: 0
		right: 0
		bottom: 0
		box-sizing:border-box
		background: rgba(7,17,27, 0.8)
		.container
			position: absolute
			top: 48px
			bottom:48px
			left:50%
			transform: translate(-50%, 0)
			max-width: 468px
			width: 100%
			margin: 0 auto
			overflow-y: hidden
			.coverhistory_content
				width:90%
				margin:0 auto
				height: 100%
				overflow: hidden
				.content
					padding-bottom: 20px
					.cover-list
						margin: 20px 0
						.image-info
							position:relative
							border: 3px solid rgba(244,244,244,0.8)
							border-radius: 8px
							padding-top: 60%
							overflow: hidden
							// box-shadow: 0 0 30px 0 rgba(244,244,244,0.5)
							.date
								position: absolute
								top: 5px
								left: 5px
								background: rgba(244,244,255,0.2)
								border-radius: 12px
								line-height: 24px
								padding: 0 10px
								color:$text_color
								font-size:12px
							.image-desc
								background: rgba(7,17,27,0.3)
								position: absolute
								bottom: 0
								left: 0
								right: 0
								height: auto
								.desc
									width: 100%
									padding: 5px
									color: $text_color
									margin: 0
									box-sizing: border-box
									line-height: 1.5
									font-size: 14px
							
</style>