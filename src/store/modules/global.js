const globalStore = {
	state: {
		globalInfo: {
			contentInfo: {
				opacity: '0.2',
				bgcolor: 'rgb(0, 0, 0)'
			}
		},
		isHigher768: false
	},
	getters: {
		getGlobalInfo: state => state.globalInfo,
		getIsHigher768: state => state.getIsHigher768
	},
	mutations: {
		setGlobalInfo (state, obj) {
			state.globalInfo = obj.data
		},
		setIsHigher768 (state, obj) {
			state.isHigher768 = obj.data
		}
	},
	actions: {
		set_GlobalInfo ({commit}, obj) {
			commit('setGlobalInfo', obj)
		}
	}
}

export default globalStore
