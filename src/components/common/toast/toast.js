// toast.js
// import Vue from 'vue'
// import MyToast from './toast.vue'
// console.log(MyToast)
const Toast = {
	install (Vue, options) {
		let opt = {
			text: '你好',	// 默认文案
			type: 'bottom',   // 默认显示位置
			duration: 3000         // 持续时间
		}
		for (let property in options) {
			opt[property] = options[property]  // 使用 options 的配置
		}
		// Vue.component('Toast', MyToast)
		Vue.prototype.$toast = (obj) => {
			for (let property in obj) {
				opt[property] = obj[property]  // 使用 options 的配置
			}
			if (document.getElementsByClassName('vue-toast').length) {
				// 如果toast还在，则不再执行
				return
			}
			let ToastTpl = Vue.extend({     // 1、创建构造器，定义好提示信息的模板
				template: '<div class="vue-toast ' + opt.type + '" v-show="isShow">' + opt.text + '</div>',
				data () {
					return {
						isShow: true
					}
				}
			})
			let tpl = new ToastTpl().$mount().$el  // 2、创建实例，挂载到文档以后的地方

			document.body.appendChild(tpl)
			setTimeout(function () {
				document.body.removeChild(tpl)
			}, opt.duration)
		}
	}
}
export default Toast
