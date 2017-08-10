const router = {
	state: {
		showAboutChildrenRouter: true
	},
	getters: {
		getAboutChildrenRouter: state => state.showAboutChildrenRouter
	},
	mutations: {
		setAboutChildrenRouter (state, obj) {
			state.showAboutChildrenRouter = obj.data
		}
	},
	actions: {
		set_AboutChildrenRouter ({commit}, obj) {
			commit('setAboutChildrenRouter', obj)
		}
	}
}

export default router
