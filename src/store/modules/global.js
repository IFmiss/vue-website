const globalStore = {
	state: {
		globalInfo: {
			// 路由的背景色 全屏状态下
			contentInfo: {
				opacity: '0.9',
				bgcolor: 'rgb(7, 17, 27)',
				type: 'radial-gradient-ellipse'
			},
			isHigher768: false,
			showBingImage: true
		},
		place: {},
		weather: {},
		showloading: true,
		musicRouter: '/music/sheet/124995419',
		host: process.env.HOST || 'http://www.daiwei.org',
		userInfo: null
	},
	getters: {
		getGlobalInfo: state => state.globalInfo,
		getPlace: state => state.place,
		getShowLoading: state => state.showloading,
		getWeatherInfo: state => state.weather,
		getMusicRouter: state => state.musicRouter,
		getUserInfo: state => state.userInfo
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
		setMaskType (state, obj) {
			state.globalInfo.contentInfo.type = obj.data
		},
		setPlace (state, obj) {
			state.place = obj.data
		},
		setShowLoading (state, obj) {
			state.showloading = obj.data
		},
		setWeather (state, obj) {
			state.weather = obj.data
		},
		setMusicRouter (state, obj) {
			state.musicRouter = obj.data
		},
		setUserInfo (state, obj) {
			state.userInfo = obj.data
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
		set_MaskType ({commit}, obj) {
			commit('setMaskType', obj)
		},
		set_Place ({commit}, obj) {
			commit('setPlace', obj)
		},
		set_ShowLoading ({commit}, obj) {
			commit('setShowLoading', obj)
		},
		set_Weather ({commit}, obj) {
			commit('setWeather', obj)
		},
		set_MusicRouter ({commit}, obj) {
			commit('setMusicRouter', obj)
		},
		set_UserInfo ({commit}, obj) {
			commit('setUserInfo', obj)
		}
	}
}

export default globalStore
