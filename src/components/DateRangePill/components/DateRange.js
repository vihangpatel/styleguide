// @flow

import React from 'react'
import { createComponent } from 'react-fela'
import { __dateRangeBlock, __day, __dateBlock, __month } from '../__style'

const Day = createComponent(__day)
const DateBlock = createComponent(__dateBlock)
const Month = createComponent(__month)
const DateRangeBlock = createComponent(__dateRangeBlock)

const DateRange = ({ selected, day, date, month }) => (
	<DateRangeBlock selected={selected}>
		<Day>{day}</Day>
		<DateBlock>{date}</DateBlock>
		<Month>{month}</Month>
	</DateRangeBlock>
)

DateRange.defaultProps = {
	day: '',
	date: '',
	month: '',
}

export default DateRange
