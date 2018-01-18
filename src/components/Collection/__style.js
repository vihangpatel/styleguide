import { margin, padding } from 'polished'

export const __wrapper = () => ({
	backgroundColor: '#FFFFFF',
	...padding(8, 0),
	...margin(0, 0, 16, 0),
	width: '100%',
})

export const __header = props => ({
	fontSize: props.theme.fontSize.xl,
	marginBottom: 5,
	marginLeft: 16,
	...props.theme.mediumBaseFont,
})

export const __description = props => ({
	fontSize: props.theme.fontSize.s,
	color: props.theme.color.darkGrey,
	marginBottom: 13,
	marginLeft: 16,
	...props.theme.regularFont,
})

export const __collectionScroller = () => ({
	display: 'flex',
	alignItems: 'flex-start',
	overflowX: 'scroll',
	marginBottom: 16,
	'&::-webkit-scrollbar': {
		display: 'none',
	},
})

export const __innerScroll = () => ({
	display: 'flex',
	alignItems: 'flex-start',
	maxWidth: 'fit-content',
})

export const __cardKeyframe = () => ({
	'0%': { opacity: '0.3' },
	'50%': { opacity: '1' },
	'100%': { opacity: '0.3' },
})

export const __placeHolder = props => ({
	width: `${props.width || 'auto'}`,
	height: `${props.height || '240'}`,
	background: '#f2f2f2',
	animationName: __cardKeyframe(),
	animationDuration: '1s',
	animationTimingFunction: 'linear',
	animationIterationCount: 'infinite',
	boxSizing: 'border-box',
})

export const __card = props => ({
	width: 156,
	height: 156,
	marginRight: 16,
	backgroundColor: '#f2f2f2',
	borderRadius: props.theme.borderRadius,
	extend: {
		condition: props.loading === true,
		style: {
			animationName: __cardKeyframe(),
			animationDuration: '1s',
			animationTimingFunction: 'linear',
			animationIterationCount: 'infinite',
		},
	},
	'&:first-child': {
		marginLeft: 16,
	},
})
