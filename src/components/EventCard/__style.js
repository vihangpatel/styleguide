import { margin, padding } from 'polished'

export const __Card = props => ({
	height: `${props.height ? props.height : '275'}`,
	overflow: 'hidden',
	border: '1px solid #cccccc',
	borderRadius: props.theme.borderRadius,
	background: 'white',
	...margin('0', 'auto', '10'),
	mobileXs: {
		width: `${props.lockWidth ? '290' : '100%'}`,
	},
	mobileX: {
		width: `${props.lockWidth ? '345' : '100%'}`,
	},
})

export const __Image = () => ({
	...margin('0', 'auto'),
	overflow: 'hidden',
	mobileXs: {
		height: '115',
	},
	mobileX: {
		height: '135',
	},
	'& img': {
		width: '100%',
		height: 'inherit',
	},
})

export const __Info = () => ({
	width: '100%',
	height: 'auto',
})

export const __Price = props => ({
	color: '#4A4A4A',
	fontSize: '12',
	textAlign: 'end',
	borderTop: '1px solid #F5F5FA',
	lineHeight: '3',
	...props.theme.mediumBaseFont,
	...margin('0', '15'),
})

export const __wrap = props => ({
	display: 'flex',
	alignItems: 'flex-start',
	...padding('15', '0', '0'),
	mobileXs: {
		height: '120',
	},
	mobileX: {
		height: '100',
	},
	extend: {
		condition: props.isNonPriced === true,
		style: {
			paddingTop: 25,
		},
	},
})

export const __DateBlock = theme => ({
	textAlign: 'center',
	width: '60',
	color: '#333333',
	verticalAlign: 'top',
	'& div': {
		...theme.mediumBaseFont,
		fontSize: '12',
	},
	'& ._month': {
		color: '#4CD9AA',
		...theme.boldBaseFont,
		textTransform: 'uppercase',
	},
	'& ._date': {
		fontSize: '18',
		lineHeight: '27px',
		...theme.boldBaseFont,
	},
})

export const __DetailBlock = theme => ({
	width: '75%',
	...padding(0, 10),
	'& div': {
		fontSize: '12',
	},
	'& ._title': {
		fontSize: '14',
		color: theme.color.charcoal,
		marginBottom: '10',
		overflow: 'hidden',
		...theme.mediumBaseFont,
		display: '-webkit-box',
		'-webkit-line-clamp': 2,
		textOverflow: 'ellipsis',
		'-webkit-box-orient': 'vertical',
		'&': {
			display: '-moz-box',
		},
		mobileXs: {
			maxHeight: 34,
		},
		mobileX: {
			maxHeight: 40,
		},
	},
	'& ._venue': {
		color: theme.colorGrayBorder,
		marginBottom: 5,
		maxHeight: 15,
		overflow: 'hidden',
		textOverflow: 'ellipsis',
		display: '-webkit-box',
		'-webkit-line-clamp': 1,
		'-webkit-box-orient': 'vertical',
		...theme.regularBaseFont,
	},
	'& ._type': {
		color: theme.colorGrayBorder,
		maxHeight: 15,
		overflow: 'hidden',
		marginBottom: 5,
		display: '-webkit-box',
		'-webkit-line-clamp': 1,
		textOverflow: 'ellipsis',
		'-webkit-box-orient': 'vertical',
		...theme.regularBaseFont,
	},
})

export const __imgWrap = () => ({
	position: 'relative',
	overflow: 'hidden',
})

export const __blurimg = () => ({
	position: 'absolute',
	left: '0',
	right: '0',
	top: '0',
	bottom: '0',
	filter: 'blur(2vw)',
	transform: 'scale(1.05)',
	backgroundSize: '100%',
	'& img': {
		width: '100%',
		height: '100%',
	},
})

export const __blurOverlay = () => ({
	backgroundImage:
		'linear-gradient(to bottom,rgba(0,0,0,.08) 46%,rgba(0,0,0,.08) 59%,rgba(0,0,0,.9) 100%)',
	backgroundSize: '100%',
	position: 'absolute',
	left: '0',
	right: '0',
	top: '0',
	bottom: '0',
})
