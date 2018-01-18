import React from 'react'
import PropTypes from 'prop-types'
import { createComponent } from 'react-fela'
import { __ToastBody, __SvgSize, __TextSize } from './__style'
import Icon from '../../common/ui/Icon'
import errorToast from '../../common/icons/field-error.svg'
import infoToast from '../../common/icons/field-info.svg'
import toastSuccess from '../../common/icons/field-success.svg'

const ToastBody = createComponent(__ToastBody, 'div', ['onClick'])
const SvgSize = createComponent(__SvgSize)
const TextSize = createComponent(__TextSize)

export default class Toast extends React.Component {
	constructor(props) {
		super(props)
		this.timeout = null
		this.state = {
			show: false,
		}
	}

	componentDidMount() {
		this.handleShowPopup(this.props.show)
	}

	componentWillReceiveProps(nextProps) {
		// will have access to current props
		if (nextProps.show) {
			this.handleShowPopup(nextProps.show)
		}
	}

	componentWillUnmount() {
		if (this.timeout) clearTimeout(this.timeout)
	}

	handleOnClose = () => {
		if (this.props.onClose) this.props.onClose()
	}
	handleShowPopup = show => {
		if (show) {
			this.setState({ show })
			if (this.props.timeout && !this.props.persists) {
				this.timeout = setTimeout(() => {
					this.setState({ show: false }, () => {
						this.handleOnClose()
					})
				}, this.props.timeout)
			}
		} else {
			this.setState({ show: false }, () => {
				this.handleOnClose()
			})
			if (this.timeout) clearTimeout(this.timeout)
		}
	}

	render() {
		let svgName = infoToast
		switch (this.props.type) {
			case 'error':
				svgName = errorToast
				break
			case 'success':
				svgName = toastSuccess
				break
			case 'info':
				svgName = infoToast
				break
			default:
				break
		}

		return (
			<ToastBody
				onClick={() => {
					this.handleShowPopup()
				}}
				type={this.props.type}
				show={this.state.show}
				fixed={this.props.fixed}
			>
				<SvgSize>
					<Icon glyph={svgName} />
				</SvgSize>
				<TextSize>{this.props.data}</TextSize>
			</ToastBody>
		)
	}
}

Toast.defaultProps = {
	timeout: 3000,
	fixed: false,
	onClose: () => {},
}

Toast.propTypes = {
	/** Type of Toast: info, error, success */
	type: PropTypes.string,
	/** Toast Message */
	data: PropTypes.string,
	/** Will show the toast if true */
	show: PropTypes.bool,
	/** SetTimeout limit */
	timeout: PropTypes.number,
	/** Will change toast to snackbar */
	persists: PropTypes.bool,
	/** Will change toast to snackbar */
	fixed: PropTypes.bool,
	/** onClose function toast to snackbar */
	onClose: PropTypes.func,
}
