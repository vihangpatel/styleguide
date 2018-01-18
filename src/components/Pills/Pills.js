import React from 'react'
import PropTypes from 'prop-types'
import { createComponent } from 'react-fela'

import pick from 'lodash/pick'
import { merge } from 'timm'
import unescape from 'lodash/unescape'
import { to12HrFormat } from 'events-client/common/utils/utilityHelpers'

import { __pills, __listItem } from './__style'

const Pill = createComponent(__pills)
const ListItem = createComponent(__listItem, 'li', ['onClick'])
// if not wrapped in a stateless component, the export is not found.
// Probably issue with styleguidist or fela.

class Pills extends React.Component {
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
		const pill = e.target.innerHTML
		const currentState = this.state.list[pill]

		if (this.props.allowMultiSelect) {
			this.setState({
				list: Object.assign({}, this.state.list, {
					[pill]: !currentState,
				}),
			})
			if (typeof this.props.onToggle === 'function')
				this.props.onToggle({
					title: this.props.title || '',
					slug: this.props.slug || '',
					label: pill,
					isActive: !currentState,
					list: Object.assign({}, this.state.list, {
						[pill]: !currentState,
					}),
				})
		} else {
			const newList = {}
			Object.keys(this.state.list || {}).forEach(label => {
				newList[label] = label === pill ? !currentState : false
			})
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
	}
	renderPills(list, clickable, convertTo12, displayLimit) {
		const pill = []
		let pillList = list
		const listKeys = Object.keys(pillList)
		// Display elements based on the displayLimit
		if (displayLimit && listKeys.length > displayLimit) {
			const reducedList = pick(pillList, listKeys.slice(0, displayLimit))
			pillList = merge(reducedList, {
				[`+${listKeys.length - displayLimit}`]: true,
			})
		}
		Object.keys(pillList || {}).forEach(label => {
			pill.push(
				<ListItem
					key={label}
					isActive={this.state.list[label] || false}
					onClick={clickable ? this.handleClick : () => {}}
					{...this.props}
				>
					{convertTo12 ? to12HrFormat(label) : unescape(label)}
				</ListItem>
			)
		})

		return pill
	}
	render() {
		return (
			<Pill {...this.props} scrollablePills={this.props.scrollablePills}>
				<ul>
					{this.renderPills(
						this.props.list,
						this.props.clickable,
						this.props.convertTo12,
						this.props.displayLimit
					)}
				</ul>
			</Pill>
		)
	}
}

Pills.propTypes = {
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
	/** Can multiple pills be selected */
	allowMultiSelect: PropTypes.bool,
	/** Should be clickable or not */
	clickable: PropTypes.bool,
	/** A title to bind the set of pills to. Will be passed in the callback */
	title: PropTypes.string,
	/** We need the slug for toggle in Filters.js page. Will be set as key value which will hold the clicked pill data */
	slug: PropTypes.string,
	/** To enable scroll for pills wrapper */
	scrollablePills: PropTypes.bool,
	/** To convert label to time format */
	convertTo12: PropTypes.bool,
}

Pills.defaultProps = {
	allowMultiSelect: false,
	clickable: true,
	scrollablePills: false,
	convertTo12: false,
}
Pills.contextTypes = {
	theme: PropTypes.object,
}

export default Pills
