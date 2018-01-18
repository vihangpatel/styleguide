import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

const __ripple = {
	position: 'absolute',
	borderRadius: '50%',
	opacity: 0,
	width: 35,
	height: 35,
	transform: 'translate(-50%, -50%)',
	pointerEvents: 'none',
}

const __wrap = {
	position: 'relative',
	overflow: 'hidden',
}

class Ripples extends PureComponent {
	static propTypes = {
		during: PropTypes.number,
		color: PropTypes.string,
		children: PropTypes.object,
	}

	static defaultProps = {
		during: 600,
		color: 'rgba(0, 0, 0, .3)',
	}

	state = {
		rippleStyle: {},
	}

	handleClick = ev => {
		if (ev.stopPropagation) {
			ev.stopPropagation()
		}

		const { color, during } = this.props
		const {
			pageX,
			pageY,
			currentTarget: { offsetLeft, offsetTop, offsetWidth, offsetHeight },
		} = ev

		const left = pageX - offsetLeft
		const top = pageY - offsetTop

		this.setState({
			rippleStyle: {
				top,
				left,
				opacity: 0.4,
				backgroundColor: color,
			},
		})

		setTimeout(() => {
			const size = Math.max(offsetWidth, offsetHeight)

			this.setState({
				rippleStyle: {
					top,
					left,
					backgroundColor: color,
					transition: `all ${during}ms`,
					transform: `${__ripple.transform} scale(${size / 5})`,
					opacity: 0,
				},
			})
		}, 50)
	}

	render() {
		const { children } = this.props
		const { state, handleClick } = this

		const __rippleWrap = {
			...__wrap,
		}

		return (
			<div
				style={__rippleWrap}
				onClick={handleClick}
				onKeyPress={handleClick}
				role="presentation"
			>
				{children}
				<div
					style={{
						...__ripple,
						...state.rippleStyle,
					}}
				/>
			</div>
		)
	}
}

export default Ripples
