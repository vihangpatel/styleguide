import { margin } from 'polished'

export const __title = ({ theme }) => ({
	fontSize: theme.fontSize.m,
	color: theme.color.charcoal,
	letterSpacing: '0.2',
	...theme.regularBaseFont,
})

export const __listIconWrapper = () => ({
	display: 'flex',
	flexWrap: 'nowrap',
	overflowX: 'scroll',
	...margin('10', '0'),
})

export const __ListIcon = () => ({
	textAlign: 'center',
	lineHeight: '16px',
	textTransform: 'capitalize',
	marginRight: '10',
	'> svg': {
		width: '22',
		height: '22',
	},
})

export const __iconName = ({ theme }) => ({
	fontSize: theme.fontSize.s,
	color: theme.color.darkGrey,
	letterSpacing: '0.2',
	...margin('5', '0'),
	...theme.regularBaseFont,
})
