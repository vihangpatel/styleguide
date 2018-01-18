import React from 'react'
import { Box, Spacer } from 'kilvin'
import { createComponent } from 'react-fela'
import { PlaceHolder } from 'design-framework/common/ui/PlaceHolder'
import VenueCard from './Card'
import {
	__wrapper,
	__mainTitle,
	__collectionScroller,
	__innerScroll,
} from '../__styles'

const Wrapper = createComponent(__wrapper, 'div')
const Title = createComponent(__mainTitle, 'div')
const CollectionScroller = createComponent(__collectionScroller)
const InnerScroll = createComponent(__innerScroll)

const LoadingVenueList = () => (
	<Wrapper>
		<Box row justifyContent="space-between">
			<Title className="title">
				<PlaceHolder width={150} height={16} />
				<Spacer size={2} />
				<PlaceHolder width={100} height={10} />
			</Title>
		</Box>
		<CollectionScroller className="cardsList">
			<InnerScroll>
				{[...Array(3)].fill().map((_, index) => (
					// eslint-disable-next-line react/no-array-index-key
					<VenueCard loading key={`${index}-placeholder`} />
				))}
			</InnerScroll>
		</CollectionScroller>
	</Wrapper>
)

export default LoadingVenueList
