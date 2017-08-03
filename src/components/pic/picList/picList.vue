<template>
	<div class="picList_content" ref="picListContent" :style="{overflowY:overflowType}">
		<div class="picList">
			<h3 class="title">08-03</h3>
			<div class="detail">
				<span>2分钟前</span> <span>上海</span>
			</div>
			<p class="disc">今天是个好日子今天是个好日子啊今天是个好日子啊今天是个好日子啊今天是个好日子啊今天是个好日子啊今天是个好日子啊今天是个好日子啊今天是个好日子啊今天是个好日子啊啊</p>
		    <!-- <v-line bg="#000" linewidth="100%" lineheight="5px"></v-line> -->
			<div class="div_image">
				<div class="image" style="background:url(https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4007804111,2303444572&fm=26&gp=0.jpg)" @click="openImg($event)"></div>
				<div class="image" style="background:url(https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4007804111,2303444572&fm=26&gp=0.jpg)"></div>
				<div class="image" style="background:url(https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4007804111,2303444572&fm=26&gp=0.jpg)"></div>
				<div class="image" style="background:url(https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4007804111,2303444572&fm=26&gp=0.jpg)"></div>
				<div class="image" style="background:url(https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4007804111,2303444572&fm=26&gp=0.jpg)"></div>
			</div>
			<div class="div_image">
				<div class="image" style="background:url(https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4007804111,2303444572&fm=26&gp=0.jpg)"></div>
				<div class="image" style="background:url(https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4007804111,2303444572&fm=26&gp=0.jpg)"></div>
				<div class="image" style="background:url(https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4007804111,2303444572&fm=26&gp=0.jpg)"></div>
				<div class="image" style="background:url(https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4007804111,2303444572&fm=26&gp=0.jpg)"></div>
				<div class="image" style="background:url(https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4007804111,2303444572&fm=26&gp=0.jpg)"></div>
			</div>
			<div class="div_image">
				<div class="image" style="background:url(https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4007804111,2303444572&fm=26&gp=0.jpg)"></div>
				<div class="image" style="background:url(https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4007804111,2303444572&fm=26&gp=0.jpg)"></div>
				<div class="image" style="background:url(https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4007804111,2303444572&fm=26&gp=0.jpg)"></div>
				<div class="image" style="background:url(https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4007804111,2303444572&fm=26&gp=0.jpg)"></div>
				<div class="image" style="background:url(https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4007804111,2303444572&fm=26&gp=0.jpg)"></div>
			</div>
			<div class="div_image">
				<div class="image" style="background:url(https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4007804111,2303444572&fm=26&gp=0.jpg)"></div>
				<div class="image" style="background:url(https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4007804111,2303444572&fm=26&gp=0.jpg)"></div>
				<div class="image" style="background:url(https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4007804111,2303444572&fm=26&gp=0.jpg)"></div>
				<div class="image" style="background:url(https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4007804111,2303444572&fm=26&gp=0.jpg)"></div>
				<div class="image" style="background:url(https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4007804111,2303444572&fm=26&gp=0.jpg)"></div>
			</div>
			<div class="div_image">
				<div class="image" style="background:url(https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4007804111,2303444572&fm=26&gp=0.jpg)"></div>
				<div class="image" style="background:url(https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4007804111,2303444572&fm=26&gp=0.jpg)"></div>
				<div class="image" style="background:url(https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4007804111,2303444572&fm=26&gp=0.jpg)"></div>
				<div class="image" style="background:url(https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4007804111,2303444572&fm=26&gp=0.jpg)"></div>
				<div class="image" style="background:url(https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4007804111,2303444572&fm=26&gp=0.jpg)"></div>
			</div>
		</div>
		<div class="image_detail" v-show="showImageDetail" :style="{backgroundImage:imageBg,backgroundSize:'cover'}">
			<div class="bg_info" :style="{backgroundColor:globalInfo.contentInfo.bgcolor,opacity:globalInfo.contentInfo.opacity}"></div>
			<div class="colse_image_detail" @click.stop="closeImg"></div>
		</div>
	</div>
</template>
<script>
  import store from './../../../store'
  export default {
  	data () {
  		return {
  			showImageDetail: false,
  			overflowType: 'initial',
  			imageBg: ''
  		}
  	},
  	watch: {
  		showImageDetail (val, oldVal) {
  			if (val === true) {
  				this.overflowType = `hidden`
  			} else {
  				this.overflowType = `initial`
  			}
  		}
  	},
  	computed: {
  		globalInfo () {
  			return store.getters.getGlobalInfo
  		}
  	},
  	methods: {
  		openImg (e) {
  			this.showImageDetail = true
  			const computedStyle = window.getComputedStyle(e.target)
  			const imageBg = computedStyle.backgroundImage
  			this.imageBg = imageBg
  		},
  		closeImg () {
  			this.showImageDetail = false
  		}
  	},
  	mounted () {
  	}
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import '../../../common/stylus/global.styl'
	.picList_content
		width:100%
		height:100%
		.picList
			padding:5px
			box-sizing:border-box
			.title
				font-size:48px
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
			.bg_info
				position:absolute
				top:0
				left:0
				bottom:0
				right:0
				z-index:-1
			.colse_image_detail
				position:absolute
				background:red
				width:50px
				height:50px
				top:0
				right:0
				cursor:pointer
</style>
