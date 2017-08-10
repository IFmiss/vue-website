<template>
  <div class="about">
  	<div class="about_bg" v-if="globalInfo.contentInfo" :style="{backgroundColor:globalInfo.contentInfo.bgcolor, opacity : globalInfo.contentInfo.opacity}"></div>
    <div class="about-content">
    	<div class="dw-boot-container" v-show="showPanel">
    		<router-link tag="a" to="/about/works">
	        	<li class="dw-boot-col-lg-3 dw-boot-col-md-4 dw-boot-col-sm-6">
	        		<i class="icon-music"></i>
	        		<span>作品信息</span>
	        	</li>
	        </router-link>
        	<router-link tag="a" to="/about/works">
	        	<li class="dw-boot-col-lg-3 dw-boot-col-md-4 dw-boot-col-sm-6">
	        		<i class="icon-music"></i>
	        		<span>作品信息</span>
	        	</li>
	        </router-link>
	        <router-link tag="a" to="/about/works">
	        	<li class="dw-boot-col-lg-3 dw-boot-col-md-4 dw-boot-col-sm-6">
	        		<i class="icon-music"></i>
	        		<span>作品信息</span>
	        	</li>
	        </router-link>
	        <router-link tag="a" to="/about/works">
	        	<li class="dw-boot-col-lg-3 dw-boot-col-md-4 dw-boot-col-sm-6">
	        		<i class="icon-music"></i>
	        		<span>作品信息</span>
	        	</li>
	        </router-link>
	        <router-view class="li_about"></router-view>
    	</div>
    </div>
  </div>
</template>
<script>
  import store from './../../store'
  export default {
  	data () {
  		return {
  			showPanel: true
  		}
  	},
  	methods: {
  		getRoutePath () {
  			// return this.$route.path
			// if (this.$route.path.indexOf('/about'))
			if (this.$route.path.indexOf('/about') === 0 && this.$route.path.length > 6) {
				this.showPanel = false
			}
		}
  	},
  	computed: {
		globalInfo () {
			return store.getters.getGlobalInfo
		}
	},
	watch: {
		'$route': 'getRoutePath'
	},
	create () {
		return this.$router.path
	}
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
	@import '../../common/response.css'
	@import '../../common/stylus/global.styl'
		.about
			position:fixed
			top:0
			left:0
			bottom:0
			right:0
			border-radius:12px
			.about_bg
				position:absolute
				top:0
				left:0;
				bottom:0
				width:100%
				right:0
				z-index:-1
			.about-content
				position:fixed
				top:100px
				bottom:50px
				left:50%
				max-width:1240px
				width:100%
				transform:translate(-50%,0)
				margin:0 auto
				overflow-y:scroll
				box-sizing:border-box
				-webkit-overflow-scrolling: touch
				padding:15px
				display:flex
				flex-direction:row
				div
					a
						flex(4)
						text-decoration:none
						color:$text_color
						li
							list-style:none	
							display:flex
							flex-direction:column
							text-align:center
							box-sizing:border-box
							margin:20px 0
							span
								display:block
								width:100%
								height:auto
								text-overflow:ellipsis
								overflow:hidden
								white-space:nowrap
								font-size:12px
							i
								font-size:24px
								
							&:active
								color:$text_color_active
						@media screen and (max-width: 768px)
							li
								width:100%
								display:block
								span
									font-size:16px
									display:inline-block
									width:auto
									vertical-align:middle
								i
									font-size:16px
									vertical-align:middle
				.li_about
					position:fixed
					top:0
					bottom:0
					left:0
					right:0
					width:100%
					height:100%
					// background:rgba(0,0,0,0.6)
				
</style>
