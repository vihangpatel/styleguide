import { padding } from 'polished'

export const cardProps = props => ({
	width: '100%',
	...padding(16),
	backgroundColor: props.theme.colorWhite,
	display: 'flex',
	flexDirection: 'column',
})

export const titleContainer = () => ({
	width: 'auto',
	justifyContent: 'space-between',
	display: 'flex',
	alignItems: 'center',
	minHeight: 40,
})

export const title = props => ({
	...props.theme.regularBaseFont,
	fontSize: props.theme.fontSize.l,
	color: props.theme.colorBlack,
	flex: 0.6,
	extend: [
		{
			condition: props.disabled === true,
			style: {
				color: props.theme.color.silver,
			},
		},
	],
})

export const buyButton = props => ({
	display: props.showAddButton ? 'none' : 'block',
	width: 100,
	borderRadius: props.theme.borderRadius,
	backgroundColor: props.theme.colorWhite,
	border: `solid 1px ${
		props.disabled
			? props.theme.color.silver
			: props.theme.color.azureRadiance
	}`,
	...padding(5),
	...props.theme.regularBaseFont,
	fontSize: props.theme.fontSize.m,
	textAlign: 'center',
	color: props.theme.color.azureRadiance,
	extend: [
		{
			condition: props.disabled === true,
			style: {
				color: props.theme.color.silver,
			},
		},
		{
			condition: props.hide === 'book',
			style: {
				display: 'none',
			},
		},
	],
})

export const ticketPrice = props => ({
	...props.theme.regularBaseFont,
	fontSize: props.theme.fontSize.m,
	color: props.theme.color.scorpion,
	extend: [
		{
			condition: props.disabled === true,
			style: {
				color: props.theme.color.silver,
			},
		},
	],
})
