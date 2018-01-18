// @flow

import React from 'react'
import { createComponent } from 'react-fela'

import DateRange from './components/DateRange'
import { __dateRangeWrapper } from './__style'

const DateRangeWrapper = createComponent(__dateRangeWrapper, 'div', ['onClick'])

const DateRangePill = ({ selected, dates, handleClick }) => (
	<DateRangeWrapper selected={selected} onClick={handleClick}>
		{dates.map(({ day, date, month }) => (
			<DateRange
				selected={selected}
				key={day + date + month}
				{...{
					day,
					date,
					month,
				}}
			/>
		))}
	</DateRangeWrapper>
)

export default DateRangePill
