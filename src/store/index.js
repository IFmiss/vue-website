import Vue from 'vue'
import Vuex from 'vuex'
import Fixedimage from './modules/fixedimage.js'
import GlobalInfo from './modules/global.js'

Vue.use(Vuex)

const store = new Vuex.Store({
modules: {
		fixedimage: Fixedimage,
		globalInfo: GlobalInfo
	}
})

export default store
