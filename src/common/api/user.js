import fecth from 'utils/fecth.js'
// import store from 'store'
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
