import { createComponent } from 'react-fela'

const __info = () => ({
	margin: '10px 0px',
	height: '30',
	position: 'relative',
})

const __minMax = ({ position, filledColor, theme, left }) => ({
	...theme.regularBaseFont,
	color: filledColor,
	fontSize: '12',
	position: 'absolute',
	top: '-20',
	transform: 'translateX(4%)',
	right: `${position}%`,
	left: 'auto',
	extend: {
		condition: left,
		style: {
			transform: 'translateX(-3%)',
			left: `${position}%`,
			right: 'auto',
			top: 'auto',
			bottom: '-35',
		},
	},
})

const __division = ({ highlight, position, ...props }) => ({
	width: '2',
	height: '6',
	borderRadius: props.theme.borderRadius,
	backgroundColor: highlight ? '#4CD9AA' : '#D9D9D9',
	position: 'absolute',
	top: '0',
	left: `${position}%`,
	extend: {
		condition: position === 100,
		style: {
			right: 0,
			left: 'auto',
		},
	},
})

const __container = ({ thickness }) => ({
	userSelect: 'none',
	width: '100%',
	height: `${thickness + 10}`,
	position: 'relative',
})

const __line = ({ thickness, color, fillStart, fillWidth }) => ({
	userSelect: 'none',
	width: `${fillWidth}%`,
	height: `${thickness}`,
	backgroundColor: color,
	position: 'absolute',
	top: '50%',
	left: `${fillStart}%`,
	transform: 'translateY(-50%)',
	borderRadius: `${Math.floor(0.5 * thickness)}`,
})

const __handle = ({ thickness, position, dragging }) => ({
	userSelect: 'none',
	cursor: 'pointer',
	width: `${thickness + 15}`,
	height: `${thickness + 15}`,
	border: '1px solid rgba(255, 255, 255, 0.12)',
	borderRadius: '50%',
	boxShadow: `0px ${dragging ? '2px 3px' : '1px 1px'} rgba(0, 0, 0, 0.4)`,
	backgroundColor: '#fff',
	position: 'absolute',
	left: `${position}%`,
	top: '50%',
	transform: `translateX(-50%) translateY(-50%) ${dragging
		? 'scale(1.25)'
		: ''}`,
})

const Container = createComponent(__container)
const Line = createComponent(__line)
const Handle = createComponent(__handle, 'div', [
	'onMouseDown',
	'onTouchStart',
	'data-id',
])
const Info = createComponent(__info)
const MinMax = createComponent(__minMax)
const Division = createComponent(__division)

export { Info, MinMax, Division, Container, Line, Handle }
