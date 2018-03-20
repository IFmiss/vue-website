<template>
  <div class="reward">
  	<div class="reward-content">
  		<div class="desc-content">
  			<p class="desc">本网站所有的素材和源码都是由本人提供，目的不仅是为了给自己一个学习锻炼的实践方式，也是互相学习交流的桥梁。网站开发的所有费用都是由本人承担 (域名，服务器，cdn存储) ，如果您觉得这个网站能够给到您帮助和服务，您可以扫描下面任意二维码，设置任意金额来支持我继续把它做下去。</p><p class="desc">希望未来能提供更多更好的免费服务和分享给大家。我也会将支持我的人给记录下来，您也是这个网站贡献者的一部分，谢谢您的支持和鼓励。
  			<p class="point">再次感谢🙏大家</p>
  		</div>	
  		<div class="content">
  			<div class="reward_list dw-boot-col-lg-3 dw-boot-col-md-4 dw-boot-col-sm-6">
	  			<img src="/static/WechatIMG1.jpeg" alt="支付宝">
	  		</div>
	  		<div class="reward_list dw-boot-col-lg-3 dw-boot-col-md-4 dw-boot-col-sm-6">
	  			<img src="/static/WechatIMG2.jpeg" alt="微信">
	  		</div>
  		</div>
  	</div>
  </div>
</template>
<script>
export default {
	computed: {
	},
	methods: {
		back () {
			this.$router.go(-1)
		}
	},
	mounted () {
	}
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import '~common/stylus/global.styl'
	.reward
		position:fixed
		top:0
		left:0
		bottom:0
		right:0
		border-radius:12px
		.reward_bg
			position:absolute
			top:0
			left:0;
			bottom:0
			width:100%
			right:0
			z-index:-1
		.reward-content
			opacity:1
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
			color:$text_color
			transition: all 0.5s 0.3s
			.content
				width:100%
				box-sizing:border-box
				-webkit-overflow-scrolling: touch
				padding:15px
				box-sizing:border-box
				opacity:1
				transition: all 0.5s 0.3s
				padding:0 30px
				display:flex
				align-items: center
				justify-content: space-around
				flex-wrap:wrap
				.reward_list
					text-align:center
					padding: 20px 0
					img
						width:236px
						height:236px
						box-shadow:1px 1px 20px 1px #eee
						border-radius:4px
			.desc-content
				padding:15px
				box-sizing:border-box
				.desc
					font-size: 14px
					margin: 0 auto
					text-indent: 2em
				.point
					font-size: 16px
					font-weight: 600
					text-indent: 2em
</style>
