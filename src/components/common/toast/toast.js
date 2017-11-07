const Toast = {
	showToast: false,
	showToastNew: null,
	time: null,  	// 定时器
	install (Vue, options) {
		let opt = {
			text: 'Hello World',	// 默认文案
			type: 'bottom',   // 默认显示位置
			duration: 3000,     // 持续时间
			background: 'rgba(0,0,0,0.5)'   // 默认背景色
		}
		for (let property in options) {
			opt[property] = options[property]  // 使用 options 的配置
		}
		// Vue.component('Toast', MyToast)
		Vue.prototype.$toast = (obj, callBack) => {
			if (typeof obj !== Object) {
				opt.text = obj || 'Hello World'
			}
			for (let property in obj) {
				opt[property] = obj[property]  // 使用 options 的配置
			}
			if (Toast.showToast) {
				// 如果toast还在，则不再执行
				clearTimeout(Toast.time)
				Toast.showToast = false
				document.body.removeChild(Toast.showToastNew.$mount().$el)
				Toast.showToastNew = null
			}
			if (!Toast.showToastNew) {
				let ToastT = Vue.extend({     // 1、创建构造器，定义好提示信息的模板
					template: '<transition name=fade-up><div class="vue-toast ' + opt.type + '" style="background:' + opt.backgoround + '" v-show="isShow">' + opt.text + '</div></transition>',
					data () {
						return {
							isShow: Toast.showToast
						}
					}
				})
				Toast.showToastNew = new ToastT()  // 2、创建实例，挂载到文档以后的地方
				let tpl = Toast.showToastNew.$mount().$el
				document.body.appendChild(tpl)
				Toast.showToastNew.isShow = Toast.showToast = true
			}
			Toast.time = setTimeout(function () {
				Toast.showToastNew.isShow = Toast.showToast = false
			}, opt.duration)
			if (typeof callBack === 'function') {
				callBack()
			}
		}
	}
}
export default Toast
