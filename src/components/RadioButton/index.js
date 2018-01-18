import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Slider, Handle } from './__style'
import theme from '../../utils/base-ui-theme'

/**
 * A radio button that can be switched on and off
 */
export default class RadioButton extends Component {
	static propTypes = {
		/** Fill color when radio button is on. */
		fillColor: PropTypes.string,
		/** Width of the radio button. (Height is set to 0.4 * size). */
		size: PropTypes.number,
		/** Toggle this to switch the radio button on and off. */
		isOn: PropTypes.bool,
		/** Toggle this to enable and disable the radio button. */
		isEnabled: PropTypes.bool,
		/** Enable the radio button but not toggleable */
		isReadOnly: PropTypes.bool,
		/** Callback to call when radio button is toggled. */
		onToggle: PropTypes.func,
	}

	static defaultProps = {
		size: 35,
		isOn: false,
		isEnabled: true,
		isReadOnly: false,
		fillColor: theme.color.seaGreen,
	}

	static contextTypes = {
		theme: PropTypes.object,
	}

	constructor(props) {
		super(props)
		this.state = {
			isOn: props.isOn,
		}
		this.toggleButton = this.toggleButton.bind(this)
	}

	componentWillReceiveProps(nextProps) {
		if (this.props.isOn !== nextProps.isOn)
			this.setState({ isOn: nextProps.isOn })
	}

	toggleButton() {
		if (!this.props.readOnly) {
			const newIsOn = !this.state.isOn
			this.setState({
				isOn: newIsOn,
			})
			this.props.onToggle(newIsOn)
		}
	}

	renderInputElement() {
		if (!this.props.isEnabled || this.props.isReadOnly)
			return (
				<input
					type="checkbox"
					disabled={!this.props.isEnabled}
					checked={this.props.isEnabled && this.state.isOn}
					readOnly={this.props.isEnabled && this.props.isReadOnly}
					value={this.props.isEnabled ? this.state.isOn : ''}
				/>
			)

		return (
			<input
				type="checkbox"
				value={this.state.isOn}
				checked={this.state.isOn}
				onChange={this.toggleButton}
			/>
		)
	}

	render() {
		return (
			<div>
				<Slider
					isOn={this.state.isOn}
					isEnabled={this.props.isEnabled}
					size={this.props.size}
					fillColor={this.props.fillColor}
				>
					{this.renderInputElement()}
					<Handle
						isOn={this.state.isOn}
						isEnabled={this.props.isEnabled}
						size={this.props.size}
					/>
				</Slider>
			</div>
		)
	}
}
