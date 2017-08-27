const audio = {
	state: {
		currentAudio: {
			url: '',
			duration: '',
			picurl: ''
		},
		audioEle: '',
		// 音乐显示列表  其他列表都要把内容赋值给他 才能可以显示内容
		musicList: {},
		// 搜索列表
		musicSearchList: {},
		// 歌单列表
		musicSheetList: {},
		// 播放列表
		musicPlayList: {},
		musicCollectList: [{
			id: 1,
			url: 'aaaa',
			dt: '222',
			dl: 'asdasd'
		}]
	},
	getters: {
		getCurrentAudio: state => state.currentAudio,
		getAudioEle: state => state.audioEle,
		getMusicList: state => state.musicList,
		getMusicSearchList: state => state.musicSearchList,
		getMusicSheetList: state => state.musicSheetList,
		getMusicPlayList: state => state.musicPlayList,
		getMusicCollectList: state => state.musicCollectList
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
		}
	}
}

export default audio
