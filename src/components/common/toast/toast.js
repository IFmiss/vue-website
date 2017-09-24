// toast.js
import Vue from 'vue'
import MyToast from './toast.vue'
// console.log(MyToast)
const Toast = {
	install () {
		// let opt = {
		// 	defaultType: 'bottom',   // 默认显示位置
		// 	duration: 112500         // 持续时间
		// }
		Vue.component('Toast', MyToast)
	}
}
// Toast.install = function (Vue, options) {
// 	let opt = {
// 		defaultType: 'bottom',   // 默认显示位置
// 		duration: 112500         // 持续时间
// 	}
// 	for (let property in options) {
// 		opt[property] = options[property]  // 使用 options 的配置
// 	}
//     Vue.prototype.$toast = (tips, type) => {
// 		if (type) {
// 			opt.defaultType = type
// 		}
// 		let ToastTpl = Vue.extend({     // 1、创建构造器，定义好提示信息的模板
// 			data () {
// 				return {
// 					typeClass: opt.defaultType
// 				}
// 			},
// 			template: '<div class="vue-toast toast-' + this.typeClass + '">' + tips + '</div>'
//         })
// 		let tpl = new ToastTpl().$mount().$el  // 2、创建实例，挂载到文档以后的地方
// 		document.body.appendChild(tpl)     // 3、把创建的实例添加到body中
// 		setTimeout(function () {        // 4、延迟2.5秒后移除该提示
//             document.body.removeChild(tpl)
//         }, opt.duration)
//     }
//     ['bottom', 'center', 'top'].forEach(type => {
// 		Vue.prototype.$toast[type] = (tips) => {
// 			return Vue.prototype.$toast(tips, type)
// 		}
// 	})
// }
export default Toast
