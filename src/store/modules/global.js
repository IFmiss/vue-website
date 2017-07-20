const globalStore = {
	state: {
		globalInfo: {
			fixedBgInfo: {
				opactity: '0.3',
				bgcolor: 'rgb(51, 102, 153)'
			}
		}
	},
	getters: {
		getGlobalInfo: state => state.globalInfo,
		getFixedBgInfo: state => state.globalInfo.fixedBgInfo
	},
	mutations: {
		setGlobalInfo (state, obj) {
			state.globalInfo = obj.data
		},
		setFixedBgInfo (state, obj) {
			state.globalInfo.fixedBgInfo = obj.data
		}
	},
	actions: {
		set_GlobalInfo ({commit}, obj) {
			commit('setGlobalInfo', obj)
		},
		set_FixedBgInfo ({commit}, obj) {
			commit('setFixedBgInfo', obj)
		}
	}
}

export default globalStore
