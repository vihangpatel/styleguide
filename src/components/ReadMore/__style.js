export const __wrapper = () => ({
	position: 'relative',
	paddingTop: '15',
})

export const __SynopsisDataCard = prop => ({
	width: `${prop.width ? prop.width : '100%'}`,
	height: `${prop.height ? prop.height : 40}`,
	overflow: 'hidden',
	lineHeight: '20px',
	position: 'relative',
	fontFamily: 'Roboto',
	color: `${prop.fontColor ? prop.fontColor : prop.theme.color.darkGrey}`,
	fontSize: prop.theme.fontSize.s,
	backgroundColor: `${
		prop.backgroundColor ? prop.backgroundColor : prop.theme.colorWhite
	}`,
	letterSpacing: '0.5',
	'& strong': {
		fontWeight: 'normal',
		color: prop.theme.colorGrayBorder,
	},
	extend: {
		condition: prop.show === true,
		style: {
			height: 'auto',
		},
	},
	'& a': {
		color: `${prop.fontColor ? prop.fontColor : prop.theme.color.darkGrey}`,
	},
})

export const __ReadMore = prop => ({
	fontSize: prop.theme.fontSize.s,
	color: prop.theme.color.azureRadiance,
	position: 'absolute',
	right: '0',
	bottom: '-10',
	...prop.regularBaseFont,
})
