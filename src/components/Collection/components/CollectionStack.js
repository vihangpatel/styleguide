import React from 'react'
import { createComponent } from 'react-fela'
import LazyImage from 'design-framework/common/ui/LazyImage'
import { __collectionScroller, __innerScroll, __card } from '../__style'
import { hrefHandler } from 'design-framework/utils/helpers'

const CollectionScroller = createComponent(__collectionScroller)
const InnerScroll = createComponent(__innerScroll)
const Card = createComponent(__card, 'div', ['onClick'])

const CollectionStack = ({ cards }) => (
	<CollectionScroller>
		<InnerScroll>
			{cards.map(item => (
				// eslint-disable-next-line react/no-array-index-key
				<Card
					key={`collection-${item.description}-card`}
					cid={item.cid}
					onClick={item.href && hrefHandler(item.href)}
				>
					<LazyImage alt={item.description} src={item.image} />
				</Card>
			))}
		</InnerScroll>
	</CollectionScroller>
)

export default CollectionStack
