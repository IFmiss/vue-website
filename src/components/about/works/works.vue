<template>
  <div class="works">
  	<div class="div_back" @click="back"><i class="icon-back"></i></div>
  	<div class="works_content">
  		<!-- <workList title="jQuery 实用的loading插件" linkdemo="http://www.jq22.com/yanshi14633" linkproject="https://github.com/IFmiss/loading"></workList>
  		<workList title="jQuery 无缝滚动插件 jqueryslider" linkdemo="http://www.jq22.com/yanshi14632" linkproject="https://github.com/IFmiss/jquery-slider"></workList>
  		<workList title="jQuery 选择弹窗菜单插件centermenu" linkdemo="http://www.jq22.com/yanshi14420" linkproject="https://github.com/IFmiss/centermenu"></workList>
  		<workList title="jQuery 信息提示插件toast" linkdemo="http://www.jq22.com/yanshi14296" linkproject="https://github.com/IFmiss/toast"></workList>
  		<workList title="js音乐播放器" linkdemo="http://www.jq22.com/yanshi14295" linkproject="https://github.com/IFmiss/music"></workList>
  		<workList title="jQuery 鼠标移动菜单滑动效果" linkdemo="http://www.jq22.com/yanshi14199" linkproject="https://github.com/IFmiss/moveline"></workList>
  		<workList title="jQuery 弹窗插件dialog" linkdemo="http://www.jq22.com/yanshi14013" linkproject="https://github.com/IFmiss/dialog"></workList> -->
  		<div class="type_content" v-for="(item, index) in works_info" :key="item.id">
  			<h3 class="type_name" :type-index="index">{{item.name}}</h3>
  			<workList v-for="(list, index) in item.detail" :key="list.id" :data-index="index" :title="list.name" :linkdemo="list.link" :linkproject="list.github"></workList>
  		</div>
  	</div>
  </div>
</template>
<script>
// import store from '../../store'
import workList from './workList/workList.vue'
export default {
	data () {
		return {
			works_info: [{
						type: 0,
						name: 'jQuery插件',
						detail: [
									{
										name: 'jQuery 实用的loading插件',
										link: 'http://www.jq22.com/yanshi14633',
										github: 'https://github.com/IFmiss/loading'
									}, {
										name: 'jQuery 无缝滚动插件 jqueryslider',
										link: 'http://www.jq22.com/yanshi14632',
										github: 'https://github.com/IFmiss/jquery-slider'
									}, {
										name: 'jQuery 选择弹窗菜单插件centermenu',
										link: 'http://www.jq22.com/yanshi14420',
										github: 'https://github.com/IFmiss/centermenu'
									}, {
										name: 'jQuery 信息提示插件toast',
										link: 'http://www.jq22.com/yanshi14296',
										github: 'https://github.com/IFmiss/toast'
									}, {
										name: 'js音乐播放器插件',
										link: 'http://www.jq22.com/yanshi14295',
										github: 'https://github.com/IFmiss/music'
									}, {
										name: 'jQuery 鼠标移动菜单滑动效果',
										link: 'http://www.jq22.com/yanshi14199',
										github: 'https://github.com/IFmiss/moveline'
									}, {
										name: 'jQuery 弹窗插件dialog',
										link: 'http://www.jq22.com/yanshi14013',
										github: 'https://github.com/IFmiss/dialog'
									}
								]
					}, {
						type: 1,
						name: 'Vue项目',
						detail: [
									{
										name: '网易云音乐播放器(vue2.0)',
										link: 'http://www.daiwei.org/vue-music.html#/mymusic',
										github: 'https://github.com/IFmiss/vue-music'
									},
									{
										name: 'Vue2.0新网站改版',
										link: '#',
										github: 'https://github.com/IFmiss/vue-website'
									}
								]
					}, {
						type: 2,
						name: '原生Js',
						detail: [
									{
										name: '微信公众号播放器插件',
										link: 'http://www.daiwei.org/components/wx-audio/html/audio.html',
										github: 'https://github.com/IFmiss/wx-audio'
									}
								]
					}, {
						type: 3,
						name: 'Js小游戏',
						detail: [
									{
										name: '九宫格游戏',
										link: 'http://www.daiwei.org/game/ninePic/',
										github: 'https://github.com/IFmiss/game-ninepic'
									}
								]
					}]
		}
	},
	computed: {
	},
	methods: {
		back () {
			this.$router.go(-1)
		}
	},
	components: {
		'workList': workList
	}
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import '../../../common/stylus/global.styl'
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
		.works_content
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
			.type_content
				margin:10px 0
				.type_name
					color:#fff
					margin:0
</style>
