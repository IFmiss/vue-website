<template>
	<div class="resources">
		<div class="div_back" @click="back"><i class="icon-back"></i></div>
		<div class="resources_content">
			<div class="serachArea">
				<div class="selectContent">
					<input class="searchInfo" type="text" placeholder="搜索你想搜的资源" v-model="searchKey"><button @click="getResource()">搜索</button>
				</div>
			</div>
			<transition name="silde-top">
				<router-view class="list_resources" name="downloadlist"></router-view>
			</transition>
		</div>
	</div>
</template>

<script>
	import fecth from './../../../utils/fecth.js'
	export default {
		data () {
			return {
				searchKey: '',
				downloaddata: ''
			}
		},
		methods: {
			getResource () {
				let url = 'http://www.daiwei.org/vue/server/home.php?inAjax=1&do=getResourceNew'
				let parm = {'keyword': this.searchKey}
				fecth.get(url, parm).then((res) => {
					alert(JSON.stringify(res.data))
				}, (err) => {
					alert(JSON.stringify(err))
				})
			},
			back () {
				this.$router.go(-1)
			}
		},
		created () {
		}
	}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '../../../common/stylus/global.styl'
  	::-webkit-input-placeholder
  		color:$text_color_opacity
 	:-moz-placeholder
  		color:$text_color_opacity
  	:-ms-input-placeholder
  		color:$text_color_opacity
	.resources
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
		.resources_content
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
			.serachArea
				position:absolute
				top:0
				height:50px
				padding:7px 0
				width:100%
				left:0
				box-sizing:border-box
				.selectContent
					width: 70%
					min-width: 300px
					max-width:500px
					margin: 0 auto
					height:36px
					font-size:0
					color:$text_color
					.searchInfo
						display:inline-block
						vertical-align:top
						height:36px
						width: calc(100% - 70px)
						font-size:14px
						padding:0
						text-indent:5px
						color:$text_color
						background:transparent
						border-radius:4px 0 0 4px
						border:1px solid $text_color
						border-right:0 none
						outline:0 none
						margin:0
						box-sizing:border-box
					button
						display:inline-block
						vertical-align:top
						height:36px
						width: 66px
						font-size:14px
						color:$text_color
						border-radius:0 4px 4px 0
						border:1px solid $text_color
						background:transparent
						padding:0
						outline:0 none
						margin:0
						cursor:pointer
			.list_resources
				position:absolute
				top: 80px
				bottom:0
				left:0
				right:0
				width:100%
				box-sizing:border-box
				padding:15px
				// background:red			
</style>