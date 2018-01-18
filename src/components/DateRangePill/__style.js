import { padding, margin } from 'polished'

export const __dateRangeBlock = ({ selected, theme }) => ({
	...padding('0', '16'),
	position: 'relative',
	':not(:last-child):after': {
		content: '""',
		borderTop: '2px solid #979797',
		position: 'absolute',
		right: '-5',
		width: '8',
		top: '50%',
		extend: [
			{
				condition: selected,
				style: {
					borderTop: '2px solid #fff',
				},
			},
		],
	},
})

export const __dateRangeWrapper = ({ selected, theme }) => ({
	textAlign: 'center',
	border: '1px solid #ccc',
	...padding('4', '0'),
	...margin('0', '15', '15', '0'),
	color: theme.colorGrayBorder,
	...theme.regularBaseFont,
	fontSize: theme.fontSize.s,
	display: 'inline-flex',
	alignItems: 'center',
	borderRadius: '4',
	extend: [
		{
			condition: selected,
			style: {
				backgroundColor: theme.color.seaGreen,
				borderColor: theme.color.seaGreen,
				color: theme.colorWhite,
			},
		},
	],
})

export const __day = () => ({})

export const __dateBlock = ({ theme }) => ({
	fontSize: theme.fontSize.m,
})

export const __month = () => ({})
