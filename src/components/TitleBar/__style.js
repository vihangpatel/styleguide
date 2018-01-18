import { padding } from 'polished'

export const __outerBox = props => ({
	width: '100%',
	display: 'flex',
	justifyContent: 'space-around',
	backgroundColor: props.theme.lightGray,
	overflow: 'auto',
	height: 43,
	// position: props.abs ? 'absolute' : 'initial',
	...props.theme.regularBaseFont,
})

export const __title = props => ({
	color: props.theme.colorGrayDark,
	fontSize: props.theme.fontSize.large,
	...padding(12, 0),
	...props.theme.regularBaseFont,
	userSelect: 'none',
	flex: '0.7',
	paddingLeft: '10px',
	textAlign: 'left',
})

export const __buttonRight = () => ({
	width: '30%',
	textAlign: 'right',
	...padding(0, 5),
	alignSelf: 'center',
	flex: '0.3',
	paddingRight: '10px',
	'& button': {
		...padding(3, 20),
	},
})
