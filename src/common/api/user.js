import fecth from 'utils/fecth.js'
import store from 'store'
// import router from 'router'
const LOGIN_INFO = {
	code: 0,
	msg: '用户未登录'
}
// import Global from 'common/js/global.js'
export function fecthPromise (url, options) {
	return new Promise((resolve, reject) => {
		fecth.post(url, options).then((res) => {
			resolve(res)
		}, (err) => {
			reject(err)
		})
	})
}

// 用户验证  有信息则返回信息  否则跳到login
export function todoUserInfo () {
	let loginInfo = store.getters.getUserInfo
	return new Promise((resolve, reject) => {
		if (loginInfo === null) {
			reject(LOGIN_INFO)
    } else {
			resolve(loginInfo)
    }
	})
}
