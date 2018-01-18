import React from 'react'
import { createComponent } from 'react-fela'
import { Box } from 'kilvin'

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
	animationName: __cardKeyframe(),
	animationDuration: '1s',
	animationTimingFunction: 'linear',
	animationIterationCount: 'infinite',
	boxSizing: 'border-box',
})

const PlaceHolderCard = () => {
	const PlaceHolder = createComponent(__placeHolder)

	return (
		<Box>
			<Box>
				<PlaceHolder height="115" />
			</Box>
			<Box row style={{ marginTop: 25 }}>
				<Box>
					<PlaceHolder height="60" width="60" marginLeft="10" />
				</Box>
				<Box style={{ width: '70%' }}>
					<PlaceHolder
						height="15"
						width="100%"
						marginBottom="10"
						marginLeft="10"
					/>
					<PlaceHolder
						height="10"
						width="90%"
						marginBottom="10"
						marginLeft="10"
					/>
					<PlaceHolder
						height="10"
						width="80%"
						marginBottom="10"
						marginLeft="10"
					/>
				</Box>
			</Box>
		</Box>
	)
}
export default PlaceHolderCard
