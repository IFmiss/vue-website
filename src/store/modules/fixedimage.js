const fixedimage = {
	state: {
		fixedImageInfo: {
			index: 0
		},
		fixedBgInfo: {
			opacity: '0.4',
			bgcolor: 'rgb(51, 102, 153)'
		}
	},
	getters: {
		getFixedImageInfo: state => state.fixedImageInfo,
		getFixedBgInfo: state => state.fixedBgInfo,
		getFixedBgIndex: state => state.index
	},
	mutations: {
		setFixedImageInfo (state, obj) {
			state.fixedImageInfo = obj.data
		},
		setFixedBgInfo (state, obj) {
			state.fixedBgInfo = obj.data
		},
		setFixedBgIndex (state, obj) {
			state.index = obj.data
		}
	},
	actions: {
		set_FixedImageInfo ({commit}, obj) {
			commit('setFixedImageInfo', obj)
		},
		set_FixedBgInfo ({commit}, obj) {
			commit('setFixedBgInfo', obj)
		}
	}
}

export default fixedimage
