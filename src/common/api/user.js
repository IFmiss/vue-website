import fecth from 'utils/fecth.js'
// import store from 'store'
// import Global from 'common/js/global.js'
export function collectMusic (url, options) {
	return new Promise((resolve, reject) => {
		fecth.post(url, options).then((res) => {
			resolve(res)
		}, (err) => {
			reject(err)
		})
	})
}

export function getCollectMusic (url, options) {
	return new Promise((resolve, reject) => {
		fecth.post(url, options).then((res) => {
			resolve(res)
		}, (err) => {
			reject(err)
		})
	})
}
