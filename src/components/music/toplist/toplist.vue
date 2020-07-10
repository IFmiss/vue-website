<template>
  <div class="music_toplist container">
		<p class="toplist_title">收藏的歌单</p>
		<div class="toplist_content dw-boot-col-lg-12">
			<div class="toplist_l dw-boot-col-lg-2 dw-boot-col-md-3 dw-boot-col-sm-4 dw-boot-col-xs-4">
				<div class="toplist_detail" @click.stop="openTopList($event)" data-id="124995419" title="未曾遗忘的青春的歌单">
					<img src="https://w1.daiwei.site/web_v2/bg/657952152722629515.jpg" alt="日本Oricon周榜">
				</div>
			</div>
			<div class="toplist_l dw-boot-col-lg-2 dw-boot-col-md-3 dw-boot-col-sm-4 dw-boot-col-xs-4">
				<div class="toplist_detail" @click.stop="openTopList($event)" data-id="2179377798" title="程序员必备，带上耳机代码就是全世界">
					<img src="https://p3.music.126.net/IRqeexYedmfzxkaXdL0sFQ==/109951163241741763.jpg?param=200y200" alt="程序员必备，带上耳机代码就是全世界">
				</div>
			</div>
		</div>
		<p class="toplist_title">热门歌单</p>
		<div class="toplist_content dw-boot-col-lg-12" v-if="top_list_hot">
			<div class="toplist_l dw-boot-col-lg-2 dw-boot-col-md-3 dw-boot-col-sm-4 dw-boot-col-xs-4" v-for="(item,index) in top_list_hot">
				<div class="toplist_detail" @click.stop="openTopList($event)" :data-id="item.id" :title="item.name">
					<img v-lazy="(item.coverImgUrl).replace('.jpg','?param=250y250')" alt="日本Oricon周榜">
				</div>
			</div>
		</div>
  	<p class="toplist_title">网易音乐排行榜</p>
  	<div class="toplist_content dw-boot-col-lg-12">
			<div class="toplist_l dw-boot-col-lg-2 dw-boot-col-md-3 dw-boot-col-sm-4 dw-boot-col-xs-4">
				<div class="toplist_detail" @click.stop="openTopList($event)" data-id="3779629" title="云音乐新歌榜，每天更新">
					<img src="https://p3.music.126.net//N2HO5xfYEqyQ8q6oxCw8IQ==//18713687906568048.jpg?param=250y250" alt="云音乐新歌榜">
				</div>
			</div>
			<div class="toplist_l dw-boot-col-lg-2 dw-boot-col-md-3 dw-boot-col-sm-4 dw-boot-col-xs-4">
				<div class="toplist_detail" @click.stop="openTopList($event)" data-id="19723756" title="云音乐飙升榜，每天更新">
					<img src="https://p1.music.126.net/DrRIg6CrgDfVLEph9SNh7w==/18696095720518497.jpg?param=250y250" alt="云音乐飙升榜">
				</div>
			</div>
			<div class="toplist_l dw-boot-col-lg-2 dw-boot-col-md-3 dw-boot-col-sm-4 dw-boot-col-xs-4">
				<div class="toplist_detail" @click.stop="openTopList($event)" data-id="3778678" title="云音乐热歌榜，每周四更新">
					<img src="https:\/\/p3.music.126.net\/GhhuF6Ep5Tq9IEvLsyCN7w==\/18708190348409091.jpg?param=250y250" alt="云音乐热歌榜">
				</div>
			</div>
			<div class="toplist_l dw-boot-col-lg-2 dw-boot-col-md-3 dw-boot-col-sm-4 dw-boot-col-xs-4">
				<div class="toplist_detail" @click.stop="openTopList($event)" data-id="10520166" title="云音乐电音榜，每周五更新">
					<img src="https://p1.music.126.net/4mh2HWH-bd5sRufQb-61bg==/3302932937414659.jpg?param=250y250" alt="云音乐电音榜">
				</div>
			</div>
			<div class="toplist_l dw-boot-col-lg-2 dw-boot-col-md-3 dw-boot-col-sm-4 dw-boot-col-xs-4">
				<div class="toplist_detail" @click.stop="openTopList($event)" data-id="180106" title="UK排行榜">
					<img src="https:\/\/p3.music.126.net\/VQOMRRix9_omZbg4t-pVpw==\/18930291695438269.jpg?param=250y250" alt="UK排行榜周榜">
				</div>
			</div>
			<div class="toplist_l dw-boot-col-lg-2 dw-boot-col-md-3 dw-boot-col-sm-4 dw-boot-col-xs-4">
				<div class="toplist_detail" @click.stop="openTopList($event)" data-id="71385702" title="云音乐ACG音乐榜，每周四更新">
					<img src="https://p1.music.126.net/vttjtRjL75Q4DEnjRsO8-A==/18752170813539664.jpg?param=250y250" alt="云音乐ACG音乐榜">
				</div>
			</div>
			<div class="toplist_l dw-boot-col-lg-2 dw-boot-col-md-3 dw-boot-col-sm-4 dw-boot-col-xs-4">
				<div class="toplist_detail" @click.stop="openTopList($event)" data-id="60198" title="云音乐ACG音乐榜，每周三更新">
					<img src="https://p1.music.126.net/EBRqPmY8k8qyVHyF8AyjdQ==/18641120139148117.jpg?param=250y250" alt="美国Billboard周榜">
				</div>
			</div>
			<div class="toplist_l dw-boot-col-lg-2 dw-boot-col-md-3 dw-boot-col-sm-4 dw-boot-col-xs-4">
				<div class="toplist_detail" @click.stop="openTopList($event)" data-id="60131" title="日本Oricon周榜，每周三更新">
					<img src="https://p1.music.126.net/Rgqbqsf4b3gNOzZKxOMxuw==/19029247741938160.jpg?param=250y250" alt="日本Oricon周榜">
				</div>
			</div>
		</div>
  </div>
</template>
<script>
  import fecth from 'utils/fecth.js'
  // import store from '../../../store'
  // import musicApi from './../music.js'
  // import axios from 'axios'
  // import qs from 'qs'
  export default {
  	data () {
  		return {
  			// musicInfo: {},
  			currentMusic: {},
  			params: this.$route.params,
  			currentMusicLrcIndex: 0,
  			top_list_all: {
				0: ['云音乐新歌榜', '/discover/toplist?id=3779629'],
				1: ['云音乐热歌榜', '/discover/toplist?id=3778678'],
				2: ['网易原创歌曲榜', '/discover/toplist?id=2884035'],
				3: ['云音乐飙升榜', '/discover/toplist?id=19723756'],
				4: ['云音乐电音榜', '/discover/toplist?id=10520166'],
				5: ['UK排行榜周榜', '/discover/toplist?id=180106'],
				6: ['美国Billboard周榜', '/discover/toplist?id=60198'],
				7: ['KTV嗨榜', '/discover/toplist?id=21845217'],
				8: ['iTunes榜', '/discover/toplist?id=11641012'],
				9: ['Hit FM Top榜', '/discover/toplist?id=120001'],
				10: ['日本Oricon周榜', '/discover/toplist?id=60131'],
				11: ['韩国Melon排行榜周榜', '/discover/toplist?id=3733003'],
				12: ['韩国Mnet排行榜周榜', '/discover/toplist?id=60255'],
				13: ['韩国Melon原声周榜', '/discover/toplist?id=46772709'],
				14: ['中国TOP排行榜(港台榜)', '/discover/toplist?id=112504'],
				15: ['中国TOP排行榜(内地榜)', '/discover/toplist?id=64016'],
				16: ['香港电台中文歌曲龙虎榜', '/discover/toplist?id=10169002'],
				17: ['华语金曲榜', '/discover/toplist?id=4395559'],
				18: ['中国嘻哈榜', '/discover/toplist?id=1899724'],
				19: ['法国 NRJ EuroHot 30周榜', '/discover/toplist?id=27135204'],
				20: ['台湾Hito排行榜', '/discover/toplist?id=112463'],
				21: ['Beatport全球电子舞曲榜', '/discover/toplist?id=3812895']
			},
			top_list_hot: {}
  		}
  	},
  	props: {
  		lrccontent: {}
  	},
  	methods: {
  		openTopList (e) {
  			const id = e.target.getAttribute('data-id')
  			this.$router.push({name: 'musicindex', params: {id: id}})
  		},
  		getTopList () {
  			var url = 'https://www.daiwei.site/web_v2/server/music.php?inAjax=1&do=albums'
  			fecth.get(url).then((res) => {
  				this.top_list_hot = res.data.playlists
  			}, (err) => {
  				console.log(err)
  			})
  		}
  	},
  	computed: {
  	},
  	watch: {
  		'$route' (to, from) {
  			this.params = this.$route.params
  		}
  	},
  	mounted () {
  		this.getTopList()
  	}
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
	@import '~common/stylus/global.styl'
	@import '~common/stylus/border-1px/index.styl'
	.music_toplist
		// background:red
		overflow:auto
		.toplist_title
			font-size:18px
			color:$text_color
		.toplist_content
			position:relative
			box-sizing: border-box
			display: table
			overflow: scroll
			.toplist_l
				padding: 30px
				box-sizing:border-box
				.toplist_detail
					height:auto
					cursor:pointer
					position:relative
					&:after
						content:''
						position:absolute
						top:0
						left:0
						width:100%
						height:100%
						background:url('../../../../static/coverall.png')
						background-position:0 0
						background-size: 272%
					&:before
						content:attr(title)
						position:absolute
						bottom:0
						right:0
						left:0
						width:100%
						height:30px
						line-height:30px
						text-overflow:ellipsis
						padding:0 5px
						box-sizing:border-box
						white-space:nowrap
						overflow:hidden
						background:rgba(0,0,0,0.3)
						color:#fff
						font-size:12px
					img
						display:block
						width:100%
						height:auto
					.bg_list{
						display:block
						width:100%
						height:0
						padding-top:100%
					}
			@media screen and (max-width: 1550px) 
				.toplist_l
					padding: 15px
			@media screen and (max-width: 768px) 
				.toplist_l
					padding: 10px
</style>
