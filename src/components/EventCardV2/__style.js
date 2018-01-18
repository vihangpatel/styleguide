import { margin, padding } from 'polished'

export const __Card = props => ({
	height: `${props.height ? props.height : '275'}`,
	overflow: 'hidden',
	borderRadius: props.theme.borderRadius,
	background: props.theme.colorWhite,
	...margin('0', 'auto', '16'),
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
	color: '#999',
	fontSize: props.theme.fontSize.s,
	flex: 1,
	textAlign: 'right',
	...props.theme.mediumBaseFont,
	...margin('0', '15'),
})

export const __wrap = props => ({
	display: 'flex',
	alignItems: 'flex-start',
	...padding('15', '8', '0'),
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
	width: '70',
	color: theme.charcoal,
	verticalAlign: 'top',
	'& div': {
		...theme.mediumBaseFont,
		fontSize: theme.fontSize.s,
	},
	'& ._month': {
		color: theme.color.seaGreen,
		...theme.boldBaseFont,
	},
	'& ._date': {
		fontSize: theme.fontSize.xl,
		lineHeight: '27px',
		...theme.boldBaseFont,
	},
	'& ._day': {
		fontSize: theme.fontSize.xs,
		...theme.mediumBaseFont,
	},
})

export const __DetailBlock = theme => ({
	width: '75%',
	...padding(0, 8),
	'& div': {
		fontSize: theme.fontSize.s,
	},
	'& ._title': {
		fontSize: theme.fontSize.m,
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
		color: theme.color.darkGrey,
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

export const __featured = ({ theme }) => ({
	alignItems: 'center',
	flex: 1,
	color: theme.color.seaGreen,
	fontSize: theme.fontSize.xs,
	...theme.boldBaseFont,
	...margin('auto', '15'),
	'& p': {
		margin: 0,
		display: 'inline',
	},
})

export const __iconWrapper = () => ({
	width: 10,
	height: '100%',
	display: 'inline-flex',
	...margin(0, 5),
})
