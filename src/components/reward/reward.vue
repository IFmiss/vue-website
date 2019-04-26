<template>
  <div class="reward">
  	<div class="reward-content">
  		<div class="desc-content">
  			<p class="desc">本网站所有的素材和源码都是由本人提供，目的不仅是为了给自己一个学习锻炼的实践方式，也是互相学习交流的桥梁。网站开发的所有费用都是由本人承担 (域名，服务器，cdn存储) ，如果您觉得这个网站能够给到您帮助和服务，您可以扫描下面任意二维码，设置任意金额来支持我继续把它做下去。</p>
				<p class="desc">希望未来能提供更多更好的免费服务和分享给大家。我也会将支持我的人给记录下来，您也是这个网站贡献者的一部分，谢谢您的支持和鼓励</p>
				<p class="desc">另外承接各种微信公众号h5开发，小程序开发，网站开发，有需求可以邮箱我 185098535@qq.com</p>
  			<p class="point">再次感谢🙏大家</p>
  		</div>	
  		<div class="content">
  			<div class="reward_list dw-boot-col-lg-3 dw-boot-col-md-4 dw-boot-col-sm-6">
	  			<img src="http://www.daiwei.org/new/WechatIMG1.jpeg" alt="支付宝">
	  		</div>
	  		<div class="reward_list dw-boot-col-lg-3 dw-boot-col-md-4 dw-boot-col-sm-6">
	  			<img src="http://www.daiwei.org/new/WechatIMG2.jpeg" alt="微信">
	  		</div>
  		</div>
  		<p class="point">希望能够留下您的信息，我会将支持用户保存下来 <router-link to="/about/contact"> 点击这里加我好友！</router-link></p>
  		<span class="showRewardList" @click="showHideRewardListInfo">网站贡献者，点击查看</span>
  	</div>
  	<div class="reward-list-info" v-show="showRewardList" @click="showHideRewardListInfo">
  		<transition name="fade">
  			<div class="reward-list-bg" v-show="showRewardList"></div>
  		</transition>
  		<transition name="slide-left">
	  		<ul class="reward-lists" v-show="showRewardList">
	  			<li class="reward-list border-1px" v-for = "(item,index) in rewardLists">
	  				<a :href="item.link">
	  					<img v-lazy="item.avatar">
	  					<span>{{item.name}}</span>
	  				</a>
		  		</li>
	  		</ul>
  		</transition>
  	</div>	
  </div>
</template>
<script>
import fecth from 'utils/fecth.js'
import API from 'config/api'
export default {
	data () {
		return {
			showRewardList: false,
			rewardLists: []
		}
	},
	computed: {
	},
	methods: {
		back () {
			this.$router.go(-1)
		},
		showHideRewardListInfo () {
			this.showRewardList = !this.showRewardList
			if (!this.rewardLists.length && this.showRewardList) {
				this.getRewardList()
			}
		},
		getRewardList () {
			fecth.get(API.GET_REWARD_LIST).then((res) => {
				this.rewardLists = res.data
			}, (err) => {
				alert(err)
			})
		}
	},
	mounted () {
	}
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import '~common/stylus/global.styl'
  @import '~common/stylus/border-1px/index.styl'
	.reward
		position:fixed
		top:0
		left:0
		bottom:0
		right:0
		border-radius:12px
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
			// transition: all 0.5s 0.3s
			.content
				width:100%
				box-sizing:border-box
				-webkit-overflow-scrolling: touch
				padding:15px
				box-sizing:border-box
				opacity:1
				// transition: all 0.5s 0.3s
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
			.point
				font-size: 14px
				a
					color: #fff
					padding-left: 4px
					font-size: 14px
					color: #e1e1e1
					// text-decoration: none
					font-weight:bold
		.showRewardList
			cursor: pointer
			font-size: 18px
			font-weight: 500
			display:inline-block
			background: -webkit-gradient(linear, 0% 0%, 100% 100%, color-stop(0%, red), color-stop(100%, #d169d2));
			background: -moz-linear-gradient(top, red, #d169d2);
			background: -webkit-linear-gradient(top, red, #d169d2);
			background: linear-gradient(to bottom right, red, #d169d2);
			-webkit-background-clip: text;
			-webkit-text-fill-color: transparent;
			color:transparent;
			text-decoration:underline
			transition: all 0.3s
			&:hover
				background: -webkit-gradient(linear, 0% 0%, 100% 100%, color-stop(0%, #44D3CC), color-stop(100%, #373EAE));
				background: -moz-linear-gradient(top, #44D3CC, #373EAE);
				background: -webkit-linear-gradient(top, #44D3CC, #373EAE);
				background: linear-gradient(to bottom right, #44D3CC, #373EAE);
				-webkit-background-clip: text;
				-webkit-text-fill-color: transparent;
				color:transparent;
				text-decoration:underline
				transition: all 0.3s
		.reward-list-info
			position: absolute
			top:0
			left:0
			bottom:0
			right:0
			.reward-list-bg
				position: absolute
				top:0
				left:0
				bottom:0
				right:0
				background:rgba(0,0,0,0.4)
				z-index: 2
				opacity: 1
				visibility: visible
				&.fade-enter-to,&.fade-leave-to
					transition: all 0.5s
				&.fade-enter,&.fade-leave-to
					opacity: 0
					visibility: none
			.reward-lists
				position: absolute
				top: 0
				right:0
				bottom:0
				overflow-y:scroll
				width: 280px
				background: #fff
				z-index: 3
				margin:0
				padding: 40px 0
				background: rgba(0,0,0,0.7)
				color: #fff
				box-sizing: border-box
				&.slide-left-enter-to,&.slide-left-leave-to
					transition: all 0.5s ease
				&.slide-left-enter,&.slide-left-leave-to
					right: -280px
				.reward-list
					width: 100%
					height: 52px
					padding: 10px
					box-sizing: border-box
					display:block
					&.border-1px
	  					border-1px($border_bottom_color_deep, bottom)
					&:hover
						background: rgba(255,233,168,0.2)
					a
						display:flex
						width: 100%
						height: 100%
						color: #fff
						text-decoration:none
						font-size: 14px
						img
							flex: 0 0 32px
							width: 32px
							margin-right: 10px
							border-radius: 50%
							vertical-align: middle
						span
							flex: 1 1 auto
							overflow: hidden
							display: inline-block
							line-height: 32px
							vertical-align: middle
							text-overflow: ellipsis
							white-space: nowrap

</style>
