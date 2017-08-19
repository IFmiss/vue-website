const audio = {
	state: {
		currentAudio: {
			url: '',
			duration: '',
			picurl: ''
		}
	},
	getters: {
		getCurrentAudio: state => state.currentAudio
	},
	mutations: {
		setCurrentAudio (state, obj) {
			state.currentAudio = obj.data
		}
	},
	actions: {
		set_CurrentAudio ({commit}, obj) {
			commit('setCurrentAudio', obj)
		}
	}
}

export default audio
