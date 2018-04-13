const audio = {
	state: {
		currentAudio: {
			url: '',
			duration: '',
			picurl: '',
			index: 1
		},
		// 音乐的元素
		audioEle: '',
		// 滚动的歌词内容  为了之后的移动
		audioLrcContent: '',
		// lrc的索引   显示歌词使用
		lrcIndex: 0,
		// 当前的音乐时间
		currentTime: '00:00',
		// 当前的时长
		currentD: 0,
		// 音频是否正在播放
		isPlaying: false,
		// 播放模式  	1-列表播放   2-单曲循环    3-随机播放
		playType: 1,
		// 音乐显示列表  其他列表都要把内容赋值给他 才能可以显示内容
		musicList: {},
		// 搜索列表
		musicSearchList: [],
		// 歌单列表
		musicSheetList: {},
		// 播放列表
		musicPlayList: {},
		// 收集歌曲的内容
		musicCollectList: []
	},
	getters: {
		getCurrentAudio: state => state.currentAudio,
		getAudioEle: state => state.audioEle,
		getMusicList: state => state.musicList,
		getMusicSearchList: state => state.musicSearchList,
		getMusicSheetList: state => state.musicSheetList,
		getMusicPlayList: state => state.musicPlayList,
		getMusicCollectList: state => state.musicCollectList,
		getAudioLrcContent: state => state.audioLrcContent,
		getAudiolrcIndex: state => state.lrcIndex,
		getAudioIsPlay: state => state.isPlaying,
		getAudioCurrentTime: state => state.currentTime,
		getAudioCurrentD: state => state.currentD,
		getAudioPlayType: state => state.playType
	},
	mutations: {
		setCurrentAudio (state, obj) {
			state.currentAudio = obj.data
		},
		setAudioEle (state, obj) {
			state.audioEle = obj.data
		},
		setMusicList (state, obj) {
			state.musicList = obj.data
		},
		setMusicSearchList (state, obj) {
			state.musicSearchList = obj.data
		},
		setMusicSheetList (state, obj) {
			state.musicSheetList = obj.data
		},
		setMusicPlayList (state, obj) {
			state.musicPlayList = obj.data
		},
		setMusicCollectList (state, obj) {
			state.musicCollectList = obj.data
		},
		setAudioLrcContent (state, obj) {
			state.audioLrcContent = obj.data
		},
		setAudiolrcIndex (state, obj) {
			state.lrcIndex = obj.data
		},
		setAudioIsPlay (state, obj) {
			state.isPlaying = obj
		},
		setAudioCurrentTime (state, obj) {
			state.currentTime = obj
		},
		setAudioCurrentD (state, obj) {
			state.currentD = obj
		},
		setAudioPlayType (state, obj) {
			state.playType = obj.data
		}
	},
	actions: {
		set_CurrentAudio ({commit}, obj) {
			// alert(JSON.stringify(obj.data))
			commit('setCurrentAudio', obj)
		},
		set_AudioEle ({commit}, obj) {
			commit('setAudioEle', obj)
		},
		set_MusicList ({commit}, obj) {
			commit('setMusicList', obj)
		},
		set_MusicSearchList ({commit}, obj) {
			commit('setMusicSearchList', obj)
		},
		set_MusicSheetList ({commit}, obj) {
			commit('setMusicSheetList', obj)
		},
		set_MusicPlayList ({commit}, obj) {
			commit('setMusicPlayList', obj)
		},
		set_MusicCollectList ({commit}, obj) {
			commit('setMusicCollectList', obj)
		},
		set_AudioCurrentTime ({commit}, obj) {
			commit('setAudioCurrentTime', obj)
		},
		set_AudioCurrentD ({commit}, obj) {
			commit('setAudioCurrentD', obj)
		},
		set_AudioPlayType ({commit}, obj) {
			commit('setAudioPlayType', obj)
		}
	}
}

export default audio
