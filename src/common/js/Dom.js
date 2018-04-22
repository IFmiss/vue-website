export function hasClass (el, className) {
	let reg = new RegExp('(^|\\s)' + className + '(\\s|$)')
	return reg.test(el.className)
}

export function addClass (el, className) {
	if (hasClass(el, className)) {
		return
	}

	let newClass = el.className.split(' ')
	newClass.push(className)
	el.className = newClass.join(' ')
}

export function removeClass (el, className) {
	if (hasClass(el, className)) {
		let newClass = el.className.split(' ')
		newClass.forEach((value, index, array) => {
			if (value === className) {
				newClass.splice(index, 1)
			}
		})
		el.className = newClass.join(' ')
	}
}
