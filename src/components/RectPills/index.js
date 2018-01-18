import React from 'react'
import PropTypes from 'prop-types'
import { createComponent } from 'react-fela'

import { __pills, __listItem } from './__style'

const Pill = createComponent(__pills)
const ListItem = createComponent(__listItem, 'li', ['onClick', 'data-label'])
// if not wrapped in a stateless component, the export is not found.
// Probably issue with styleguidist or fela.

class RectPills extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			list: props.list,
		}
		this.renderPills = this.renderPills.bind(this)
		this.handleClick = this.handleClick.bind(this)
	}
	componentWillReceiveProps(props) {
		this.setState({
			list: props.list,
		})
	}
	handleClick(e) {
		const pill = e.target.dataset.label
		const currentState = this.state.list[pill]

		const newList = {}
		/**
		 * When 'required' flag is enabled, at least one pill should be selected.
		 */
		let pillsSelected = 0
		Object.keys(this.state.list || {}).forEach(label => {
			newList[label] = label === pill ? !currentState : false
			pillsSelected += newList[label]
		})

		// If minimum one pill is required to be selected, and no pills is selected, then return
		if (this.props.required && !pillsSelected) {
			return
		}

		this.setState({
			list: newList,
		})
		if (typeof this.props.onToggle === 'function')
			this.props.onToggle({
				title: this.props.title || '',
				slug: this.props.slug || '',
				label: pill,
				isActive: !currentState,
				list: pill,
			})
	}

	format(label) {
		if (this.props.format) {
			return this.props.format(label)
		}

		return label
	}

	renderPills(list, clickable) {
		const pill = []
		Object.keys(list || {}).forEach(label => {
			pill.push(
				<ListItem
					key={label}
					data-label={label}
					isActive={this.state.list[label] || false}
					onClick={clickable ? this.handleClick : () => {}}
					{...this.props}
				>
					{this.format(label)}
				</ListItem>
			)
		})

		return pill
	}
	render() {
		return (
			<Pill {...this.props} scrollablePills={this.props.scrollablePills}>
				<ul>
					{this.renderPills(this.props.list, this.props.clickable)}
				</ul>
			</Pill>
		)
	}
}

RectPills.propTypes = {
	/** Sets the background color of the pills */
	backgroundColor: PropTypes.string,
	/** Sets the font weight of the pills */
	fontWeight: PropTypes.string,
	/** Sets the font size of the pills */
	fontSize: PropTypes.string,
	/** Sets the padding top of the pills */
	paddingTop: PropTypes.string,
	/** Sets the padding bottom of the pills */
	paddingBottom: PropTypes.string,
	/** Sets the padding left of the pills */
	paddingLeft: PropTypes.string,
	/** Sets the padding right of the pills */
	paddingRight: PropTypes.string,
	/** Sets the text style of the pills */
	textTransform: PropTypes.string,
	/** Keys: Labels of pills, Values: is pill active? */
	list: PropTypes.objectOf(PropTypes.bool),
	/** Sets the padding right of the pills */
	marginRight: PropTypes.string,
	/** render list of pills */
	renderPills: PropTypes.func,
	/** Callback called when a pill is clicked. Param to callback: Pill text */
	onToggle: PropTypes.func,
	/** Should be clickable or not */
	clickable: PropTypes.bool,
	/** A title to bind the set of pills to. Will be passed in the callback */
	title: PropTypes.string,
	/** We need the slug for toggle in Filters.js page. Will be set as key value which will hold the clicked pill data */
	slug: PropTypes.string,
	/** To enable scroll for pills wrapper */
	scrollablePills: PropTypes.bool,
	/** To keep atleast one pill selected */
	required: PropTypes.bool,
}

RectPills.defaultProps = {
	clickable: true,
	scrollablePills: false,
}
RectPills.contextTypes = {
	theme: PropTypes.object,
}

export default RectPills
