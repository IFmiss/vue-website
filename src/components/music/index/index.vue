<template>
  <div class="index">
		<div class="select_button">
  			<span class="todo_btn playing_btn">正在播放</span>
  			<span class="todo_btn sheet_btn">歌单列表</span>
  			<router-link tag="a" to="/music/search">
  				<span class="todo_btn search_btn">搜索列表</span>
  			</router-link>
  		</div>
  		<div class="list_content">
  			<div class="music_list_title border-1px">
  				<span class="music_index"></span>
  				<span class="music_name">歌曲</span>
  				<span class="music_singer">歌手</span>
  				<span class="music_zhuanji">专辑</span>
  				<span class="music_duration">时长</span> 
  			</div>
  			<div class="music_list_content">
  				<div class="music_list border-1px" v-if="musiclist" v-for="(list, index) in musiclist" :key="list.id" :data-musicid="list.id" :data-pic="list.al.picUrl" @click="clickPlayList(list.id, list.al.picUrl, getMusicDurationType(list.dt),index)">
  					<span class="music_index">
  						<span v-show="currentMusic.index !== index">{{index + 1}}</span>
  						<img v-show="currentMusic.index === index" src="static/wave.gif" alt="未曾遗忘的青春">
  					</span>
  					<div class="music_name">
  						<span class="span_name">{{list.name}}</span>
  						<div class="hover_menu"></div>
  					</div>
	  				<span class="music_singer" v-if="list.ar">{{list.ar[0].name}}</span>
	  				<span class="music_zhuanji" v-if="list.al">{{list.al.name}}</span>
	  				<span class="music_duration">{{getMusicDurationType(list.dt)}}</span>
  				</div>
  			</div>
  		</div>
  </div>
</template>
<script>
  import store from './../../store'
  export default {
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
	@import '../../common/response.css'
	@import '../../common/stylus/global.styl'
	@import '../../common/stylus/style.styl'
</style>
