import React from 'react'
import PropTypes from 'prop-types'
import debounce from 'lodash/debounce'

class TextArea extends React.Component {
	constructor(props) {
		super(props)
		this.debounceEvent = val => this.keyDownEvent(val)
		this.doDebounceEvent = debounce(this.debounceEvent, 600)
	}

	render() {
		return (
			<textarea
				rows={this.props.rows}
				cols={this.props.cols}
				maxLength={this.props.maxLength}
				name={this.props.name}
				placeholder={this.props.placeholder}
				onChange={e => {
					this.doDebounceEvent(e.target.value)
				}}
				passthrough={['onChange']}
				style={{width:'100%',border:'1px solid #C9C9C9'}}
			/>
		)
	}
}

TextArea.propTypes = {
	rows: PropTypes.string,

	cols: PropTypes.string,
	/** Icon on the left of input element */
	maxLength: PropTypes.string,

	placeholder: PropTypes.string,

	name: PropTypes.string,
	/** Required attribute of input element */
	required: PropTypes.bool,
	/** Readonly attribute of input element */
	readOnly: PropTypes.bool,
	/** Value attribute of input element */
	value: PropTypes.string,
}
TextArea.defaultProps = {
	placeholder: '',
	required: false,
	readOnly: false,
	value: '',
}

export default TextArea
