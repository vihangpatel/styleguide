// @flow

import React from 'react'
import { createComponent } from 'react-fela'

import { Box } from 'kilvin'

import { __placeWrapper } from '../__style'

const PlaceInfoWrapper = createComponent(__placeWrapper)

type Props = {
	city: string,
}

const PlaceInfo = (props: Props) => (
	<PlaceInfoWrapper>
		{props.city && (
			<Box row style={{ width: '88%' }}>
				<div>{props.city}</div>
			</Box>
		)}
	</PlaceInfoWrapper>
)

export default PlaceInfo
