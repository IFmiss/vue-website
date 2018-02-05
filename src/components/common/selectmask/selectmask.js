// type 是类型    data 是通用设置 主要是控制颜色 和透明度
export default function (type, data) {
	if (type === 'default') {
		return {
			background: data.contentInfo.bgcolor,
			opacity: data.contentInfo.opacity
		}
	}
	if (type === 'radial-gradient-ellipse') {
		return {
			background: `-webkit-radial-gradient(50% 50%,ellipse closest-corner,rgba(0,0,0,0) 10%, ${data.contentInfo.bgcolor} 90%)`,
			opacity: data.contentInfo.opacity
		}
	}

	if (type === 'linear-gradient-toptobottom') {
		return {
			background: `-webkit-linear-gradient(90deg, rgba(0,0,0,0) 0%, ${data.contentInfo.bgcolor} 100%)`,
			opacity: data.contentInfo.opacity
		}
	}

	if (type === 'linear-gradient-bottomtotop') {
		return {
			background: `-webkit-linear-gradient(270deg, rgba(0,0,0,0) 0%, ${data.contentInfo.bgcolor} 100%)`,
			opacity: data.contentInfo.opacity
		}
	}

	// top right to left bottom
	if (type === 'linear-gradient-trtolb') {
		return {
			background: `-webkit-linear-gradient(45deg, ${data.contentInfo.bgcolor} 0%, rgba(0,0,0,0) 50%, ${data.contentInfo.bgcolor} 100%)`,
			opacity: data.contentInfo.opacity
		}
	}

	if (type === 'cut-lefttoright') {
		return {
			background: `-webkit-linear-gradient(45deg, ${data.contentInfo.bgcolor} 0%, rgba(0,0,0,0) 50%, ${data.contentInfo.bgcolor} 50%)`,
			opacity: data.contentInfo.opacity
		}
	}
}
