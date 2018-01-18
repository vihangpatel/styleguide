import { padding } from 'polished'

export const __outerBox = props => ({
	width: '100%',
	display: 'flex',
	justifyContent: 'space-around',
	backgroundColor: props.transparent
		? props.theme.colorTransparent
		: props.theme.colorWhite,
	overflow: 'auto',
	height: props.fixed ? 43 : 'auto',
	position: props.abs ? 'absolute' : 'initial',
	...props.theme.regularBaseFont,
})

export const __tab = props => ({
	cursor: 'pointer',
	userSelect: 'none',
	padding: '12',
	letterSpacing: props.theme.letterSpacing.s,
	fontSize: props.theme.fontSize.m,
	textTransform: 'capitalize',
	color: props.isActive ? props.theme.colorRed : props.theme.colorWhite,
	mobileXs: {
		fontSize: props.theme.fontSize.s,
	},
})

export const __title = props => ({
	color: props.colorGrayDark,
	fontSize: props.theme.fontSize.large,
	...padding(12, 0),
	textAlign: 'center',
	...props.theme.regularBaseFont,
	userSelect: 'none',
	extend: [
		{
			condition: props.buttonProps,
			style: {
				width: '70%',
				textAlign: 'left',
				...padding(12, 50),
			},
		},
		{
			condition: props.titleAlignLeft,
			style: {
				textAlign: 'left',
				...padding(12, 50),
			},
		},
	],
})

export const __buttonRight = () => ({
	width: '30%',
	textAlign: 'right',
	...padding(0, 15),
})

export const __backIcon = () => ({
	width: '16',
	height: '16',
	display: 'flex',
	position: 'absolute',
	top: '50%',
	transform: 'translateY(-7.5px)',
	left: '15',
	cursor: 'pointer',
})
