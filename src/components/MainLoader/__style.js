import { lighten } from 'polished'

const __topNav = props => ({
	height: 40,
	width: '100%',
	backgroundColor: props.theme.colorWhite,
	borderBottomColor: 'rgb(204, 204, 204)',
	borderBottomStyle: 'solid',
	borderBottomWidth: 1,
})

const __wrapper = props => ({
	zIndex: props.theme.zIndex.level5,
	backgroundColor: props.theme.colorWhite,
	minHeight: 500,
	extend: {
		condition: props.locked === true,
		style: {
			width: '100%',
			height: '100%',
			position: 'fixed',
			top: 0,
			left: 0,
		},
	},
})

const __topLoader = props => ({
	height: 8,
	overflow: 'hidden',
	width: '100%',
	backgroundColor: lighten(0.2, props.theme.color.azureRadiance),
})

const __keyFrame = () => ({
	'0%': { transform: 'translateX(-100%)' },
	'100%': { transform: 'translateX(400%)' },
})

const __topLoaderAnimator = props => ({
	animationName: __keyFrame(),
	animationDuration: '2000ms',
	animationIterationCount: 'infinite',
	animationTimingFunction: 'ease-in-out',
	animationPlayState: 'running',
	backgroundImage: `linear-gradient(to right, ${lighten(
		0.2,
		props.theme.color.azureRadiance
	)}, ${lighten(0.1, props.theme.color.azureRadiance)} 54%, ${
		props.theme.color.azureRadiance
	})`,
	width: '20%',
	height: 'inherit',
})

export { __topNav, __wrapper, __topLoader, __topLoaderAnimator }
