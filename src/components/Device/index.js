import React from 'react'
import PropTypes from 'prop-types'
import IPhone from './components/IPhone'
import Android from './components/Android'
import Windows from './components/Windows'

class Device extends React.Component {
	testing = () => {
		// console.log('TODO: Refactor this component :: Mrigank')
	}
	render() {
		const { deviceType } = this.props
		switch (deviceType) {
			case 'Android':
				return <Android>{this.props.children}</Android>
			case 'Windows':
				return <Windows>{this.props.children}</Windows>
			case 'iPhone':
			default:
				return <IPhone>{this.props.children}</IPhone>
		}
	}
}

export default Device

Device.propTypes = {
	/** Select type of device */
	deviceType: PropTypes.oneOf(['iPhone', 'Windows', 'Android']),
}

Device.defaultProps = {
	deviceType: 'iPhone',
}
