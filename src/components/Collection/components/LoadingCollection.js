import React from 'react'
import { createComponent } from 'react-fela'
import { Spacer } from 'kilvin'
import { __collectionScroller, __innerScroll, __card } from '../__style'
import { PlaceHolder } from 'design-framework/common/ui/PlaceHolder'

const CollectionScroller = createComponent(__collectionScroller)
const InnerScroll = createComponent(__innerScroll)
const Card = createComponent(__card, 'div')

const LoadingCollectionStack = () => (
	<div>
		<PlaceHolder width={200} height={16} />
		<Spacer size={5} />
		<PlaceHolder width={150} height={10} />

		<Spacer size={13} />
		<CollectionScroller>
			<InnerScroll>
				{[...Array(3)].fill().map((_, index) => (
					// eslint-disable-next-line react/no-array-index-key
					<Card loading key={`${index}-placeholder`} />
				))}
			</InnerScroll>
		</CollectionScroller>
	</div>
)

export default LoadingCollectionStack
