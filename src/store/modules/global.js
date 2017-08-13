const globalStore = {
	state: {
		globalInfo: {
			// 路由的背景色 全屏状态下
			contentInfo: {
				opacity: '0.3',
				bgcolor: 'rgb(0, 0, 0)'
			},
			isHigher768: false,
			showBingImage: true
		},
		place: {}
	},
	getters: {
		getGlobalInfo: state => state.globalInfo,
		getPlace: state => state.place
	},
	mutations: {
		setGlobalInfo (state, obj) {
			state.globalInfo = obj.data
		},
		setIsHigher768 (state, obj) {
			state.globalInfo.isHigher768 = obj.data
		},
		setShowBingImage (state, obj) {
			state.globalInfo.showBingImage = obj.data
		},
		setGlobalBgColor (state, obj) {
			state.globalInfo.contentInfo.bgcolor = obj.data
		},
		setGlobaBglColorOpacity (state, obj) {
			state.globalInfo.contentInfo.opacity = obj.data
		},
		setPlace (state, obj) {
			state.place = obj.data
		}
	},
	actions: {
		set_GlobalInfo ({commit}, obj) {
			commit('setGlobalInfo', obj)
		},
		set_ShowBingImage ({commit}, obj) {
			commit('setShowBingImage', obj)
		},
		set_GlobaBglColor ({commit}, obj) {
			commit('setGlobalBgColor', obj)
		},
		set_GlobaBglColorOpacity ({commit}, obj) {
			commit('setGlobaBglColorOpacity', obj)
		},
		set_Place ({commit}, obj) {
			commit('setPlace', obj)
		}
	}
}

export default globalStore
