import { padding, margin } from 'polished'

export const __pills = ({ backgroundColor, theme, scrollablePills }) => ({
	width: 'auto',
	backgroundColor,
	overflow: 'auto',
	...theme.regularBaseFont,
	'& ul': {
		'list-style-type': 'none',
		display: 'flex',
		flexWrap: `${scrollablePills ? 'nowrap' : 'wrap'}`,
		...padding('10', '0'),
		margin: '0',
		color: theme.charcoal,
	},
})

export const __listItem = ({ isSquared, isActive, theme, clickable }) => ({
	userSelect: 'none',
	cursor: 'pointer',
	...padding('5', '10'),
	textTransform: 'capitalize',
	...margin('5', '5', '5', '0'),
	borderWidth: '1',
	borderStyle: 'solid',
	borderColor: theme.colorGrayBorder,
	color: theme.colorGrayBorder,
	borderRadius: '500',
	paddingBottom: '9',
	paddingTop: '9',
	whiteSpace: 'noWrap',
	fontSize: '12',
	backgroundColor: 'transparent',
	pointerEvents: `${clickable ? 'initial' : 'none'}`,
	...theme.regularBaseFont,
	extend: [
		{
			condition: isActive,
			style: {
				backgroundColor: theme.color.seaGreen,
				borderColor: theme.color.seaGreen,
				color: 'white',
			},
		},
		{
			condition: isSquared,
			style: {
				borderRadius: '2',
				borderColor: '#F1F1F1',
			},
		},
	],
})
