import React from 'react'
import PropTypes from 'prop-types'
import { createComponent } from 'react-fela'
import { padding } from 'polished'

const __info = props => ({
	...props.theme.regularBaseFont,
	width: '50%',
	flexGrow: '0',
	...padding('12', '0'),
})

const __title = props => ({
	...props.theme.regularBaseFont,
	fontSize: props.theme.fontSize.s,
	fontWeight: '500',
	color: props.theme.colorGrayBorder,
	margin: '0',
	maxHeight: '50',
	overflow: 'hidden',
})

const __address = props => ({
	...props.theme.regularBaseFont,
	whiteSpace: 'nowrap',
	overflow: 'hidden',
	textOverflow: 'ellipsis',
	fontSize: props.theme.fontSize.s,
	color: props.theme.colorGrayBorder,
	margin: '0',
	maxHeight: '25',
	...padding('4', '0'),
	extend: {
		condition: props.SynopsisVenue,
		style: {
			maxHeight: 'none',
			whiteSpace: 'initial',
		},
	},
})

const Info = createComponent(__info)
const Title = createComponent(__title, 'p')
const Address = createComponent(__address, 'p')

const VenueInfo = props => (
	<Info>
		<Title>{props.title}</Title>
		<Address SynopsisVenue={props.SynopsisVenue}>{props.address}</Address>
	</Info>
)

VenueInfo.propTypes = {
	title: PropTypes.string,
	address: PropTypes.string,
	SynopsisVenue: PropTypes.bool,
}

VenueInfo.defaultProps = {
	title: '',
	address: '',
	SynopsisVenue: false,
}

export default VenueInfo
