import { __DateBlock } from '../__style'
import React from 'react'
import { withTheme } from 'react-fela'
import PropTypes from 'prop-types'

const DateBlock = ({ month, date, day, theme }, { renderer }) => (
	<div className={renderer.renderRule(__DateBlock, theme)}>
		<div className="_month">{month}</div>
		<div className="_date">{date}</div>
		<div className="_day">{day}</div>
	</div>
)
DateBlock.contextTypes = {
	renderer: PropTypes.object,
}
DateBlock.propTypes = {
	month: PropTypes.string,
	date: PropTypes.string,
	day: PropTypes.string,
}

export default withTheme(DateBlock)
