import React from 'react'
import { createComponent } from 'react-fela'
import { margin, padding } from 'polished'

const __keyframe = () => ({
	'0%, 100%': {
		opacity: '0.3',
	},
	'50%': {
		opacity: '1',
	},
})

const __loader = props => ({
	...margin('8', 'auto'),
	backgroundColor: '#fff',
	alignItems: 'flex-start',
	border: props.theme.border,
	borderRadius: props.theme.borderRadius,
	mobileXs: {
		width: `${props.lockWidth ? '290' : 'auto'}`,
	},
	mobileX: {
		width: `${props.lockWidth ? '345' : 'auto'}`,
	},
	height: props.height || 100,
	...props.theme.regularBaseFont,
	position: 'relative',
})

const __animate = () => ({
	display: 'flex',
	animationName: __keyframe(),
	animationDuration: '1s',
	animationTimingFunction: 'linear',
	animationDelay: 'initial',
	animationIterationCount: 'infinite',
})

const __image = props => ({
	width: '30%',
	height: '100',
	...padding('12'),
	flexGrow: '0',
	boxSizing: 'border-box',
	borderRadius: props.theme.borderRadius,
	'& div': {
		width: '100%',
		height: '100%',
		background: '#f6f7f8',
	},
})

const __info = props => ({
	...props.theme.regularBaseFont,
	width: '45%',
	flexGrow: '0',
	...padding('15', '0'),
	borderRadius: props.theme.borderRadius,
})

const __title = ({ theme }) => ({
	...theme.regularBaseFont,
	width: '100%',
	height: '15',
	borderRadius: '2',
	background: '#f6f7f8',
})

const __address = props => ({
	...props.theme.regularBaseFont,
	width: '60%',
	height: '10',
	background: '#f6f7f8',
	borderRadius: props.theme.borderRadius,
	...margin('4', '0'),
})

const __heartIcon = () => ({
	width: '18',
	height: '18',
	borderRadius: '50%',
	background: '#f6f7f8',
	position: 'absolute',
	top: '15',
	right: '15',
})

const __distance = props => ({
	...props.theme.regularBaseFont,
	width: '25',
	height: '15',
	borderRadius: props.theme.borderRadius,
	position: 'absolute',
	background: '#f6f7f8',
	bottom: '15',
	right: '15',
})

const Loader = createComponent(__loader)
const Animate = createComponent(__animate)
const Image = createComponent(__image)
const Info = createComponent(__info)
const Title = createComponent(__title)
const Address = createComponent(__address)
const HeartIcon = createComponent(__heartIcon)
const Distance = createComponent(__distance)

const VenuePlaceHolder = ({ lockWidth }) => (
	<Loader lockWidth={lockWidth}>
		<Animate>
			<Image>
				<div />
			</Image>
			<Info>
				<Title />
				<Address />
			</Info>
			<HeartIcon />
			<Distance />
		</Animate>
	</Loader>
)

export default VenuePlaceHolder
