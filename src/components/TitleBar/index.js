import React from 'react'
import PropTypes from 'prop-types'
import { createComponent } from 'react-fela'
import { __outerBox, __title, __buttonRight } from './__style'
import Button from '../Button'

const OuterBox = createComponent(__outerBox)
const Title = createComponent(__title)
const ButtonRight = createComponent(__buttonRight)

const TitleBar = props => (
	<OuterBox>
		<Title>{props.title}</Title>
		<ButtonRight>
			<Button {...props.buttonProps} />
		</ButtonRight>
	</OuterBox>
)

TitleBar.propTypes = {
	/** Sets the title. */
	title: PropTypes.string,
	/** main click handler action binding. */
	href: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
	/** Props for the button on the right. */
	buttonProps: PropTypes.object,
}

TitleBar.defaultProps = {}

export default TitleBar
