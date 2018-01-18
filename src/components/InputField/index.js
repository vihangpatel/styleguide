import React, { Component } from 'react'
import { createComponent, createComponentWithProxy } from 'react-fela'
import { __input, __addon, __text, __border, __wrapField } from './__styles'

const Input = createComponent(__input, 'input', [
	'type',
	'name',
	'maxLength',
	'value',
	'onChange',
	'onFocus',
	'onBlur',
	'placeholder',
	'readOnly',
])
const Border = createComponent(__border)
const Addon = createComponent(__addon)
export const Text = createComponent(__text)
const WrapField = createComponentWithProxy(__wrapField)

// @flow
type Props = {
	/** Type of field: text, email, phone,... */
	type: string,
	/** Placeholder of field */
	placeholder: string,
	/** A react component to show on the right of input field */
	addon: React.Node,
	/** Text to show below input field on successful validation */
	successText: string,
	/** Text to show below input field on unsuccessful validation */
	errorText: string,
	/** Function to handle the onChange of the input field */
	onChange: any => any,
	/** Function to handle the onBlur of the input field */
	onBlur: any => any,
	/** Limit the length of the string */
	maxLength: number,
	/** Make the field read-only */
	readOnly: boolean,
}
type State = {
	focused: boolean,
}

/** Material UI style text field for forms */
export default class InputField extends Component<Props, State> {
	constructor(props) {
		super(props)
		this.state = {
			focused: false,
			value: props.value || '',
		}
	}
	componentWillReceiveProps(nextProps) {
		if (nextProps.value !== this.state.value) {
			this.setState({
				value: nextProps.value,
			})
		}
	}
	onChange = event => {
		event.persist()
		const passEvent = event
		this.setState({ value: event.target.value }, () => {
			if (this.props.onChange) this.props.onChange(passEvent)
		})
	}

	setFocus = () => this.setState({ focused: true })

	unsetFocus = event => {
		event.persist()
		const passEvent = event
		this.setState({ focused: false }, () => {
			if (this.props.onBlur) this.props.onBlur(passEvent)
		})
	}

	render() {
		const {
			type,
			name,
			placeholder,
			addon,
			errorText,
			successText,
			maxLength,
			readOnly,
		} = this.props

		return (
			<div style={{ position: 'relative' }}>
				<WrapField>
					<Input
						type={type}
						name={name}
						maxLength={maxLength || ''}
						value={this.state.value}
						onChange={this.onChange}
						onFocus={this.setFocus}
						onBlur={this.unsetFocus}
						placeholder={placeholder}
						readOnly={readOnly || false}
						hasError={errorText && errorText.length}
						hasSuccess={successText && successText.length}
					/>
					{addon && <Addon>{addon}</Addon>}
					<Border focused={this.state.focused} />
				</WrapField>
				{!errorText && !successText && <Text />}
				{errorText && <Text hasError>{errorText}</Text>}
				{successText && <Text hasSuccess>{successText}</Text>}
			</div>
		)
	}
}
