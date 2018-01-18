import { padding } from 'polished'

export const __bookbutton = ({ theme, disabled }) => ({
	width: '100%',
	backgroundColor: theme.color.azureRadiance,
	color: theme.colorWhite,
	borderRadius: '4',
	display: 'flex',
	justifyContent: disabled ? 'flex-end' : 'space-between',
	...padding('10'),
	alignItems: 'center',
	...theme.regularBaseFont,
	border: 'none',
	extend: [
		{
			condition: disabled,
			style: {
				opacity: '0.14',
			},
		},
	],
	onFocus: {
		outline: 'none',
	},
})

export const __priceInfo = ({ isExact, theme }) => ({
	fontSize: theme.fontSize.s,
	display: 'flex',
	flexDirection: 'column',
	textAlign: 'left',
	borderRight: '2px solid #67ADFF',
	paddingRight: '30',
	extend: {
		condition: isExact === true,
		style: {
			textAlign: 'center',
		},
	},
})

export const __buttonText = ({ theme }) => ({
	fontSize: theme.fontSize.xl,
	display: 'flex',
	flexDirection: 'column',
	textAlign: 'right',
	'& span': {
		fontSize: '10',
	},
})
