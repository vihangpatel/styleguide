import { __DetailBlock } from '../__style'
import React from 'react'
import { withTheme } from 'react-fela'
import PropTypes from 'prop-types'

const DetailBlock = ({ title, venue, type, theme }, { renderer }) => (
	<div className={renderer.renderRule(__DetailBlock, theme)}>
		<div className="_title">{title}</div>
		<div className="_venue">{venue}</div>
		<div className="_type">{type}</div>
	</div>
)
DetailBlock.contextTypes = {
	renderer: PropTypes.object,
}
DetailBlock.propTypes = {
	title: PropTypes.string,
	venue: PropTypes.string,
	type: PropTypes.string,
}

export default withTheme(DetailBlock)
