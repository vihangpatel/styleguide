import React from 'react'
import PropTypes from 'prop-types'

import { Header, Content, Container } from './__style'

import Icon from '../../common/ui/Icon'
import UpArrow from '../../common/icons/arrow-down.svg'

/** A component that expands when the arrow is clicked. */
class Expandable extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			isExpanded: props.isExpanded || false,
		}
		this.handleClick = this.handleClick.bind(this)
	}
	handleClick() {
		this.setState({
			isExpanded: !this.state.isExpanded,
		})
	}
	render() {
		return (
			<Container showBorder={this.props.showBorder}>
				<Header
					isExpanded={this.state.isExpanded}
					onClick={this.handleClick}
				>
					<div>{this.props.header}</div>
					<Icon glyph={UpArrow} />
				</Header>
				<Content isExpanded={this.state.isExpanded}>
					{this.props.content}
				</Content>
			</Container>
		)
	}
}

Expandable.propTypes = {
	/** React component or DOM for the header */
	header: PropTypes.node.isRequired,
	/** React component or DOM for the Expanded content */
	content: PropTypes.node.isRequired,
	/** Is it expanded by default? */
	isExpanded: PropTypes.bool,
	/** Show a border on the bottom */
	showBorder: PropTypes.bool,
}

Expandable.defaultProps = {
	isExpanded: false,
	showBorder: true,
}

export default Expandable
