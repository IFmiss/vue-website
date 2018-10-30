<template>
  <div class="works">
  	<div class="div_back" @click="back"><i class="icon-back"></i></div>
  	<div class="works_content">
  		<div class="type_content" v-if="works_list" v-for="(item, index) in works_list" :key="item.id">
  			<h3 class="type_name" :type-index="index">{{item.name}}</h3>
  			<workList v-for="(list, index) in item.detail" :key="list.id" :data-index="index" :title="list.name" :linkdemo="list.link" :linkproject="list.codelink"></workList>
  		</div>
  	</div>
  </div>
</template>
<script>
import fecth from 'utils/fecth.js'
// import store from '../../store'
import API from 'config/api'
import workList from 'components/about/works/workList/workList.vue'
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
			fecth.get(API.GET_WORKS_LIST).then((res) => {
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
