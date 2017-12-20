// item 是类型    data 是通用设置 主要是控制颜色 和透明度
export default function (item, data) {
	if (item.type === 'default') {
		return {
			background: data.contentInfo.bgcolor,
			opacity: data.contentInfo.opacity
		}
	}
	if (item.type === 'radial-gradient-ellipse') {
		return {
			background: `-webkit-radial-gradient(50% 50%,ellipse closest-corner,rgba(0,0,0,0) 10%, ${data.contentInfo.bgcolor} 90%)`,
			opacity: data.contentInfo.opacity
		}
	}
	// if (item.type === 'image-old') {
	// 	return {
	// 		background: `url(${item.img})`,
	// 		opacity: data.contentInfo.opacity
	// 	}
	// }
}
