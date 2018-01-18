import { padding } from 'polished'

export const counterContainer = props => ({
	display: 'inline-flex',
	justifyContent: 'space-between',
	backgroundColor: props.theme.colorWhite,
	...padding(5),
	extend: [
		{
			condition: props.hide === 'quantity',
			style: {
				display: 'none',
			},
		},
	],
})

export const counterCount = props => ({
	...props.theme.regularBaseFont,
	fontSize: props.theme.fontSize.m,
	color: props.theme.color.doveGray,
	margin: 'auto',
	...padding('0','10'),
})

export const __SvgSize = props => ({
	width: 29,
	height: 29,
	color: props.color,
})
