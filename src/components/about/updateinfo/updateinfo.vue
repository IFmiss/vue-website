<template>
	<div class="updateinfo">
		<div class="div_back" @click="back"><i class="icon-back"></i></div>
		<div class="updateinfo_content">
			<div class="updatelist" @click.stop="showUpdateDetail(item)" v-if="updateInfo" v-for="(item,index) in updateInfo">
				<span class="index">{{index + 1}}</span>
				<span class="updatetime">{{item.updatetime}}</span>
				<span class="updatecontent" :title="item.disc">{{item.disc}}</span>
				<span class="updateversion">{{item.version}}</span>
			</div>
		</div>
	</div>
</template>

<script>
	import fecth from 'utils/fecth.js'
	import store from 'store'
	import API from 'config/api'
	export default {
		data () {
			return {
				updateInfo: {}
			}
		},
		methods: {
			getUpdateInfo () {
				fecth.get(API.GET_WEB_UPDATE_INFO).then((res) => {
					this.updateInfo = res.data
				}, (err) => {
					alert(JSON.stringify(err))
				})
			},
			back () {
				this.$router.go(-1)
			},
			showUpdateDetail (item) {
				store.commit({
					type: 'setVersionList',
					data: item
				})
			}
		},
		created () {
			this.getUpdateInfo()
		}
	}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '~common/stylus/global.styl'
	.works
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
		.updateinfo_content
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
			.updatelist
				width:100%
				padding:0 15px
				height:50px
				line-height:50px
				box-sizing:border-box
				text-overflow:ellipsis
				overflow:hidden
				white-space:nowrap
				color:$text_before_color
				font-size: 0
				cursor:pointer
				border-bottom: 1px solid $border_bottom_color
				span
					text-overflow:ellipsis
					overflow:hidden
					white-space:nowrap
					&.index
						display:inline-block
						width: 50px
						text-align:center
						font-size:14px
					&.updatetime
						display:inline-block
						width: calc(30% - 50px)
						text-align:left
						font-size:14px
					&.updatecontent
						display:inline-block
						font-size:14px
						width: 45%
						text-align:left
					&.updateversion
						display:inline-block
						font-size:14px
						width: 25%
						text-align:right
					
</style>