export function shallowDiffers(a, b) {
	if ((!a && b) || (!b && a)) return true
	for (const i in a) if (!(i in b)) return true
	for (const i in b) if (a[i] !== b[i]) return true

	return false
}

export default (instance, nextProps, nextState) =>
	shallowDiffers(instance.props, nextProps) ||
	shallowDiffers(instance.state, nextState)
