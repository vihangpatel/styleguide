import React from 'react'
import { Box } from 'kilvin'
import { PlaceHolder } from '../../../common/ui/PlaceHolder'

export const __cardKeyframe = () => ({
	'0%': { opacity: '0.3' },
	'50%': { opacity: '1' },
	'100%': { opacity: '0.3' },
})

const PlaceHolderCard = () => (
	<Box>
		<PlaceHolder height="115" />
		<Box row>
			<PlaceHolder
				height="60"
				width="60"
				marginTop="25"
				marginLeft="10"
			/>
			<Box style={{ width: '70%' }}>
				<PlaceHolder
					height="15"
					marginTop="25"
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
export default PlaceHolderCard
