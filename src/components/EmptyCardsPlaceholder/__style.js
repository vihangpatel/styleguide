export const __emptyCardsPlaceholder = props => ({
	backgroundColor: 'inherit',
	width: props.width,
	height: props.height,
})

export const __noDataSvgContainer = props => ({
	textAlign: 'center',
	paddingTop: props.paddingTop,
})

export const __noDataDisplayText = props => ({
	...props.theme.regularBaseFont,
	fontSize: 14,
	textAlign: 'center',
	color: '#99b2dd',
	marginTop: 30,
	marginBottom: 20,
})
