const globalStore = {
	state: {
		globalInfo: {
			// 路由的背景色 全屏状态下
			contentInfo: {
				opacity: '0.0',
				bgcolor: 'rgb(0, 0, 0)'
			}
		},
		isHigher768: false,
		showBingImage: true
	},
	getters: {
		getGlobalInfo: state => state.globalInfo,
		getIsHigher768: state => state.isHigher768,
		getShowBingImage: state => state.showBingImage
	},
	mutations: {
		setGlobalInfo (state, obj) {
			state.globalInfo = obj.data
		},
		setIsHigher768 (state, obj) {
			state.isHigher768 = obj.data
		},
		setShowBingImage  (state, obj) {
			state.showBingImage = obj.data
		}
	},
	actions: {
		set_GlobalInfo ({commit}, obj) {
			commit('setGlobalInfo', obj)
		},
		set_ShowBingImage ({commit}, obj) {
			commit('setShowBingImage', obj)
		}
	}
}

export default globalStore
