// @flow

import React from 'react'
import { createComponent } from 'react-fela'

import { __dateWrapper } from '../__style'

const DateInfoWrapper = createComponent(__dateWrapper)

type Props = {
	startDate: string,
	endDate: string,
}

const DateInfo = (props: Props) => (
	<DateInfoWrapper>
		<div>
			{props.startDate} {props.endDate && `- ${props.endDate}`}
		</div>
	</DateInfoWrapper>
)

export default DateInfo
