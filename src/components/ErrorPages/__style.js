import { margin } from 'polished'

export const __errorPageWrapper = () => ({
	height: 'calc(100vh - 43px)',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
})

export const __errorPages = () => ({
	textAlign: 'center',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	flexDirection: 'column',
	height: '70%',
	'& svg': {
		width: '230',
		height: '150',
	},
})

export const __errorType = ({ theme }) => ({
	color: theme.color.lightPurple,
	fontSize: '62',
	marginTop: '35',
	...theme.regularBaseFont,
})

export const __errorMessage = ({ theme }) => ({
	...theme.regularBaseFont,
	color: theme.color.lightPurple,
	fontSize: '18',
	...margin('10', '0'),
})

export const __homeLink = ({ theme }) => ({
	fontSize: '14',
	color: '#E6324B',
	...theme.mediumBaseFont,
	textTransform: 'uppercase',
})
