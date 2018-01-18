export const dotPulse = () => ({
	'50%': { transform: 'scale(1.3)' },
	'100%': { transform: 'scale(1)' },
})
export const ticketFlyIn = () => ({
	'0%': { transform: 'translateX(-500%)' },
	'90%': { transform: 'translateX(3%)' },
	'100%': { transform: 'translateX(0%)' },
})

export const loaderStyles = props => ({
	position: 'relative',
	left: 0,
	bottom: 0,
	width: '100%',
	padding: '16px',
	boxSizing: 'border-box',
	textAlign: 'center',
	backgroundColor: '#FFFFFF',
	opacity: 1,
	'> .illustration': {
		position: 'relative',
		margin: '5px auto 10px',
		width: '100px',
		height: '52px',
		'> .illustration-uno, .illustration-dos': {
			position: 'absolute',
			width: '116px',
			height: '38px',
			animationName: props.ticketFlyInKeyframes,
			animationDuration: '0.2s',
			animationDirection: 'forwards',
		},
		'> .illustration-uno': {
			bottom: 0,
			right: 0,
			animationelay: '0.3s',
		},
		'> .illustration-dos': {
			top: 0,
			left: 0,
			animationDelay: '0.35s',
		},
	},
	'> .label': {
		fontSize: '11px',
		lineHeight: '16px',
		fontWeight: 400,
	},
	'> .loader-dots': {
		marginTop: '2px',
		'> .dot': {
			display: 'inline-block',
			margin: '2px',
			width: '6px',
			height: '6px',
			borderRadius: '50%',
			backgroundColor: '#FE2E55',
			animationName: props.dotPulseKeyframes,
			animationDuration: '0.6s',
			animationIterationCount: 'infinite',
		},
		'> .dot-uno': {
			animationDelay: '0.4s',
		},
		'> .dot-dos': {
			animationDelay: '0.5s',
		},
		'> .dot-tres': {
			animationDelay: '0.6s',
		},
	},
})
