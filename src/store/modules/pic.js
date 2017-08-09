const pic = {
	state: {
		piclist: []
	},
	getters: {
		getPicList: state => state.piclist
	},
	mutations: {
		setPicList (state, obj) {
			state.piclist = obj.data
		}
	},
	actions: {
		set_PicList ({commit}, obj) {
			commit('setPicList', obj)
		}
	}
}

export default pic
