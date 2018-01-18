import React from 'react'
import { createComponent } from 'react-fela'
import PropTypes from 'prop-types'
import { Box } from 'kilvin'
import { hrefHandler } from '../../../utils/helpers'
import LazyImage from '../../../common/ui/LazyImage'
import {
	recoVenueSeeAll,
	recoVenuePreloader,
	noRecoVenuePlaceholder,
} from '../../../common/config'
import { __card, __seeAll, __title, __image } from '../__style'

const Card = createComponent(__card, 'div', ['onClick'])
const SeeAll = createComponent(__seeAll)
const Title = createComponent(__title, 'p')
const BaseImg = createComponent(__image, 'div')

const CardStack = ({ venues, displayLimit, href }) => {
	const venuesData = venues && venues.slice(0, displayLimit)

	return (
		<Box
			row
			alignItems="flex-start"
			overflow
			style={{ maxWidth: 'fit-content' }}
		>
			{venuesData.map(
				(venue, index) =>
					index !== venuesData.length - 1 ? (
						<Card
							clickable={typeof venue.href !== 'undefined'}
							key={`${venue.venueName + index}-Card$`}
							onClick={hrefHandler(venue.href)}
						>
							<BaseImg>
								<LazyImage
									tinySrc={recoVenuePreloader}
									src={venue.imageUrl}
									alt={venue.venueName}
									srcErr={noRecoVenuePlaceholder}
								/>
							</BaseImg>
							<Title>{venue.venueName}</Title>
						</Card>
					) : (
						<Card
							clickable={typeof href !== 'undefined'}
							key={venue.venueName}
							last
							onClick={hrefHandler(venue.href)}
						>
							<BaseImg last>
								<LazyImage
									tinySrc={recoVenueSeeAll}
									src={recoVenueSeeAll}
									alt="See All"
									srcErr={recoVenueSeeAll}
								/>
							</BaseImg>
							<SeeAll>See All +</SeeAll>
						</Card>
					)
			)}
		</Box>
	)
}
CardStack.propTypes = {
	displayLimit: PropTypes.number,
	venues: PropTypes.arrayOf(
		PropTypes.shape({
			imageUrl: PropTypes.string.isRequired,
			venueName: PropTypes.string.isRequired,
			href: PropTypes.oneOfType[(PropTypes.string, PropTypes.func)],
		})
	),
}
export default CardStack
