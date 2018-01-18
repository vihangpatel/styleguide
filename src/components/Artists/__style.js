import { margin } from 'polished'

export const __artist = () => ({
	width: '65',
	textAlign: 'center',
	marginRight: '20',
	lineHeight: '16px',
	textTransform: 'capitalize',
})

export const __artistImg = () => ({
	borderRadius: '50%',
	overflow: 'hidden',
	'> img': {
		width: '65',
		height: '65',
	},
})

export const __artistName = ({ theme }) => ({
	fontSize: theme.fontSize.s,
	color: theme.colorGrayBorder,
	letterSpacing: '0.2',
	...margin('5', '0'),
	...theme.regularBaseFont,
})

export const __artistType = ({ theme }) => ({
	color: theme.color.darkGrey,
	fontSize: theme.fontSize.s,
	...theme.regularBaseFont,
})
