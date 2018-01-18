import { padding } from 'polished'

export const __ToastBody = props => ({
	width: '100%',
	height: 'auto',
	display: 'flex',
	position: props.fixed ? 'fixed' : 'initial',
	bottom: 0,
	zIndex: props.theme.zIndex.level5,
	...padding(15),
	extend: [
		{
			condition: props.type === 'info',
			style: {
				backgroundColor: props.theme.color.riceFlower,
			},
		},
		{
			condition: props.type === 'error',
			style: {
				backgroundColor: props.theme.color.sunglo,
				color: props.theme.colorWhite,
			},
		},
		{
			condition: props.type === 'success',
			style: {
				backgroundColor: props.theme.color.azureRadiance,
				color: props.theme.colorWhite,
			},
		},
		{
			condition: props.show === false,
			style: {
				display: 'none',
			},
		},
	],
})

export const __SvgSize = props => ({
	width: 46,
	height: 46,
})

export const __TextSize = props => ({
	margin: 'auto',
	...props.theme.boldBaseFont,
	fontSize: props.theme.fontSize.m,
	lineHeight: props.theme.lineHeight,
})
