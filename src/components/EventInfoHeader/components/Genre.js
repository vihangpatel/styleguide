// @flow

import React from 'react'
import { createComponent } from 'react-fela'

import { __genreSection } from '../__style'

const GenreSection = createComponent(__genreSection)

type Props = {
	genres: string,
}

const Genre = (props: Props) => (
	<GenreSection>
		{props.genres &&
			props.genres.length > 0 && <div>{props.genres.join(' | ')} |</div>}
		{props.language && <div>{props.language} |</div>}
		{props.eventDuration && <div>{props.eventDuration} |</div>}
		{props.ageLimit &&
			parseInt(props.ageLimit, 10) > 0 && (
				<div>
					Age {props.ageLimit}
					{props.ageLimit.indexOf('+') > -1 ? '' : '+'} Only
				</div>
			)}
	</GenreSection>
)

export default Genre
