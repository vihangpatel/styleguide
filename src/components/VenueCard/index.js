import React from 'react'
import PropTypes from 'prop-types'
import { createComponent } from 'react-fela'
import { margin } from 'polished'
import Image from './components/Image'
import Favorite from './components/Favorite'
import Info from './components/Info'
import VenuePlaceHolder from './components/VenuePlaceHolder'

const __card = props => ({
	...margin('8', 'auto'),
	backgroundColor: '#fff',
	display: 'flex',
	alignItems: 'flex-start',
	border: props.theme.border,
	borderRadius: props.theme.borderRadius,
	mobileXs: {
		width: `${props.lockWidth ? '270' : 'auto'}`,
	},
	mobileX: {
		width: `${props.lockWidth ? '320' : 'auto'}`,
	},
	height: props.height || 'auto',
	...props.theme.regularBaseFont,
	position: 'relative',
	overflow: 'hidden',
	extend: {
		condition: props.horizontalScroll,
		style: {
			...margin('8'),
			mobileXs: {
				minWidth: `${props.lockWidth ? '270' : 'auto'}`,
				height: 'auto',
			},
			mobileX: {
				minWidth: `${props.lockWidth ? '320' : 'auto'}`,
				height: 'auto',
			},
		},
	},
})

const Card = createComponent(__card, 'div', ['onClick'])

/** Venue card to be rendered on the venues page. */
const Venue = props => {
	const {
		isLoading,
		imageUrl,
		distance,
		title,
		address,
		venueCode,
		favourite,
		horizontalScroll,
		SynopsisVenue,
	} = props
	const venueSelect =
		props.handleVenueSelect &&
		props.handleVenueSelect.bind(null, title, venueCode)
	const propsAvailable = imageUrl || title || address || favourite || false

	const favouriteSelect = event => {
		if (props.handleFavouriteClick)
			props.handleFavouriteClick(venueCode, title)
		event.stopPropagation()
	}

	return isLoading || !propsAvailable ? (
		<VenuePlaceHolder lockWidth={props.lockWidth} />
	) : (
		<Card
			onClick={venueSelect}
			lockWidth={props.lockWidth}
			horizontalScroll={horizontalScroll}
			height={props.height}
		>
			<Image imageUrl={imageUrl} title={title} />
			<Info
				title={title}
				address={address}
				SynopsisVenue={SynopsisVenue}
			/>
			<Favorite
				distance={distance}
				favouriteSelect={favouriteSelect}
				favourite={favourite}
			/>
		</Card>
	)
}

VenueCard.propTypes = {
	/** URL for the venue image */
	imageUrl: PropTypes.string,
	/** Title of the venue */
	title: PropTypes.string,
	/** Address of the venue */
	address: PropTypes.string,
	/** Distance between venue and user's location */
	distance: PropTypes.string,
	/** Toggle this to toggle between placeholder and actual venue card */
	isLoading: PropTypes.bool,
	/** Callback to the page. It is a function */
	handleVenueSelect: PropTypes.func,
	/** Callback to the page for favourite icons. It is a function */
	handleFavouriteClick: PropTypes.func,
	/** Toggle favourite venue icon */
	favourite: PropTypes.bool,
}

VenueCard.defaultProps = {
	imageUrl: '',
	title: '',
	address: '',
	distance: '',
	isLoading: false,
	lockWidth: true,
	height: '',
}

export default function VenueCard({ children, ...props }) {
	return <Venue {...props}>{children}</Venue>
}
