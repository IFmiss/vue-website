const audio = {
	state: {
		currentAudio: {
			url: '',
			duration: '',
			picurl: ''
		},
		audioEle: '',
		musicList: {},
		musicSearchList: {}
	},
	getters: {
		getCurrentAudio: state => state.currentAudio,
		getAudioEle: state => state.audioEle,
		getMusicList: state => state.musicList,
		getMusicSearchList: state => state.musicSearchList
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
		}
	}
}

export default audio
