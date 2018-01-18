import React from 'react'
import { createComponent } from 'react-fela'

const __AndroidDevice = () => ({
	width: 467,
	height: 800,
	background:
		'center top no-repeat url(https://ionicframework.com/img/devices-sprite.jpg)',
	backgroundSize: 467,
	margin: '0 auto',
	position: 'relative',
	backgroundPosition: 'center center',
})

const __AndroidStatusBar = () => ({
	height: 20,
	width: 360,
	background:
		'center no-repeat url(https://ionicframework.com/dist/preview-app/www/assets/img/android-statusbar.png)',
	backgroundSize: 360,
})

const __AndroidDeviceScreen = () => ({
	position: 'absolute',
	marginTop: 65,
	left: 55,
	width: 360,
	height: 588,
	background: 'white',
})

const AndroidDevice = createComponent(__AndroidDevice)
const AndroidDeviceScreen = createComponent(__AndroidDeviceScreen)
const AndroidStatusBar = createComponent(__AndroidStatusBar)

class Android extends React.PureComponent {
	render() {
		return (
			<AndroidDevice>
				<AndroidDeviceScreen>
					<AndroidStatusBar />
					{this.props.children}
				</AndroidDeviceScreen>
			</AndroidDevice>
		)
	}
}

export default Android
