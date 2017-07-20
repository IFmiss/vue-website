const fixedimage = {
	state: {
		fixedImageInfo: {}
	},
	getters: {
		getFixedImageInfo: state => state.fixedImageInfo
	},
	mutations: {
		setFixedImageInfo (state, obj) {
			state.fixedImageInfo = obj.data
		}
	},
	actions: {
		set_FixedImageInfo ({commit}, obj) {
			commit('setFixedImageInfo', obj)
		}
	}
}

export default fixedimage
