// @flow
import React, { PureComponent } from 'react'
import { createComponent } from 'react-fela'
import { Box } from 'kilvin'
import VenueCard from './components/Card'
import LoadingVenueList from './components/LoadingVenueList'
import {
	__wrapper,
	__mainTitle,
	__seeall,
	__collectionScroller,
	__innerScroll,
	__titleContainer,
} from './__styles'

const Wrapper = createComponent(__wrapper, 'div')
const TitleContainer = createComponent(__titleContainer, 'div')
const Title = createComponent(__mainTitle, 'div')
const SeeAll = createComponent(__seeall, 'a', ['onClick'])
const CollectionScroller = createComponent(__collectionScroller)
const InnerScroll = createComponent(__innerScroll)
type Props = {
	/** Array containing the list of venues */
	venues?: Array<{
		/** Image url of the card. First three objects are shown always */
		imageUrl: String,
		/** Image label to be shown below */
		venueName: String,
		/** Callback to the identied venue page. Accepts a url string or a dispatch function */
		href: String | Function,
		/** adress of the venue */
		address: String,
	}>,
	/** Header of the list */
	title?: String,
	/** Tagline for the list */
	description?: String,
	/** Select true or false to show or hide the loader  */
	isLoading?: Boolean,
	/** Set the display based on screen size or else show auto */
	lockWidth?: Boolean,
	/** Callback to the full listing page url. Can be a function or a path string */
	seeAllHref?: String | Function,
}

class VenuesList extends PureComponent<Props> {
	render() {
		const { title, description, isLoading, venues, seeAllHref } = this.props

		if (!isLoading && venues.length === 0) {
			return null
		}

		return isLoading ? (
			<LoadingVenueList />
		) : (
			<Wrapper>
				<TitleContainer>
					<Title className="title">
						<h2>{title}</h2>
						<h4>{description}</h4>
					</Title>
					{seeAllHref && (
						<SeeAll onClick={seeAllHref}>See All</SeeAll>
					)}
				</TitleContainer>
				<CollectionScroller className="cardsList">
					<InnerScroll>
						{venues.map(venue => (
							<VenueCard key={venue.venueCode} {...venue} />
						))}
					</InnerScroll>
				</CollectionScroller>
			</Wrapper>
		)
	}
}

/** Default PropTypes when nothing is passed , hence empty */
VenuesList.defaultProps = {
	venues: [],
	isLoading: false,
	lockWidth: false,
	href: () => {},
}

export default VenuesList
