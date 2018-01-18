export const __container = () => ({
	position: 'relative',
	width: '100%',
	marginBottom: '0',
	overflow: 'visible',
})

export const __stage = ({ theme }) => ({
	background: theme.colorWhite,
	position: 'relative',
	width: '100%',
	overflow: 'hidden',
})

export const __track = ({
	trackWidth,
	currentOffset,
	slideWidth,
	draggedX,
	settings,
	dragging,
}) => ({
	width: `${trackWidth}`,
	transform: `translateX(${-currentOffset * slideWidth + draggedX}px)`,
	transition: dragging ? 'none' : `transform ${settings.speed / 1000}s ease`,
})

export const __slide = ({ slideWidth, active }) => ({
	position: 'relative',
	display: 'inline-block',
	outline: 'none',
	width: `${slideWidth}`,
	zIndex: '1',
	extend: {
		condition: active === true,
		style: {
			cursor: 'pointer',
		},
	},
})
