import React from 'react'
import PropTypes from 'prop-types'
import { padding } from 'polished'
import { createComponent } from 'react-fela'
import debounce from 'lodash/debounce'

import Icon from '../../common/ui/Icon'

const __input = ({ theme, icon }) => ({
	...theme.regularBaseFont,
	border: 'none',
	backgroundColor: theme.colorWhite,
	color: theme.colorGrayLight,
	...padding(12, 12, 12, icon ? 34 : 12),
	borderRadius: theme.borderRadius,
	boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.1)',
	width: '100%',
	outline: 'none',
	onFocus: {
		outline: 'none',
	},
})

const __inputIcon = () => ({
	width: 18,
	height: 18,
	position: 'absolute',
	top: '50%',
	left: 10,
	transform: 'translateY(-50%)',
	'> svg': {
		width: '100%',
		height: '100%',
	},
})

const Input = createComponent(__input, 'input', [
	'type',
	'placeholder',
	'icon',
	'value',
	'required',
	'readOnly',
])
const InputIcon = createComponent(__inputIcon, 'div')

class TextInput extends React.Component {
	constructor(props) {
		super(props)
		this.debounceEvent = val => this.keyDownEvent(val)
		this.doDebounceEvent = debounce(this.debounceEvent, 600)
	}
	keyDownEvent(value) {
		if (typeof this.props.handleChange === 'function') {
			this.props.handleChange(value)
		}
	}
	render() {
		return (
			<div style={{ position: 'relative' }}>
				{this.props.icon && (
					<InputIcon>
						<Icon glyph={this.props.icon} />
					</InputIcon>
				)}
				<Input
					type="text"
					placeholder={this.props.placeholder}
					icon={this.props.icon}
					onChange={e => {
						this.doDebounceEvent(e.target.value)
					}}
					passThrough={['onChange']}
				/>
			</div>
		)
	}
}

TextInput.propTypes = {
	/** Placeholder for the input element */
	placeholder: PropTypes.string,
	/** Icon on the left of input element */
	icon: PropTypes.object,
	/** Required attribute of input element */
	required: PropTypes.bool,
	/** Readonly attribute of input element */
	readOnly: PropTypes.bool,
	/** Value attribute of input element */
	value: PropTypes.string,
	/** Value attribute of input element */
	handleChange: PropTypes.func,
}

TextInput.defaultProps = {
	placeholder: '',
	required: false,
	readOnly: false,
	value: '',
	handleChange: () => {},
}

export default TextInput
