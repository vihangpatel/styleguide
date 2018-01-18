import { margin, padding } from 'polished'
import { createComponent } from 'react-fela'

const __overlay = () => ({
	width: '100%',
	height: '100%',
	background: '#333',
	opacity: 0.8,
	position: 'fixed',
	top: 0,
	left: 0,
	zIndex: 1000,
})

const __container = ({ verticalPosition, popupMargin = 0 }) => ({
	position: 'fixed',
	left: '50%',
	transform: 'translateX(-50%)',
	flexDirection: 'column',
	width: `calc(100% - ${popupMargin}px)`,
	maxWidth: 480,
	zIndex: 1001,
	background: '#fff',
	extend: [
		{
			condition: verticalPosition === 'top',
			style: {
				top: 0,
			},
		},
		{
			condition: verticalPosition === 'middle',
			style: {
				top: '50%',
				transform: 'translateX(-50%) translateY(-50%)',
			},
		},
		{
			condition: verticalPosition === 'bottom',
			style: {
				bottom: '0',
			},
		},
	],
})

const __header = ({ theme }) => ({
	...theme.mediumBaseFont,
	fontSize: 16,
	display: 'flex',
	color: '#333',
	minHeight: 50,
	borderBottom: '1px solid #ccc',
	...padding(10),
	justifyContent: 'space-between',
	alignItems: 'center',
	'& p': {
		textAlign: 'center',
		flex: 1,
		margin: 0,
	},
})

const __content = ({ theme }) => ({
	fontSize: 16,
	minHeight: 100,
	color: '#868686',
	display: 'flex',
	...theme.mediumBaseFont,
	alignItems: 'center',
	justifyContent: 'center',
	...margin(10),
})

const __footer = () => ({
	display: 'flex',
	flexDirection: 'row',
	minHeight: 50,
	color: '#000',
	textAlign: 'center',
	...margin(10),
	'& button:not(:last-child)': {
		marginRight: 10,
	},
})

const __button = ({ theme }) => ({
	...theme.mediumBaseFont,
	width: '100%',
	border: 'none',
	borderRadius: 0,
	textAlign: 'center',
	background: '#0076FF',
	color: '#fff',
	...padding(15, 0),
})

const __iconWrapper = () => ({
	width: 15,
	height: 15,
	display: 'flex',
	flex: 0,
})

const __moveUpKeyframe = ({ verticalPosition }) => {
	const transform = []

	switch (verticalPosition) {
		case 'middle':
			transform.push('translateX(-50%) translateY(-40%)')
			transform.push('translateX(-50%) translateY(-50%)')
			break
		case 'top':
		case 'bottom':
			transform.push('translateX(-50%) translateY(10%)')
			transform.push('translateX(-50%) translateY(0)')
			break
		default:
			break
	}

	return {
		'0%': {
			opacity: '0',
			transform: transform[0],
		},
		'100%': {
			opacity: '1',
			transform: transform[1],
		},
	}
}

const __moveDownKeyframe = ({ verticalPosition }) => {
	const transform = []

	switch (verticalPosition) {
		case 'middle':
			transform.push('translateX(-50%) translateY(-50%) scale(1)')
			transform.push('translateX(-50%) translateY(-40%) scale(1)')
			transform.push('translateX(-50%) translateY(-40%) scale(0)')
			break
		case 'top':
		case 'bottom':
			transform.push('translateX(-50%) translateY(0) scale(1)')
			transform.push('translateX(-50%) translateY(10%) scale(1)')
			transform.push('translateX(-50%) translateY(10%) scale(0)')
			break
		default:
			break
	}

	return {
		'0%': {
			opacity: '1',
			transform: transform[0],
		},
		'99%': {
			opacity: '0',
			transform: transform[1],
		},
		'100%': {
			opacity: '0',
			transform: transform[2],
		},
	}
}

const __fadeInKeyframe = () => ({
	'0%': { opacity: '0' },
	'100%': { opacity: '1' },
})

const __fadeOutKeyframe = () => ({
	'0%': { opacity: '1', transform: 'scale(1)' },
	'99%': { opacity: '0', transform: 'scale(1)' },
	'100%': { opacity: '0', transform: 'scale(0)' },
})

export const __moveUp = ({ verticalPosition }) => ({
	animationName: __moveUpKeyframe({ verticalPosition }),
	animationDuration: '0.2s',
	animationTimingFunction: 'linear',
	animationFillMode: 'forwards',
})

export const __moveDown = ({ verticalPosition }) => ({
	animationName: __moveDownKeyframe({ verticalPosition }),
	animationDuration: '0.2s',
	animationTimingFunction: 'linear',
	animationFillMode: 'forwards',
})

export const __fadeIn = () => ({
	animationName: __fadeInKeyframe(),
	animationDuration: '0.2s',
	animationTimingFunction: 'linear',
	animationFillMode: 'forwards',
})

export const __fadeOut = () => ({
	animationName: __fadeOutKeyframe(),
	animationDuration: '0.2s',
	animationTimingFunction: 'linear',
	animationFillMode: 'forwards',
})

export const Overlay = createComponent(__overlay)
export const Container = createComponent(__container)
export const Content = createComponent(__content)
export const Footer = createComponent(__footer)
export const Header = createComponent(__header)
export const IconWrapper = createComponent(__iconWrapper, 'div', ['onClick'])
export const Button = createComponent(__button, 'button', ['onClick'])
