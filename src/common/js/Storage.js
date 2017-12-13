export const Storage = {
	// 设置Cookie
	// name: 为cookie的名字
	// value: 为对应的值
	// exp: 为过期时间  单位为毫秒   默认设置为2个小时的过期时间
	setCookie (name, value, exp = 60 * 60 * 2 * 1000) {
		let date = new Date()
		date.setTime(date.getTime() + exp)
		document.cookie = `${name}=${escape(value)};expires=${date.toGMTString()}`
	},
	// 获取Cookie
	// name: 为cookie的名字
	getCookie (name) {
		if (name) {
			let reg = new RegExp(`(^| )${name}=([^;]*)(;|$)`)
			let arr = document.cookie.match(reg)
			if (arr) {
				// return arr[2]
				return arr[2]
			} else {
				return null
			}
		} else {
			let getAllCookies = []
			if (document.cookie !== '') {
				let arrCookie = document.cookie.split('; ')
				for (let k in arrCookie) {
					getAllCookies.push({
						name: `${unescape(arrCookie[k].split('=')[0])}`,
						value: `${unescape(arrCookie[k].split('=')[1])}`
					})
				}
				return getAllCookies
			} else {
				return null
			}
		}
	},
	// 删除 Cookie
	// name: 为cookie的名字
	deleteCookie (name) {
		let date = new Date()
		date.setTime(date.getTime() - 1)  // 设置过期了
		if (name) {
			let cookieInfo = Storage.getCookie(name)
			if (cookieInfo !== null) {
				document.cookie = `${name}=${cookieInfo};expires=${date.toGMTString()}`
			}
		} else {
			let getAllCookies = Storage.getCookie()
			for (let k in getAllCookies) {
				document.cookie = `${getAllCookies[k].name}=${getAllCookies[k].value};expires=${date.toGMTString()}`
			}
		}
	}
}
