import theme from '../../utils/base-ui-theme'
import { darken } from 'polished'

/* *Style for the buttons */
export const __button = ({
	width,
	height,
	isEnabled,
	isLink,
	buttonVariant,
	isFlat,
	isTransparent,
	border,
	color,
}) => ({
	backgroundColor: `${
		isEnabled
			? theme.buttonVariants[buttonVariant] || buttonVariant
			: theme.buttonVariants.disabled
	}`,
	width: `${width}`,
	height: `${height}`,
	color: color || 'white',
	border: border || 'none',
	textTransform: 'capitalize',
	cursor: `${isEnabled ? 'pointer' : 'not-allowed'}`,
	borderRadius: theme.borderRadius,
	fontSize: 14,
	...theme.regularBaseFont,
	extend: [
		{
			condition: isEnabled && !isLink,
			style: {
				// onHover: {
				// 	backgroundColor: darken(
				// 		0.2,
				// 		theme.buttonVariants[buttonVariant] || buttonVariant
				// 	),
				// },
			},
		},
		{
			condition: isLink,
			style: {
				backgroundColor: theme.colorWhite,
				color: theme.buttonVariants[buttonVariant] || buttonVariant,
			},
		},
		{
			condition: isFlat,
			style: {
				backgroundColor: theme.colorWhite,
				borderRadius: 5,
				color: theme.color.mineShaft,
				border: 'solid 1px #d2d2d2',
				onHover: {
					backgroundColor: theme.colorWhite,
					border: 'solid 1px #d2d2d2',
				},
			},
		},
		{
			condition: isTransparent,
			style: {
				backgroundColor: 'initial',
				color: theme.color.mineShaft,
				opacity: '0.5',
				onHover: {
					backgroundColor: 'initial',
				},
			},
		},
	],

	onFocus: {
		outline: 'none',
	},
})
