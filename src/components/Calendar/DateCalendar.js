// @flow

import React from 'react'
// $FlowFixMe
import InfiniteCalendar, { Calendar, withRange } from 'react-infinite-calendar'

import theme from '../../utils/base-ui-theme'

// styles $FlowFixMe
import './styles.global.less'

const calendarTheme = {
	accentColor: theme.color.seaGreen,
	floatingNav: {
		background: theme.color.lightGray,
		chevron: theme.color.seaGreen,
		color: theme.colorBlack,
	},
	headerColor: theme.colorWhite,
	selectionColor: theme.color.seaGreen,
	textColor: {
		active: theme.colorWhite,
		default: theme.color.charcoal,
	},
	todayColor: theme.color.seaGreen,
	weekdayColor: theme.colorWhite,
}
const CalendarWithRange = withRange(Calendar)

type Props = {
	/** Callback that handles the date on select. Object of shape { start, eventType, end } */
	dateHandler?: () => {},
	/** Send in a start and end date objects that decides the pre-selected range { start: Date, end: Date} */
	selected?: {
		start: Date,
		end: Date,
	},
	/** Javascript date object that locks to the minDate to select with  */
	minDate?: Date,
	/** Javascript date object that locks to the maxDate to select with  */
	maxDate?: Date,
	/** Array of disabled Javascript date objects */
	disabledDates?: Array<Date>,
}
const DateCalendar = ({
	dateHandler,
	selected,
	minDate,
	maxDate,
	disabledDates,
}: Props) => (
	<InfiniteCalendar
		Component={CalendarWithRange}
		width="100%"
		selected={selected}
		locale={{
			headerFormat: 'MMM Do',
			weekStartsOn: 1,
		}}
		theme={calendarTheme}
		onSelect={dateHandler}
		minDate={minDate}
		maxDate={maxDate}
		disabledDates={disabledDates}
	/>
)

DateCalendar.defaultProps = {
	dateHandler: dates => {
		console.log(dates) // eslint-disable-line no-console
	},
	selected: {
		start: new Date(),
		end: new Date(),
	},
	minDate: new Date(1980, 0, 1),
	maxDate: new Date(2050, 11, 31),
	disabledDates: [],
}

export default DateCalendar
