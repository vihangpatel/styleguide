import React from 'react'
import PropTypes from 'prop-types'
import { createComponent } from 'react-fela'
import { Box } from 'kilvin'

import LazyImage from '../../common/ui/LazyImage'
import { noEventPreviewImageUrl, eventPreloaderUrl } from '../../common/config'
import { hrefHandler } from '../../utils/helpers'
import {
	__Card,
	__Image,
	__Price,
	__wrap,
	__blurimg,
	__imgWrap,
	__blurOverlay,
	__featured,
	__iconWrapper,
} from './__style'
import FeaturedRibbon from 'design-framework/common/icons/featured-ribbon.svg'
import Icon from 'design-framework/common/ui/Icon'

// import all components if any
import DateBlock from './components/DateBlock'
import DetailBlock from './components/Detail'
import PlaceHolder from './components/PlaceHolder'

const WrapMain = createComponent(__Card)
const Image = createComponent(__Image)
const PriceInfo = createComponent(__Price)
const WrapDetail = createComponent(__wrap)
const BlurBanner = createComponent(__blurimg)
const ImageWrapper = createComponent(__imgWrap)
const BlurOverlay = createComponent(__blurOverlay)
const Featured = createComponent(__featured)
const IconWrapper = createComponent(__iconWrapper)

const EventCardV2 = props => {
	const { loading, lockWidth, height, ...otherProps } = props

	return (
		<div>
			<WrapMain lockWidth={lockWidth} height={height}>
				{loading ? (
					<DefaultCard {...otherProps} />
				) : (
					<DetailCard {...otherProps} />
				)}
			</WrapMain>
		</div>
	)
}

const DefaultCard = () => (
	<div>
		<PlaceHolder />
	</div>
)

const DetailCard = ({
	banner,
	bannerName,
	price,
	month,
	date,
	day,
	title,
	venue,
	type,
	href,
	isFeatured,
}) => {
	const isNonPriced = parseInt(price, 10) <= 0 || isNaN(price)

	return (
		<div
			onClick={hrefHandler(href)}
			onKeyDown={hrefHandler(href)}
			role="presentation"
		>
			<ImageWrapper>
				<BlurBanner>
					<LazyImage
						tinySrc={eventPreloaderUrl}
						src={banner}
						alt={bannerName || title}
						srcErr={noEventPreviewImageUrl}
					/>
					<BlurOverlay />
				</BlurBanner>
				<Image>
					<LazyImage
						tinySrc={eventPreloaderUrl}
						src={banner}
						alt={bannerName || title}
						srcErr={noEventPreviewImageUrl}
					/>
				</Image>
			</ImageWrapper>
			<WrapDetail isNonPriced={isNonPriced}>
				<DateBlock
					{...{
						month,
						date,
						day,
					}}
				/>
				<DetailBlock
					{...{
						title,
						venue,
						type,
					}}
				/>
			</WrapDetail>
			<Box
				style={{ borderTop: '1px solid #f5f5fa', padding: '12px 8px' }}
				row
			>
				{isFeatured && (
					<Featured>
						<p>FEATURED</p>
						<IconWrapper>
							<Icon glyph={FeaturedRibbon} />
						</IconWrapper>
					</Featured>
				)}
				{!isNonPriced && <PriceInfo>&#8377; {price} Onwards</PriceInfo>}
			</Box>
		</div>
	)
}

EventCardV2.propTypes = {
	/** Whether to default the container width to 350px */
	lockWidth: PropTypes.bool,
	/** Height for the EventcardV2 */
	height: PropTypes.string,
	/** Gets called when the user clicks on the button */
	onClick: PropTypes.func,
	/** EventBanner Name for the event */
	bannerName: PropTypes.string,
	/** EventBanner Image for the event */
	banner: PropTypes.string,
	/** PriceInfo for the event */
	price: PropTypes.number,
	/** EventMonth for the event */
	month: PropTypes.string,
	/** EventDate for the event */
	date: PropTypes.string,
	/** EventDay for the event */
	day: PropTypes.string,
	/** EventTitle for the event */
	title: PropTypes.string,
	/** EventVenue for the event */
	venue: PropTypes.string,
	/** EventType for the event */
	type: PropTypes.string,
	/** Add a FEATURED ribbon in card's footer */
	isFeatured: PropTypes.bool,
}

export default EventCardV2
