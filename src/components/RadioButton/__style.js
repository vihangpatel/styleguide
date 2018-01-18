import { createComponent } from 'react-fela'
import { padding, margin } from 'polished'

const __slider = ({ size, isEnabled, isOn, fillColor, ...props }) => ({
	position: 'relative',
	userSelect: 'none',
	width: `${size}px`,
	height: `${Math.floor(0.4 * size)}px`,
	borderRadius: `${Math.floor(0.3 * size)}px`,
	backgroundColor: `${
		// eslint-disable-next-line
		isEnabled
			? isOn ? fillColor : 'rgb(204, 204, 204)'
			: props.theme.inputDisabledColor
	}`,
	'> input': {
		zIndex: props.theme.zIndex.level2,
		cursor: `${isEnabled ? 'pointer' : 'default'}`,
		opacity: '0',
		width: `${size}px`,
		height: `${Math.floor(0.55 * size)}px`,
		margin: '0px',
		position: 'absolute',
		top: '50%',
		transform: 'translateY(-50%)',
	},
})

const __handle = ({ size, isEnabled, isOn }) => ({
	position: 'absolute',
	top: '50%',
	left: '0px',
	transform: `translateY(-50%) ${isEnabled && isOn ? 'translateX(85%)' : ''}`,
	width: `${Math.floor(0.55 * size)}px`,
	height: `${Math.floor(0.55 * size)}px`,
	borderRadius: '50%',
	backgroundColor: `${
		isEnabled ? 'rgb(255, 255, 255)' : 'rgb(204, 204, 204)'
	}`,
	border: '1px solid rgba(255, 255, 255, 0.12)',
	boxShadow: '0px 1px 1px rgba(0, 0, 0, 0.24)',
	transition: 'transform 0.1s',
})

const Slider = createComponent(__slider)
const Handle = createComponent(__handle)

export { Slider, Handle }

/* Radio Icon */

export const __label = ({ theme }) => ({
	display: 'inline',
	fontSize: theme.fontSize.l,
	marginBottom: '10',
	marginLeft: '10',
})

export const __input = ({ theme, checked }) => ({
	zIndex: 0,
	border: '1px solid',
	borderColor: checked ? theme.color.azureRadiance : theme.color.doveGray,
	verticalAlign: 'middle',
	fontSize: theme.fontSize.s,
	background: theme.colorWhite,
	color: theme.color.charcoal,
	outline: 'none',
	transition: 'border-color 0.2s ease',
	position: 'relative',
	height: 18,
	width: 18,
	...margin(1, 0, 0),
	padding: 0,
	appearance: 'none',
	borderRadius: '50%',
	'&:focus': {
		borderColor: theme.color.azureRadiance,
		outline: 'none',
	},
	'&::before': {
		content: "''",
		position: 'absolute',
		backgroundColor: checked ? theme.color.azureRadiance : 'transparent',
		transition: 'all 0.2s ease-out',
		borderRadius: '50%',
		height: checked ? 12 : 3,
		width: checked ? 12 : 3,
		top: checked ? 2 : 5,
		left: checked ? 2 : 5,
	},
})
export const __radio = ({ theme }) => ({
	cursor: 'pointer',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'flex-start',
	...padding('20', 0),
	borderBottom: '1px solid #F1F1F1',
	'&:hover input': {
		borderColor: theme.color.azureRadiance,
	},
})

export const __radioGroup = ({ flex }) => ({
	textAlign: 'left',
	verticalAlign: 'middle',
	display: flex ? 'flex' : 'initial',
})
