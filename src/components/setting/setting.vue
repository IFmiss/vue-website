<template>
  <div class="setting">
  	<div class="setting-warpper">
  		<h3 class="title">设置</h3>
  		<div class="set_bg set_list border-1px">
  			<span class="name">背景设置</span>
			<div class="switch_bg switch-right">
  				<div class="title">{{getImageInfoTitle}}</div>
				<v-switch :options="options" @selectBgType="selectBgType"></v-switch>
			</div>
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
		},
		getImageInfoTitle () {
			return store.getters.getShowBingImage ? 'bing壁纸' : '自定义壁纸'
		}
	},
  	components: {
  		'v-switch': Switch
  	}
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/global.styl'
@import '../../common/stylus/border-1px/index.styl'
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
			max-width:1240px
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
			.set_list
				padding:10px 0
				color:$text_color
				font-size:0
			.border-1px
				border-1px($border_bottom_color_deep, bottom)
				.name
					display:inline-block
					font-size:16px
					vertical-align:middle
					width: calc(100% - 150px)
				.switch-right
					display:inline-block
					vertical-align:middle
					font-size:0
					float: right
					.title
						display:inline-block
						vertical-align:middle
						font-size:14px
						margin-right: 10px;
						color:$text_color_active
					.switch
						display:inline-block
						vertical-align:middle
</style>
