import Vue from 'vue'
import Vuex from 'vuex'
import Fixedimage from './modules/fixedimage.js'
import GlobalInfo from './modules/global.js'
import PicList from './modules/pic.js'

Vue.use(Vuex)

const store = new Vuex.Store({
	modules: {
		fixedimage: Fixedimage,
		globalInfo: GlobalInfo,
		picList: PicList
	}
})

export default store
