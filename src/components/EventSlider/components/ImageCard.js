import React from 'react'
import { createComponent } from 'react-fela'
import PropTypes from 'prop-types'
import LazyImage from '../../../common/ui/LazyImage'
import { hrefHandler } from '../../../utils/helpers'
import { eventPreloaderUrl } from '../../../common/config'

const __ImageCardWrapper = ({ imagePadding }) => ({
	padding: imagePadding,
	pointerEvents: 'none',
})

const ImageCardWrapper = createComponent(__ImageCardWrapper)

const ImageCard = props => {
	const { imageData, imagePadding } = props

	return (
		<ImageCardWrapper imagePadding={imagePadding}>
			<LazyImage
				tinySrc={eventPreloaderUrl}
				src={imageData.src}
				alt={imageData.name}
				onClick={hrefHandler(imageData.href)}
			/>
		</ImageCardWrapper>
	)
}

ImageCard.propTypes = {
	src: PropTypes.string,
	name: PropTypes.string,
}

export default ImageCard
