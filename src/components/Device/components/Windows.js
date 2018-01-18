import React from 'react'
import { createComponent } from 'react-fela'

const __WindowsDevice = () => ({
	width: 467,
	height: 800,
	background:
		'center top no-repeat url(https://ionicframework.com/img/devices-sprite.jpg)',
	backgroundSize: 467,
	margin: '0 auto',
	position: 'relative',
	backgroundPosition: 'center bottom',
})

const __WindowsDeviceScreen = () => ({
	marginTop: 85,
	left: 75,
	position: 'absolute',
	width: 320,
	height: 568,
	background: 'white',
})

const __WindowsStatusBar = () => ({
	width: 320,
	height: 20,
	background:
		'center no-repeat url(https://ionicframework.com/dist/preview-app/www/assets/img/wp-statusbar.png)',
	backgroundSize: 320,
})

const WindowsDevice = createComponent(__WindowsDevice)
const WindowsDeviceScreen = createComponent(__WindowsDeviceScreen)
const WindowsStatusBar = createComponent(__WindowsStatusBar)

class Windows extends React.PureComponent {
	render() {
		return (
			<WindowsDevice>
				<WindowsDeviceScreen>
					<WindowsStatusBar />
					{this.props.children}
				</WindowsDeviceScreen>
			</WindowsDevice>
		)
	}
}

export default Windows
