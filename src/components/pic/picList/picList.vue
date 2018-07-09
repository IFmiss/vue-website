<template>
	<div class="picList_content" ref="picListContent">
		<div class="picList">
			<h3 class="title">{{getNewDate}}</h3>
			<div class="detail">
				<span>{{getTimeLength}}</span> <span>{{dataInfo.place}}</span>
			</div>
			<p class="disc">{{dataInfo.disc}}</p>
		    <!-- <v-line bg="#000" linewidth="100%" lineheight="5px"></v-line> -->
			<div class="div_image" v-if="dataInfo.detail">
				<div v-for="(data, index) in dataInfo.detail" :data-index="dataIndex" :key="data.id" class="image" :style="{backgroundImage : 'url(' + data.url + ')', backgroundSize:'cover', backgroundPosition:'center center'}" @click="openImg($event, dataInfo.detail, index)"></div>
			</div>
			
		</div>
	</div>
</template>
<script>
  import store from 'store'
  export default {
  	props: {
  		dataIndex: 0,
  		dataInfo: {}
  	},
  	computed: {
  		globalInfo () {
  			return store.getters.getGlobalInfo
  		},
		getNewDate () {
			return this.dataInfo.datetime.split(' ')[0]
		},
		getTimeLength () {
			const parseDate = Date.parse(new Date(this.dataInfo.datetime)) / 1000
			const currentDate = Date.parse(new Date()) / 1000
			if (currentDate - parseDate > 60 * 60 * 24 * 365) {
				return `${Math.floor((currentDate - parseDate) / (60 * 60 * 24 * 365))} 年前`
			}
			if (currentDate - parseDate > 60 * 60 * 24 * 30) {
				return `${Math.floor((currentDate - parseDate) / (60 * 60 * 24 * 30))} 个月前`
			}
			if (currentDate - parseDate > 60 * 60 * 24) {
				return `${Math.floor((currentDate - parseDate) / (60 * 60 * 24))} 天前`
			}
			if (currentDate - parseDate > 60 * 60) {
				return `${Math.floor((currentDate - parseDate) / (60 * 60))} 小时前`
			}
			if (currentDate - parseDate > 60) {
				return `${Math.floor((currentDate - parseDate) / 60)} 分钟前`
			}
			if (currentDate - parseDate > 1) {
				return `${Math.floor(currentDate - parseDate)} 秒前`
			}
		}
  	},
  	methods: {
  		openImg (e, data, index) {
  			// this.swiper.slideTo(index, 0, false)
  	// 		this.currentPicLists = data
  	// 		this.showImageDetail = true
  	// 		const computedStyle = window.getComputedStyle(e.target)
  	// 		const imageBg = computedStyle.backgroundImage
			// this.imageBg = imageBg.substring(5, imageBg.length - 2)
			store.dispatch({
				type: 'set_PicList',
				data: this.dataInfo
			})
			this.$emit('showswiper', index)
  		},
  		closeImg () {
  			this.showImageDetail = false
  		}
  	},
  	mounted () {
  	// 	setTimeout(function () {
  	// 		$('.picList_content').mCustomScrollbar({
			// 	// theme: 'minimal-dark'
			// })
  	// 	}, 1000)
  	}
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import '~common/stylus/global.styl'
	.picList_content
		// width:100%
		// height:100%
		.picList
			padding:5px
			box-sizing:border-box
			.title
				font-size:36px
				font-weight:400
				color:$text_color
				margin:15px 0
			.detail
				font-size:12px
				color:$text_color
			span
				margin-right:10px
			.disc
				display:inline-block
				font-size:16px
				color:$text_color
				margin:0
				padding:10px 0
				line-height:1.5
				min-width:50%
				border-bottom:1px solid $border_bottom_color
			.div_image
				width:100%
				height:auto
				font-size:0
				padding:20px 0
			.image
				display:inline-block
				margin-top:20px
				width:110px
				height:110px
				cursor:pointer
				border-radius:4px
				margin:5px
				@media screen and (max-width:768px)
					&.image
						width:90px
						height:90px
						&:first-child
							margin-left:0
				@media screen and (min-width:768px)
					&.image
						width:150px
						height:150px
						margin:10px
						&:first-child
							margin-left:0
		.image_detail
			position:fixed
			top:0
			left:0
			bottom:0
			right:0
			transform-origin:center center
			transform:scale(1)
			&.fade-scale-enter-active,&.fade-scale-leave-active
				transition: all 0.5s 
			&.fade-scale-enter,&.fade-scale-leave-to
				opacity:0
				transform:scale(0)
			.swiper-container
				height:100%
				.swiper-wrapper
					.swiper-slide
						width:100%
						height: 100%
						overflow:hidden
				.swiper-pagination
				.swiper-pagination-bullet
					margin:0 4px
					&.swiper-pagination-bullet-active
						background:$active_color!important
			.bg_info
				position:absolute
				top:0
				left:0
				bottom:0
				right:0
				z-index:-1
			.colse_image_detail
				position:absolute
				width:80px
				height:80px
				line-height:80px
				text-align:center
				top:0
				right:0
				z-index:2
				cursor:pointer
				i
					font-size:46px
					color:$text_color
					vertical-align: middle
				.bg_colse_image_detail
					width:100%
					height:100%
					z-index:-1
			.bg_image_info
				display:block
				width:100%
				height:100%
			.image_info
				height:100%
				display:block
				margin:0 auto
</style>
