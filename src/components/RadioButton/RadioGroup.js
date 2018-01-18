import React from 'react'
import PropTypes from 'prop-types'
import { createComponent } from 'react-fela'

import { __radioGroup } from './__style'

const RadioGroupComponent = props => (
	<div className={props.className}>
		{React.Children.map(props.children, Radio =>
			React.cloneElement(Radio, {
				key: Radio.props.name,
				connectToEvent: props.connectToEvent || false,
				checked: props.value === Radio.props.value,
				onChange: props.onChange,
			})
		)}
	</div>
)

RadioGroupComponent.propTypes = {
	className: PropTypes.string,
	children: PropTypes.node,
	value: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
}

const RadioGroupComponentStyled = createComponent(
	__radioGroup,
	RadioGroupComponent,
	props => Object.keys(props)
)

export default function RadioGroup({ children, ...props }) {
	return (
		<RadioGroupComponentStyled {...props}>
			{children}
		</RadioGroupComponentStyled>
	)
}
