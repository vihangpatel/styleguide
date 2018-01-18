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
		...padding('5', '0'),
		margin: '0',
		color: theme.charcoal,
	},
})

export const __listItem = ({ isSquared, isActive, theme, clickable }) => ({
	userSelect: 'none',
	cursor: 'pointer',
	...padding('9', '12'),
	textTransform: 'capitalize',
	...margin('5', '13', '5', '0'),
	borderWidth: '1',
	borderStyle: 'solid',
	borderColor: '#D8D8D8',
	color: theme.colorGrayBorder,
	borderRadius: 3,
	whiteSpace: 'noWrap',
	fontSize: '12',
	backgroundColor: 'transparent',
	pointerEvents: `${clickable ? 'initial' : 'none'}`,
	...theme.regularBaseFont,
	extend: [
		{
			condition: isActive,
			style: {
				backgroundColor: '#167FFC',
				borderColor: '#167FFC',
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
