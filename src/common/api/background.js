import fecth from 'utils/fecth.js'
import store from 'store'
import Global from 'common/js/global.js'
export function getBingInfo (url, index = 0) {
	return new Promise((resolve, reject) => {
		fecth.get(url).then((res) => {
			let imageInfo = {
				type: 'bing',
				url: 'http://www.bing.com' + res.data.url,
				title: res.data.title,
				disc: res.data.disc,
				date: Global.utils.formatDate(new Date(), 'yyyy-MM-dd hh:mm:ss'),
				index: index
			}
			store.dispatch({
				type: 'set_FixedImageInfo',
				data: imageInfo
			})
			localStorage.setItem('fixedImageBg', JSON.stringify(imageInfo))
			resolve(imageInfo)
		}, (err) => {
			alert(err)
			reject(err)
		})
	})
}

// 我自己设置的背景图是有其他字段的
// type 类型  url 图片地址  title 图片title  disc 图片disc  date 图片date  musicUrl  配置音乐的地址  musicName配置音乐的名字   index 索引值
export function getMineBgByIndex (url, index) {
	return new Promise((resolve, reject) => {
		fecth.post(url, {index: index}).then((res) => {
			let imageInfo = {
				type: 'home',
				url: res.data.url,
				title: res.data.title,
				disc: res.data.disc,
				date: res.data.date,
				musicUrl: res.data.musicUrl,
				musicName: res.data.musicName,
				index: index
			}
			store.dispatch({
				type: 'set_FixedImageInfo',
				data: imageInfo
			})
			localStorage.setItem('fixedImageBg', JSON.stringify(imageInfo))
			resolve(imageInfo)
		}, (err) => {
			alert(err)
			reject(err)
		})
	})
}
