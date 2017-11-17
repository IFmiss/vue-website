export const Cookie = {
	// name 为cookie的名字  value 为对应的值  exp 为过期时间  单位为毫秒
	setCookie (name, value, exp) {
		let newExp = exp || 60 * 60 * 2 * 1000   // 默认设置为2个小时的过期时间
		let date = new Date()
		console.log(date)
		date.setTime(date.getTime() + newExp)
		document.cookie = `${name}=${escape(value)};expires=${date.toGMTString()}`
	},
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
	deleteCookie (name) {
		let date = new Date()
		date.setTime(date.getTime() - 1)  // 设置过期了
		if (name) {
			let cookieInfo = Cookie.getCookie(name)
			if (cookieInfo !== null) {
				document.cookie = `${name}=${cookieInfo};expires=${date.toGMTString()}`
			}
		} else {
			let getAllCookies = Cookie.getCookie()
			for (let k in getAllCookies) {
				document.cookie = `${getAllCookies[k].name}=${getAllCookies[k].value};expires=${date.toGMTString()}`
			}
		}
	}
}
