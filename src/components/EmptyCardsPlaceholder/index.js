import React from 'react'
import PropTypes from 'prop-types'
import { createComponent } from 'react-fela'

import noDataSvg from '../../common/icons/empty-page.svg'
import Icon from '../../common/ui/Icon'

import {
	__emptyCardsPlaceholder,
	__noDataSvgContainer,
	__noDataDisplayText,
} from './__style'

const EmptyCardsPlaceholderContainer = createComponent(
	__emptyCardsPlaceholder,
	'div'
)
const NoDataSvgContainer = createComponent(__noDataSvgContainer, 'div')
const NoDataDisplayText = createComponent(__noDataDisplayText)

const EmptyCardsPlaceholder = props => {
	const { emptyDataText, width, height, paddingTop } = props

	return (
		<EmptyCardsPlaceholderContainer width={width} height={height}>
			<NoDataSvgContainer paddingTop={paddingTop}>
				<Icon glyph={noDataSvg} style={{ width: '40%' }} />
			</NoDataSvgContainer>
			<NoDataDisplayText>{emptyDataText}</NoDataDisplayText>
		</EmptyCardsPlaceholderContainer>
	)
}

EmptyCardsPlaceholder.propTypes = {
	/** Text to be shown */
	emptyDataText: PropTypes.string,
	/** Width of the container */
	width: PropTypes.string,
	/** Height of the container */
	height: PropTypes.string,
	/** Padding for the svg in the page */
	paddingTop: PropTypes.string,
}

export default EmptyCardsPlaceholder
