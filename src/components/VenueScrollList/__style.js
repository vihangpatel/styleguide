import { padding } from 'polished'

/* * Adding Style To the Container Box */
export const __outerBox = props => ({
	...props.theme.regularBaseFont,
	backgroundColor: props.theme.colorWhite,
	display: 'flex',
	alignItems: 'flex-start',
	overflowX: 'scroll',
	...padding(10),
	width: `${props.lockWidth ? '375' : 'auto'}`,
	'&::-webkit-scrollbar': {
		display: 'none',
	},
})

// * Adding style to each cards
export const __card = props => ({
	marginRight: '15',
	cursor: 'not-allowed',
	extend: [
		{
			condition: props.last === true,
			style: {
				position: 'relative',
				backgroundColor: '#6b7481',
				borderRadius: 4,
			},
		},
		{
			condition: props.clickable === true,
			style: {
				cursor: 'pointer',
			},
		},
	],
})

// * Adding Style To images in each card
export const __image = props => ({
	width: 120,
	height: 80,
	display: 'flex',
	backgroundColor: props.theme.colorGray,
	borderColor: props.theme.colorGrayLightOnboarding,
	borderWidth: '1',
	borderStyle: 'solid',
	borderRadius: 4,
	'> img': {
		borderRadius: props.theme.borderRadius,
	},
	extend: {
		condition: props.last === true,
		style: {
			opacity: 0.4,
		},
	},
})

// * Adding Style To Titles in each Card
export const __title = props => ({
	fontSize: props.theme.fontSize.s,
	color: props.theme.color.colorGrayBorder,
	width: '97',
	...props.theme.regularBaseFont,
	textOverflow: 'ellipsis',
	whiteSpace: 'nowrap',
	overflow: 'hidden',
})

// * Style To Show The Text In the Center Of The Card
export const __seeAll = props => ({
	color: props.theme.colorWhite,
	...props.theme.regularBaseFont,
	fontSize: props.theme.fontSize.s,
	position: 'absolute',
	top: '50%',
	transform: 'translateY(-50%)',
	textAlign: 'center',
	width: '100%',
})

// * --------------------------------- Loader Styles ---------------------------------

/** Styles added to placeholder Card scroll List
 * This Styles are Used in loader.js
 * Only __recommendedVenueCardsOuterBoxStyle is used as an outer container.
 */
export const __keyframe = () => ({
	'0%, 100%': {
		opacity: '0.3',
	},
	'50%': {
		opacity: '1',
	},
})

// * Adding Animations To Cards In The Placeholder
export const __animate = () => ({
	display: 'flex',
	animationName: __keyframe(),
	animationDuration: '1s',
	animationTimingFunction: 'linear',
	animationDelay: 'initial',
	animationIterationCount: 'infinite',
})

// * Styles For Each Card
export const __cardLoader = props => ({
	marginRight: '16',
	width: 120,
	height: 80,
	position: 'relative',
	backgroundColor: props.theme.colorGrayLightOnboarding,
})

// * Styles For Each Card Title
export const __titleLoader = props => ({
	backgroundColor: props.theme.colorGrayLightOnboarding,
	height: '10',
	width: '120',
	marginTop: '10',
})
