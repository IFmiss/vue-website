<template>
  <div class="setting">
  	<div class="setting-warpper">
  		<h3 class="title">设置</h3>
  		<div class="set_bg">
  			<span class="name">背景设置</span>
			<v-switch :options="options" @selectBgType="selectBgType"></v-switch>
  		</div>
  	</div>
  </div>
</template>
<script>
  import store from './../../store'
  import Switch from './../switch/switch.vue'
  export default {
  	data () {
  		return {
  			options: {
				isactive: store.getters.getShowBingImage,
				rangebg: '#aaa',
				rangeactivebg: 'red',
				contentbg: '#fff',
				ref: 'bg'
			}
		}
	},
	methods: {
		selectBgType (info) {
			if (info.ref === 'bg') {
				store.dispatch({
					type: 'set_ShowBingImage',
					data: info.active
				})
			}
		}
	},
	computed: {
		getImageInfo () {
			return store.getters.getShowBingImage
		}
	},
  	components: {
  		'v-switch': Switch
  	}
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/global.styl'
	.setting
		position:fixed
		top:0
		left:0
		bottom:0
		width:100%
		right:0
		border-radius:12px
		.setting-warpper
			position:fixed
			top:100px
			bottom:50px
			left:50%
			max-width:1200px
			width:100%
			transform:translate(-50%,0)
			margin:0 auto
			overflow-y:scroll
			box-sizing:border-box
			-webkit-overflow-scrolling: touch
			padding:15px;
			// background:red
			.title
				color:$text_color
				margin:0
			.set_bg
				padding:10px 0
				color:$text_color
</style>
