export const _cardWrapper = () => ({
	backgroundColor: 'white',
	width: '100%',
	height: 'auto',
	padding: 20,
})

export const _headerContainer = () => ({
	display: 'flex',
	width: '100%',
	justifyContent: 'center',
	alignItems: 'center',
})

export const _priceContainer = () => ({
	flex: 1,
	textAlign: 'center',
	display: 'flex',
	alignItems: 'center',
})

export const _nextArrow = () => ({
	display: 'flex',
	width: 14,
	height: 14,
	transform: 'rotate(180deg)',
})

export const _colorIndicator = props => ({
	borderRadius: '50%',
	backgroundColor: props.bgColor ? props.bgColor : '',
	border: props.border || '',
	width: props.bgColor ? 10 : '',
	height: props.bgColor ? 10 : '',
	marginRight: props.bgColor ? 10 : '',
})

export const _zoneIndicator = () => ({
	paddingTop: 5,
	textAlign: 'left',
})

export const _infoContainer = () => ({
	paddingTop: 5,
})
