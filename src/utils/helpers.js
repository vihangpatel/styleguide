import LogHelper from './logger'

const logger = LogHelper('design-framework:helpers')

const supportsPassive = () => {
	let isPassive = false
	const opts = Object.defineProperty({}, 'passive', {
		// eslint-disable-next-line
		get: () => {
			isPassive = true
		},
	})
	window.addEventListener('test', null, opts)

	return isPassive
}

const hrefHandler = href => () => {
	if (typeof href === 'function') href()
	else if (typeof href === 'string') {
		if (typeof window !== 'undefined') {
			logger.log('Going to redirect', href)
			window.location.href = href
		}
	} else return null
}

const getTabbable = element => {
	const tabbableElements = [
		'a[href]',
		'link[href]',
		'button',
		'input:not([type="hidden"])',
		'select',
		'textarea',
		'[tabIndex]:not([tabIndex="-1"])',
	]

	return Array.prototype.slice.call(
		element.querySelectorAll(tabbableElements.join(', ').trim())
	)
}

export { supportsPassive, hrefHandler, getTabbable }
