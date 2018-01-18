import { margin, padding } from 'polished'

export const __proceedbutton = ({ theme, disabled, color }) => ({
	width: '100%',
	position: 'fixed',
	bottom: 0,
	left: 0,
	backgroundColor: color,
	color: theme.colorWhite,
	...padding('17'),
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

export const __buttonText = ({ theme }) => ({
	fontSize: '15px',
})
