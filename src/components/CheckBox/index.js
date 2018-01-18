import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Box } from 'kilvin'

import Icon from '../../common/ui/Icon'
import CheckedIcon from '../../common/icons/checkbox-checked.svg'
import UncheckedIcon from '../../common/icons/checkbox-unchecked.svg'
import { Widget, Label } from './__style'
import theme from '../../utils/base-ui-theme'
/**
 * A checkbox that can be checked and unchecked.
 */
export default class CheckBox extends Component {
	static propTypes = {
		/** Fill color when checkbox is on. */
		filledColor: PropTypes.string,
		/** Fill color when checkbox is on. */
		unfilledColor: PropTypes.string,
		/** Width and height of the checkbox. */
		size: PropTypes.number,
		/** Toggle this to check and uncheck the checkbox. */
		isChecked: PropTypes.bool,
		/** Toggle this to enable and disable the checkbox. */
		isEnabled: PropTypes.bool,
		/** Checkbox is enabled but is not toggleable */
		isReadOnly: PropTypes.bool,
		/** Callback to call when checkbox is toggled. */
		onToggle: PropTypes.func,
		/** A title to identify checkbox uniquely. */
		title: PropTypes.string,
		/** Use title prop to add a text next to the checkbox */
		showTitle: PropTypes.bool,
	}

	static defaultProps = {
		size: 16,
		isChecked: false,
		isEnabled: true,
		isReadOnly: false,
		filledColor: theme.color.seaGreen,
		unfilledColor: '#5d5d60',
	}

	static contextTypes = {
		theme: PropTypes.object,
	}

	constructor(props) {
		super(props)
		this.state = {
			isChecked: props.isChecked,
		}
		this.toggleCheckBox = this.toggleCheckBox.bind(this)
		this.renderTitle = this.renderTitle.bind(this)
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.isChecked !== this.state.isChecked)
			this.setState({
				isChecked: nextProps.isChecked,
			})
	}

	toggleCheckBox() {
		if (!this.props.readOnly) {
			const newChecked = !this.state.isChecked
			this.setState({
				isChecked: newChecked,
			})
			this.props.onToggle(
				this.props.title
					? {
							title: this.props.title,
							isChecked: newChecked,
						}
					: newChecked
			)
		}
	}

	renderInputElement() {
		if (!this.props.isEnabled || this.props.isReadOnly)
			return (
				<input
					type="checkbox"
					disabled={!this.props.isEnabled}
					checked={this.props.isEnabled && this.state.isChecked}
					readOnly={this.props.isEnabled && this.props.isReadOnly}
					value={this.props.isEnabled ? this.state.isChecked : ''}
				/>
			)

		return (
			<input
				type="checkbox"
				value={this.state.isChecked}
				checked={this.state.isChecked}
				onChange={this.toggleCheckBox}
			/>
		)
	}

	renderTitle() {
		if (this.props.showTitle && this.props.title) {
			return (
				<Label onClick={this.toggleCheckBox}>{this.props.title}</Label>
			)
		}

		return null
	}

	render() {
		return (
			<Box row alignItems="center">
				<Widget
					isEnabled={this.props.isEnabled}
					isChecked={this.state.isChecked}
					size={this.props.size}
					filledColor={this.props.filledColor}
					unfilledColor={this.props.unfilledColor}
				>
					<Icon
						glyph={
							this.props.isEnabled && this.state.isChecked
								? CheckedIcon
								: UncheckedIcon
						}
					/>
					{this.renderInputElement()}
				</Widget>
				{this.renderTitle()}
			</Box>
		)
	}
}
