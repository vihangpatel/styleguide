import React from 'react'
import { createComponent } from 'react-fela'

const __IPhoneDevice = () => ({
	width: 467,
	height: 800,
	background:
		'center top no-repeat url(https://ionicframework.com/img/devices-sprite.jpg)',
	backgroundSize: 467,
	margin: '0 auto',
	position: 'relative',
	backgroundPosition: 'center top',
})

const __IPhoneDeviceScreen = () => ({
	marginTop: 85,
	left: 75,
	position: 'absolute',
	width: 320,
	height: 568,
	background: 'white',
})

const __IPhoneStatusBar = () => ({
	width: 320,
	height: 20,
	background:
		'center no-repeat url(https://ionicframework.com/dist/preview-app/www/assets/img/ios-statusbar.png)',
	backgroundSize: 320,
})

const IPhoneDevice = createComponent(__IPhoneDevice)
const IPhoneDeviceScreen = createComponent(__IPhoneDeviceScreen)
const IPhoneStatusBar = createComponent(__IPhoneStatusBar)

class IPhone extends React.PureComponent {
	render() {
		return (
			<IPhoneDevice>
				<IPhoneDeviceScreen>
					<IPhoneStatusBar />
					{this.props.children}
				</IPhoneDeviceScreen>
			</IPhoneDevice>
		)
	}
}

export default IPhone
