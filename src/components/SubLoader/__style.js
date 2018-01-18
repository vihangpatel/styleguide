import { margin } from 'polished'

const __loaderFadeDelay = () => ({
	'0%, 39%, 100%': { opacity: '0.2' },
	'40%': { opacity: '1' },
})
export const __fadingLoader = props => ({
	...margin('auto'),
	width: props.size,
	height: props.size,
	position: 'relative',
})

export const __loader = ({ rotateDeg, animationDelay, theme }) => ({
	width: '100%',
	height: '100%',
	position: 'absolute',
	left: '0',
	top: '0',
	transform: `rotate(${rotateDeg}deg)`,
	':before': {
		content: '""',
		display: 'block',
		...margin('0', 'auto'),
		width: '10%',
		height: '30%',
		backgroundColor: theme.color.seaGreen,
		borderRadius: '30%',
		animationName: __loaderFadeDelay(),
		animationDuration: '1.2s',
		animationIterationCount: 'infinite',
		animationTimingFunction: 'ease-in-out',
		animationFillMode: 'both',
		animationDelay: `${animationDelay}s`,
	},
})
