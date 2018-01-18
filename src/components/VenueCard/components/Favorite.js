import React from 'react'
import PropTypes from 'prop-types'
import { createComponent } from 'react-fela'

import UnfilledHeartSvg from '../../../common/icons/heart-unfilled.svg'
import FilledHeartSvg from '../../../common/icons/heart-filled.svg'
import Icon from '../../../common/ui/Icon'

const __heartIcon = props => ({
	width: '15',
	height: '15',
	position: 'absolute',
	top: '10',
	right: '10',
	color: props.theme.colorWhite,
})

const __distance = props => ({
	color: '#999',
	fontSize: props.theme.fontSize.xs,
	position: 'absolute',
	bottom: '15',
	right: '15',
})

const HeartIcon = createComponent(__heartIcon)
const Distance = createComponent(__distance)

const Favorite = props => (
	<div
		onKeyUp={props.favouriteSelect}
		role="presentation"
		onClick={props.favouriteSelect}
	>
		<HeartIcon>
			<Icon glyph={props.favourite ? FilledHeartSvg : UnfilledHeartSvg} />
		</HeartIcon>
		<Distance>{props.distance}</Distance>
	</div>
)

Favorite.propTypes = {
	distance: PropTypes.string,
}

Favorite.defaultProps = {
	distance: '',
}

export default Favorite
