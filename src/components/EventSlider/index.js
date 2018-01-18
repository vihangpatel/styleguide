import React from 'react'
import ImageCard from './components/ImageCard'
import PropTypes from 'prop-types'
import Slider from '../../common/ui/Slider'

const CoreSlider = props => {
	const { events, imagePadding } = props
	const Images = events.map(d => (
		<ImageCard key={d.name} imageData={d} imagePadding={imagePadding} />
	))

	return <Slider>{Images}</Slider>
}

export default function EventSlider({ children, ...props }) {
	return <CoreSlider {...props}>{children}</CoreSlider>
}

EventSlider.propTypes = {
	/** Array containing the list of events */
	events: PropTypes.arrayOf(PropTypes.object),
	/** Padding around each image */
	imagePadding: PropTypes.number,
}

EventSlider.defaultProps = {
	imagePadding: 0,
}
