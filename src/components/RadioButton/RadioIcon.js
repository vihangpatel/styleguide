import React from 'react'
import PropTypes from 'prop-types'
import { createComponent } from 'react-fela'

import { __label, __input, __radio } from './__style'

const Label = createComponent(__label, 'span')
const Input = createComponent(__input, 'input', [
	'type',
	'className',
	'id',
	'name',
	'value',
	'checked',
	'onChange',
])

class RadioComponent extends React.Component {
	constructor(props) {
		super(props)
		this.handleChange = this.handleChange.bind(this)
	}

	handleChange(e) {
		if (this.props.connectToEvent) {
			e.persist()
			this.props.onChange(e)
		} else {
			this.props.onChange(e.target.value)
		}
	}

	render() {
		const LabelComponent = this.props.labelComponent || null

		return (
			<label
				htmlFor={this.props.name}
				style={{ margin: '10px', display: 'flex' }}
			>
				<Input
					type="radio"
					id={this.props.name}
					name={this.props.name}
					value={this.props.value}
					checked={this.props.checked}
					onChange={this.handleChange}
				/>
				{this.props.label && <Label>{this.props.label}</Label>}
				{LabelComponent}
			</label>
		)
	}
}

const RadioComponentStyled = createComponent(__radio, RadioComponent, props =>
	Object.keys(props)
)

RadioIcon.propTypes = {
	className: PropTypes.string,
	label: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([false])])
		.isRequired,
	name: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	checked: PropTypes.bool.isRequired,
	onChange: PropTypes.func.isRequired,
}

export default function RadioIcon({ children, ...props }) {
	return <RadioComponentStyled {...props}>{children}</RadioComponentStyled>
}
