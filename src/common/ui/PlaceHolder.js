import { createComponent } from 'react-fela'

export const __cardKeyframe = () => ({
	'0%': { opacity: '0.3' },
	'50%': { opacity: '1' },
	'100%': { opacity: '0.3' },
})

export const __placeHolder = props => ({
	width: `${props.width || 'auto'}`,
	height: `${props.height || '240'}`,
	background: '#f2f2f2',
	marginBottom: `${props.marginBottom || '10'}`,
	marginLeft: `${props.marginLeft || 'initial'}`,
	marginTop: `${props.marginTop || 'initial'}`,
	marginRight: `${props.marginRight || 'initial'}`,
	animationName: __cardKeyframe(),
	animationDuration: '1s',
	animationTimingFunction: 'linear',
	animationIterationCount: 'infinite',
	boxSizing: 'border-box',
})

export const PlaceHolder = createComponent(__placeHolder)
