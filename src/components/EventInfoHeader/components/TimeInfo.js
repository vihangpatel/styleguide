// @flow

import React from 'react'
import { createComponent } from 'react-fela'

import { __timeWrapper } from '../__style'

const TimeInfoWrapper = createComponent(__timeWrapper)

type Props = {
	startTime: string,
	endTime: string,
}

const TimeInfo = (props: Props) => (
	<TimeInfoWrapper>
		<div>
			{props.startTime} {props.endTime && `-${props.endTime}`}
		</div>
	</TimeInfoWrapper>
)

export default TimeInfo
