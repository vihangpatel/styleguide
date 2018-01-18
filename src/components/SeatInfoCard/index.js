import React from 'react'
import PropTypes from 'prop-types'
import { createComponent } from 'react-fela'
import { hrefHandler } from '../../utils/helpers'
import {
	_cardWrapper,
	_headerContainer,
	_priceContainer,
	_nextArrow,
	_colorIndicator,
	_zoneIndicator,
	_infoContainer,
} from './__style.js'
import nextSvg from '../../common/icons/titlebar-back.svg'
import Icon from '../../common/ui/Icon'

const CardWrapper = createComponent(_cardWrapper, 'div', ['onClick'])
const HeaderContainer = createComponent(_headerContainer)
const PriceContainer = createComponent(_priceContainer)
const ColorIndicator = createComponent(_colorIndicator)
const NextArrow = createComponent(_nextArrow)
const Zone = createComponent(_zoneIndicator)
const Info = createComponent(_infoContainer)

const SeatInfoCard = props => (
	<CardWrapper onClick={props.href}>
		<HeaderContainer>
			<PriceContainer>
				<ColorIndicator bgColor={props.color} />
				<div>{props.price}</div>
			</PriceContainer>
			<NextArrow>
				<Icon glyph={nextSvg} />
			</NextArrow>
		</HeaderContainer>
		<Zone>{props.zone}</Zone>
		<Info>{props.info}</Info>
	</CardWrapper>
)

SeatInfoCard.propTypes = {
	/** Color indicator to show the particular seat type */
	color: PropTypes.string,
	/** Price details */
	price: PropTypes.string,
	/** Zone info to show the ticket selected section */
	zone: PropTypes.string,
	/** Description of the selected seat */
	info: PropTypes.string,
}

export default SeatInfoCard
