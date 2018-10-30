<template>
  <div class="suggest">
  	<div class="div_back" @click="back"><i class="icon-back"></i></div>
  	<div class="suggest_content" v-show="!showList">
  		<div class="suggest_detail">
  			<p class="title">想说什么尽管说。我改！</p>
	  		<textarea class="suggest_area" ref="content" name="suggest" id="" cols="30" rows="6"></textarea>
	  		<p class="title">请留下您的联系方式(也可以不填写)</p>
	  		<textarea class="suggest_area" ref="contactinfo" name="suggest" id="" cols="30" rows="2"></textarea>
	  		<span class="submit_suggest" @click.stop="submitSuggest">提交</span>
  		</div>
  		<p class="read_suggest" @click="showSuggestList()">查看留言列表</p>
  	</div>
  	<div class="suggest_lists" v-show="showList" @click="hideSuggestList()">
  		<ul class="lists_c" v-if="suggestList">
  			<span class="title">近期留言（只显示最近五条）</span>
  			<li class="submitSuggest" v-for="item in suggestList"><span class="name">{{item.user_name || '匿名用户'}} </span> {{item.suggestContent}}</li>
  		</ul>
  	</div>
  </div>
</template>
<script>
import store from 'store'
import API from 'config/api'
import fecth from 'utils/fecth.js'
export default {
	data () {
		return {
			showList: false,
			suggestList: []
		}
	},
	methods: {
		back () {
			this.$router.go(-1)
		},
		showSuggestList () {
			this.showList = true
			this.getSuggestInfo()
		},
		submitSuggest () {
			const suggestInfo = this.$refs.content.value
			const contactInfo = this.$refs.contactinfo.value
			const suggestT = this.getDateNow()
			const userId = store.getters.getUserInfo === null ? null : store.getters.getUserInfo.id
			const userName = store.getters.getUserInfo === null ? null : store.getters.getUserInfo.username
			if (suggestInfo === '') {
				this.$msg('建议内容不能为空')
			} else if (suggestInfo.length < 10) {
				this.$msg('内容不能少于10个字符哦！多说点真心话吧')
			} else {
				fecth.post(API.SUB_SUGGEST_INFO, {
						suggestContent: suggestInfo.replace(/\n|\r\n/g, '<br>'),
						contact: contactInfo,
						getDate: suggestT,
						user_id: userId,
						user_name: userName
					}).then((res) => {
						this.$msg(res.data.msg)
				}, (err) => {
					console.log(`数据加载错误${err}`)
				})
			}
		},
		hideSuggestList () {
			this.showList = false
		},
		getDateNow () {
			const date = new Date()
			const year = date.getFullYear()
			const month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) + '' : date.getMonth() + 1
			const day = date.getDate() < 10 ? '0' + date.getDate() + '' : date.getDate()
			const hours = date.getHours() < 10 ? '0' + date.getHours() + '' : date.getHours()
			const minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() + '' : date.getMinutes()
			const seconds = date.getSeconds() < 10 ? '0' + date.getSeconds() + '' : date.getSeconds()
			return year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + ':' + seconds
		},
		getSuggestInfo () {
			fecth.get(API.GET_SUGGEST_INFO).then((res) => {
				this.suggestList = res.data
			}, (err) => {
				console.log(`数据加载错误${err}`)
			})
		}
	},
	mounted () {
		console.log(store.getters.getUserInfo)
	}
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import '~common/stylus/global.styl'
	.suggest
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
		.suggest_content
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
			.type_name
				color:#fff
				margin:0
			.suggest_detail
				display:block
				margin:0 auto
				width:400px
				max-width:100%
				.title
					color:$text_color
			.suggest_area
				background:transparent
				color:$text_color
				resize: none
				width:100%
				display:block
				margin:0 auto
				outline:none
				padding:10px
				border:1px solid $text_color
				box-sizing:border-box
				line-height:1.5
			.submit_suggest
				display:block
				width:100%
				height:50px
				line-height:50px
				margin-top:30px
				color:$text_color
				font-size:16px
				text-align:center
				box-sizing:border-box
				border:1px solid $text_color
				cursor:pointer
				transition:background 0.3s
				&:hover
					background: $btn_hover_color
			.read_suggest
				color: $text_color
				cursor: pointer
				text-align:center
				&:hover
					color: $text_color_active
					text-decoration: underline
		.suggest_lists
			position: absolute
			top:0
			left:0
			right:0
			bottom:0
			color:$text_color
			.lists_c
				width:100%
				max-width: 400px
				position: absolute
				top: 50px
				left: 50%
				padding:0
				transform: translate3d(-50%,0,0)
				.title
					padding: 25px 0
					display:inline-block
				li
					list-style: none
					.name
						font-size:16px 
						margin-right 10px
						color: $active_color
						font-weight: 500
</style>