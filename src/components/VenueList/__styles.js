import { margin, padding } from 'polished'

export const __wrapper = () => ({
	backgroundColor: '#FFFFFF',
	width: '100%',
	...padding(8, 0),
	...margin(0, 0, 16, 0),
	'> .cardsList': {
		overflowX: 'auto',
		height: '180px',
		overflowY: 'hidden',
	},
})

export const __titleContainer = () => ({
	display: 'flex',
	justifyContent: 'space-between',
	...padding(8, 16),
})

export const __mainTitle = () => ({
	'> h2': {
		fontSize: '18px',
		fontWeight: 500,
		lineHeight: 0.89,
		textAlign: 'left',
		color: '#333333',
		margin: '0px',
	},
	'> h4': {
		fontSize: '12px',
		lineHeight: 1.33,
		textAlign: 'left',
		color: '#999999',
		margin: '5px 0px',
	},
})

export const __seeall = () => ({
	textdecoration: 'none',
	fontSize: '14px',
	lineHeight: 1.14,
	textAlign: 'right',
	color: '#0078ff',
})

export const __card = () => ({
	width: '156px',
	marginRight: '16px',
	borderRadius: '2px',
	backgroundColor: '#ffffff',
	border: 'solid 1px #f5f5fa',
	'> div': {
		textDecoration: 'none',
		'> .img-wrapper': {
			width: '156px',
			height: '98px',
			overflow: 'hidden',
			'> img': {
				height: '100%',
			},
		},
		'> .content-wrapper': {
			width: '100%',
			height: '78px',
			padding: '13px 15px',
			'> h2': {
				fontSize: '14px',
				fontWeight: 500,
				lineHeight: 1.14,
				textAlign: 'left',
				height: '30px',
				overflow: 'hidden',
				color: '#333333',
				margin: '0px 0px 5px 0px',
			},
			'> p': {
				fontSize: '12px',
				lineHeight: 1.33,
				textAlign: 'left',
				color: '#999999',
				height: '16px',
				whiteSpace: 'nowrap',
				textOverflow: 'ellipsis',
				overflow: 'hidden',
				width: '100%',
			},
		},
	},
	'&:first-child': {
		marginLeft: 16,
	},
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
