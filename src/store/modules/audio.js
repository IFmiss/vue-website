const audio = {
	state: {
		currentAudio: {
			url: '',
			duration: '',
			picurl: ''
		},
		audioEle: ''
	},
	getters: {
		getCurrentAudio: state => state.currentAudio,
		getAudioEle: state => state.audioEle
	},
	mutations: {
		setCurrentAudio (state, obj) {
			state.currentAudio = obj.data
		},
		setAudioEle (state, obj) {
			state.audioEle = obj.data
		}
	},
	actions: {
		set_CurrentAudio ({commit}, obj) {
			// alert(JSON.stringify(obj.data))
			commit('setCurrentAudio', obj)
		},
		set_AudioEle ({commit}, obj) {
			commit('setAudioEle', obj)
		}
	}
}

export default audio
