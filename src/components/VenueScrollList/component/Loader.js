import React from 'react'
import PropTypes from 'prop-types'
import { createComponent } from 'react-fela'

import { __animate, __cardLoader, __titleLoader } from '../__style'

const Animate = createComponent(__animate)
const CardLoader = createComponent(__cardLoader)
const TitleLoader = createComponent(__titleLoader, 'p')

const PlaceHolder = () => (
	<Animate>
		{[...Array(3)].fill().map((_, index) => (
			// eslint-disable-next-line react/no-array-index-key
			<div key={`${index}-placeholder`}>
				<CardLoader key="card-place-holder" />
				<TitleLoader key="title-place-holder" />
			</div>
		))}
	</Animate>
)
PlaceHolder.propTypes = {
	lockWidth: PropTypes.bool,
}
export default PlaceHolder
