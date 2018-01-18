import { supportsPassive } from '../../../utils/helpers'

export const convertToPercentage = (val, min, max, precision = 2) =>
	precision === 0
		? Math.round((val - min) / (max - min)) * 100
		: ((val - min) / (max - min)).toFixed(precision) * 100

export const convertFromPercentage = (val, min, max, precision = 2) =>
	precision === 0
		? Math.round(val * (max - min) * 0.01 + min)
		: (val * (max - min) * 0.01 + min).toFixed(precision)

export const addEventListeners = (mouseUp, mouseMove) => {
	document.addEventListener(
		'touchend',
		mouseUp,
		supportsPassive() ? { passive: true, capture: true } : true
	)
	document.addEventListener(
		'mouseup',
		mouseUp,
		supportsPassive() ? { passive: true, capture: true } : true
	)
	document.addEventListener(
		'mousemove',
		mouseMove,
		supportsPassive() ? { passive: true, capture: true } : true
	)
	document.addEventListener(
		'touchmove',
		mouseMove,
		supportsPassive() ? { passive: true, capture: true } : true
	)
}

export const removeEventListeners = (mouseUp, mouseMove) => {
	document.removeEventListener(
		'mouseup',
		mouseUp,
		supportsPassive() ? { passive: true, capture: true } : true
	)
	document.removeEventListener(
		'touchend',
		mouseUp,
		supportsPassive() ? { passive: true, capture: true } : true
	)
	document.removeEventListener(
		'touchmove',
		mouseMove,
		supportsPassive() ? { passive: true, capture: true } : true
	)
	document.removeEventListener(
		'mousemove',
		mouseMove,
		supportsPassive() ? { passive: true, capture: true } : true
	)
}
