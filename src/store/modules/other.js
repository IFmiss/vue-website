const otherInfo = {
	state: {
		versionlist: {}
	},
	getters: {
		getVersionList: state => {
			return state.versionlist
		}
	},
	mutations: {
		setVersionList (state, obj) {
			state.versionlist = obj.data
		}
	},
	actions: {
		set_VersionList ({commit}, obj) {
			commit('setVersionList', obj)
		}
	}
}

export default otherInfo
