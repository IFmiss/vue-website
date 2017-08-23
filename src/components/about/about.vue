<template>
  <div class="about">
  	<!-- <div class="about_bg" v-if="globalInfo.contentInfo" :style="{backgroundColor:globalInfo.contentInfo.bgcolor, opacity : globalInfo.contentInfo.opacity}"></div> -->
    <div class="about-content g-content" :style="{'overflow-y': isShowPanel ? 'auto' : 'hidden'}">
    	<transition name="silde-top">
	    	<div class="dw-boot-container" v-show="isShowPanel">
	    		<router-link tag="a" to="/about/works">
		        	<li class="dw-boot-col-lg-3 dw-boot-col-md-4 dw-boot-col-sm-6">
		        		<i class="icon-music"></i>
		        		<span>作品信息</span>
		        	</li>
		        </router-link>
	        	<router-link tag="a" to="/about/joke">
		        	<li class="dw-boot-col-lg-3 dw-boot-col-md-4 dw-boot-col-sm-6">
		        		<i class="icon-music"></i>
		        		<span>每日一笑</span>
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
	    	</div>
    	</transition>
    	<transition name="silde-top">
			<router-view class="li_about" v-show="!isShowPanel"></router-view>
		</transition>
    </div>
  </div>
</template>
<script>
  import store from './../../store'
  export default {
  	methods: {
  		getRoutePath () {
  			// return this.$route.path
			// if (this.$route.path.indexOf('/about'))
			if (this.$route.path.indexOf('/about') === 0 && this.$route.path.length > 6) {
				store.commit({
					type: 'setAboutChildrenRouter',
					data: false
				})
			} else {
				store.commit({
					type: 'setAboutChildrenRouter',
					data: true
				})
			}
		}
  	},
  	computed: {
		globalInfo () {
			return store.getters.getGlobalInfo
		},
		isShowPanel () {
			return store.getters.getAboutChildrenRouter
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
	@import '../../common/stylus/style.styl'
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
				display:flex
				flex-direction:row
				opacity:1
				div
					&.silde-top-enter-to,&.silde-top-leave-to
						transition: all 0.3s
					&.silde-top-enter,&.silde-top-leave-to
						opacity:0
						transform:translate3d(0,-80%,0)
					a
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
					&.silde-top-enter-to,&.silde-top-leave-to
						transition: all 0.5s
					&.silde-top-enter,&.silde-top-leave-to
						opacity:0
						transform: translate3d(0, 50%, 0)
</style>
