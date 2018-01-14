export function dragElement (ref) {
	let moveX = 0
	let moveY = 0
	let offsetEleX = 0
	let offsetEleY = 0
	let isDrag = false
	let refWidth = ref.offsetWidth
	let refHeight = ref.offsetHeight
	if (ref) {
		ref.onmousedown = (event) => {
			isDrag = true
			let e = event || window.event
			console.log(e)
			offsetEleX = e.pageX - ref.offsetLeft
			offsetEleY = e.pageY - ref.offsetTop
			console.log(e)
		}

		ref.onmousemove = (event) => {
			if (isDrag) {
				let e = event || window.event
				moveX = e.pageX - offsetEleX
				moveY = e.pageY - offsetEleY
				let maxX = document.documentElement.scrollWidth - refWidth
				let maxY = document.documentElement.scrollHeight - refHeight
				moveX = Math.min(maxX, Math.max(0, moveX))
				moveY = Math.min(maxY, Math.max(0, moveY))

				ref.style.cssText = 'position:fixed;cursor:move;left:' + moveX + 'px;top:' + moveY + 'px;zIndex:111111111'
			}
		}
		ref.onmouseup = (event) => {
			isDrag = false
		}
	}
}

