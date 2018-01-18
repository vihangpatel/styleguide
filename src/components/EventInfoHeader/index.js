// @flow

import React from 'react'
import { createComponent } from 'react-fela'

import Genre from './components/Genre'
import DateInfo from './components/DateInfo'
import TimeInfo from './components/TimeInfo'
import PlaceInfo from './components/PlaceInfo'

import { __title, __eventInfoWrapper } from './__style'

const Title = createComponent(__title)
const EventInfoWrapper = createComponent(__eventInfoWrapper)

/** A component that shows details of the event. */
const EventInfoHeader = ({
	startDate,
	endDate,
	title,
	genres,
	startTime,
	endTime,
	city,
	language,
	ageLimit,
	eventDuration,
}) => (
	<EventInfoWrapper row>
		<Title>{title}</Title>
		<Genre
			genres={genres}
			eventDuration={eventDuration}
			language={language}
			ageLimit={ageLimit}
		/>
		<DateInfo startDate={startDate} endDate={endDate} />
		<TimeInfo startTime={startTime} endTime={endTime} />
		<PlaceInfo city={city} />
	</EventInfoWrapper>
)

EventInfoHeader.defaultProps = {
	/** title of the event */
	title: '',
	/** startDate of the event */
	startDate: '',
	/** endDate of the event */
	endDate: '',
	/** genres of the event */
	genres: '',
	/** eventDuration of the event */
	eventDuration: '',
	/** startTime of the event */
	startTime: '',
	/** endTime of the event */
	endTime: '',
	/** city of the event */
	city: '',
	/** age limit to attend the Event */
	ageLimit: '',
	/* Language of the event */
	language: '',
}

export default EventInfoHeader
