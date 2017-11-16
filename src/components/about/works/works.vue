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
  		<div class="type_content" v-if="works_list" v-for="(item, index) in works_list" :key="item.id">
  			<h3 class="type_name" :type-index="index">{{item.name}}</h3>
  			<workList v-for="(list, index) in item.detail" :key="list.id" :data-index="index" :title="list.name" :linkdemo="list.link" :linkproject="list.codelink"></workList>
  		</div>
  	</div>
  </div>
</template>
<script>
import fecth from './../../../utils/fecth.js'
// import store from '../../store'
import workList from './workList/workList.vue'
export default {
	data () {
		return {
			works_list: []
		}
	},
	computed: {
	},
	methods: {
		back () {
			this.$router.go(-1)
		},
		initData () {
			var url = 'http://www.daiwei.org/vue/server/home.php?inAjax=1&do=getWorksList'
			fecth.get(url).then((res) => {
				this.works_list = res.data
			}, (err) => {
				alert(err)
			})
		}
	},
	components: {
		'workList': workList
	},
	mounted () {
		this.initData()
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
