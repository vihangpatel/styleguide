import { margin } from 'polished'

export const __eventInfoWrapper = () => ({})

export const __title = ({ theme }) => ({
	...theme.regularBaseFont,
	fontSize: theme.fontSize.xxl,
	color: theme.color.tundora,
	...margin('10', '0'),
})

export const __genreSection = ({ theme }) => ({
	fontSize: theme.fontSize.m,
	...theme.regularBaseFont,
	color: theme.color.dustyGray,
	marginBottom: '13',
	'> div': {
		marginRight: '4',
		display: 'inline',
	},
})

export const __dateWrapper = ({ theme }) => ({
	...theme.regularBaseFont,
	fontSize: theme.fontSize.m,
	color: theme.color.tundora,
	...margin('10', '0'),
})

export const __timeWrapper = ({ theme }) => ({
	...theme.regularBaseFont,
	fontSize: theme.fontSize.m,
	color: theme.color.tundora,
	...margin('10', '0'),
})

export const __placeWrapper = ({ theme }) => ({
	...theme.regularBaseFont,
	fontSize: theme.fontSize.m,
	color: theme.color.dustyGray,
	...margin('10', '0'),
})
