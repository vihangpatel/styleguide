import React from 'react'
import PropTypes from 'prop-types'
import { createComponent } from 'react-fela'
import LazyImage from '../../../common/ui/LazyImage'
import {
	recoVenuePreloader,
	noRecoVenuePlaceholder,
} from '../../../common/config'

const __Image = props => ({
	width: '30%',
	padding: '12',
	flexGrow: '0',
	'& img': {
		border: 'none',
		outline: 'none',
		width: '100%',
		borderRadius: props.theme.borderRadius,
	},
})

const Image = createComponent(__Image)

const VenueImage = props => (
	<Image>
		<LazyImage
			tinySrc={recoVenuePreloader}
			src={props.imageUrl}
			alt={props.title}
			srcErr={noRecoVenuePlaceholder}
		/>
	</Image>
)

VenueImage.propTypes = {
	imageUrl: PropTypes.string,
}

VenueImage.defaultProps = {
	imageUrl: '',
}

export default VenueImage
