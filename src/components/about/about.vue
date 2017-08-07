<template>
  <div class="about">
    <div class="about-content">
    	<router-link tag="a" to="/about/works">
        	<li>
        		<i class="icon-music"></i>
        		<span>作品信息</span>
        	</li>
        </router-link>
        <router-view class="li_about"></router-view>
    </div>
  </div>
</template>
<script>
  export default {
  	data () {
  		return {
  			hasActive: document.getElementsByClassName('li_about').querySelector('.router-link-active')
  		}
  	}
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
	@import '../../common/stylus/global.styl'
		.about
			position:fixed
			top:0
			left:0
			bottom:0
			right:0
			border-radius:12px
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
				a
					flex(4)
					text-decoration:none
					color:$text_color
					li
						list-style:none	
						display:flex
						flex-direction:column
						text-align:center
						&:active
							color:$text_color_active
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
