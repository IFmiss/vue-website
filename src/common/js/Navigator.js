// 浏览器相关方法
export const Navigator = {
	deviceVersion () {
		const u = navigator.userAgent
		const app = navigator.appVersion
		return {		// 移动终端浏览器版本信息
			userAgent: u,
			appVersion: app,
			trident: u.includes('Trident'),	 // IE内核
			presto: u.includes('Presto'), 	// opera内核
			webKit: u.includes('AppleWebKit'), 	// 苹果、谷歌内核
			gecko: u.includes('Gecko') && !u.includes('KHTML'), 	// 火狐内核
			mobile: !!u.match(/AppleWebKit.*Mobile/i) || !!u.match(/MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE/),   // 是否为移动终端
			ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), 	// ios终端
			android: u.includes('Android') || u.includes('Linux'), 	// android终端或者uc浏览器
			iPhone: u.includes('iPhone') || u.includes('Mac'), 	// 是否为iPhone或者QQHD浏览器
			iPad: u.includes('iPad'), 	// 是否iPad
			webApp: !u.includes('Safari'), 	// 是否web应该程序，没有头部与底部,
			language: (navigator.browserLanguage || navigator.language).toLowerCase()	// 浏览器语言
			// audroidVersion: u.substr(u.indexOf('Android') + 8, 3),
			// iosVersion: u.substr(u.indexOf('ios') + 8, 3)
		}
	}
}
