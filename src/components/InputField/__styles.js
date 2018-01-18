import { padding, margin } from 'polished'

export const __input = ({ hasSuccess, hasError, theme }) => ({
	width: '100%',
	outline: 'none',
	...padding(6, 0),
	border: 'none',
	backgroundColor: 'transparent',
	extend: [
		{
			condition: hasError,
			style: {
				color: '#E27374',
			},
		},
		{
			condition: hasSuccess,
			style: {
				color: '#50BB91',
			},
		},
	],
	'::-webkit-input-placeholder': {
		color: theme.color.darkGrey,
	},
	'::-moz-placeholder': {
		color: theme.color.darkGrey,
	},
	':-ms-input-placeholder': {
		color: theme.color.darkGrey,
	},
	':-moz-placeholder': {
		color: theme.color.darkGrey,
	},
})

export const __border = ({ focused }) => ({
	background: '#0076ff',
	position: 'absolute',
	left: '50%',
	bottom: 0,
	transform: 'translateX(-50%)',
	width: 0,
	height: 2,
	transition: 'width 0.4s',
	extend: {
		condition: focused,
		style: {
			width: '100%',
		},
	},
})

export const __addon = ({ theme }) => ({
	alignSelf: 'flex-end',
})

export const __text = ({ hasError, hasSuccess }) => ({
	fontSize: 14,
	...margin(10, 0),
	minHeight: 16,
	width: '75%',
	extend: [
		{
			condition: hasError,
			style: {
				color: '#E27374',
			},
		},
		{
			condition: hasSuccess,
			style: {
				color: '#50BB91',
			},
		},
	],
})

export const __wrapField = ({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	position: 'relative',
	background: 'transparent',
	border: 'none',
	borderBottomWidth: 1,
	borderBottomStyle: 'solid',
	borderBottomColor: theme.color.smoke,
})
